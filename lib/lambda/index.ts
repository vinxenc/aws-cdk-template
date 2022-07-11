import { NestedStack, NestedStackProps, StackProps } from 'aws-cdk-lib';
import { LayerVersion } from 'aws-cdk-lib/aws-lambda';
import { HttpUserPoolAuthorizer } from '@aws-cdk/aws-apigatewayv2-authorizers-alpha';
import { AddRoutesOptions, HttpApi, HttpMethod } from '@aws-cdk/aws-apigatewayv2-alpha';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as path from 'path';

export interface LambdaStackOptions extends NestedStackProps {
	api: HttpApi
	stackName: string
	region: string
	account: string
	authorizer: HttpUserPoolAuthorizer
	apiPathPrefix?: string
	environment: {
		[key: string]: string
	};
	layers: {
		core: {
			layer: LayerVersion;
			externalModules: string[];
		};
	}
}

export type Route = {
	path: string;
	method: HttpMethod | HttpMethod[];
	stackName?: string;
	functionName: string;
	requiresAuth?: boolean;
    layers: LayerVersion[];
	externalModules: string[];
};

export abstract class BaseLambdaStack extends NestedStack {
    protected api: HttpApi;
	protected authorizer!: HttpUserPoolAuthorizer;
	private readonly scope: Construct;
	private rawStackId: string;
	protected layers: { core: { layer: LayerVersion; externalModules: string[]; } };
	protected abstract getRoutes(): Route[];

    public constructor(scope: Construct, id: string, protected options: LambdaStackOptions) {
		super(scope, `${id}-stack`)

		this.rawStackId = id
		this.scope = scope
		this.api = options.api
		this.authorizer = options.authorizer
		this.layers = options.layers;
		this.create()
	}

    protected create(): void {
		const routes = this.getRoutes();
		routes.forEach((route) => this.api.addRoutes(this.createRouter(this.scope, route)));
	}

    protected createRouter(scope: Construct, route: Route): AddRoutesOptions {
        const pathPrefix = this.options.apiPathPrefix ?? '';
		const pathFunction = `${pathPrefix}${route.functionName}`;
		console.log(path.join(__dirname, `../../`, '==='));
        const lambdaFunction = new NodejsFunction(scope, `${route.functionName}`, {
            functionName: `${route.functionName}`,
            runtime: Runtime.NODEJS_16_X,
            entry: path.join(__dirname, `../../src/lambda/http/${this.rawStackId}/${pathFunction}/index.ts`),
            bundling: {
                minify: false,
                externalModules: [],
            },
            layers: route.layers,
        });
        return {
			path: route.path,
			methods: Array.isArray(route.method) ? route.method : [route.method],
			integration: new HttpLambdaIntegration(`${route.functionName}-integration`, lambdaFunction),
			authorizer: route.requiresAuth ? this.authorizer : undefined,
		}
    }
}