import { Construct } from 'constructs';
import { StackProps, RemovalPolicy, CfnOutput, Stack } from 'aws-cdk-lib';
import { CorsHttpMethod, HttpApi } from '@aws-cdk/aws-apigatewayv2-alpha';

export class HttpApiGateway {
	public httpApi: HttpApi;

    public constructor(scope: Construct, props: StackProps) {
        this.httpApi = new HttpApi(scope, 'http-api', {
			apiName: `${props.stackName}-http-api`,
			description: `HTTP API for ${props.stackName}`,
			corsPreflight: {
				allowHeaders: ['Content-Type', 'X-Amz-Date', 'Authorization', 'X-Api-Key'],
				allowMethods: [
					CorsHttpMethod.OPTIONS,
					CorsHttpMethod.GET,
					CorsHttpMethod.POST,
					CorsHttpMethod.PUT,
					CorsHttpMethod.PATCH,
					CorsHttpMethod.DELETE,
				],
				// allowCredentials: true,
				// allowOrigins: [
				// 	'http://localhost:3000',
				// 	'https://staging.noracares.at',
				// 	'https://www.noracares.at',
				// 	'https://release-v1-0-0.ds4uj62wy35hg.amplifyapp.com',
				// ],
			},
		})
		new CfnOutput(scope, `${props.stackName}-api-url`, { value: this.httpApi.url! })
    }
};
