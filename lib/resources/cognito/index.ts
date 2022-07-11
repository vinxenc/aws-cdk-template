import {
	UserPool,
	AccountRecovery,
	UserPoolClient,
	UserPoolClientIdentityProvider,
} from 'aws-cdk-lib/aws-cognito';
import { HttpUserPoolAuthorizer } from '@aws-cdk/aws-apigatewayv2-authorizers-alpha';
import { StackProps, Stack , RemovalPolicy} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class Cognito {
    public userPool: UserPool;
    public userPoolClient: UserPoolClient;
    public authorizer: HttpUserPoolAuthorizer;
    public constructor(scope: Construct, props: StackProps) {
        const removalPolicy = process.env.NODE_ENV === 'production' ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY
        this.userPool = new UserPool(scope, `${props.stackName}-user-pool`, {
			userPoolName: `${props.stackName}-user-pool`,
			selfSignUpEnabled: true,
			signInAliases: {
				email: true,
			},
			autoVerify: {
				email: true,
			},
			standardAttributes: {
				givenName: {
					required: true,
					mutable: true,
				},
				familyName: {
					required: true,
					mutable: true,
				},
			},
			// customAttributes: {
			// 	country: new cognito.StringAttribute({ mutable: true }),
			// 	city: new cognito.StringAttribute({ mutable: true }),
			// 	userType: new cognito.StringAttribute({ mutable: false }),
			// 	acceptTerm: new cognito.StringAttribute({ mutable: false }),
			// 	acceptPolicy: new cognito.StringAttribute({ mutable: false }),
			// },
			passwordPolicy: {
				minLength: 6,
				requireLowercase: true,
				requireDigits: true,
				requireUppercase: false,
				requireSymbols: false,
			},
			accountRecovery: AccountRecovery.EMAIL_ONLY,
			removalPolicy,
			// lambdaTriggers: {
			// 	postConfirmation: new NodejsFunction(
			// 		this,
			// 		'postConfirmation',
			// 		getNodejsFunctionOptions(this, {
			// 			entry: path.resolve(__dirname, '../../../functions/auth/index.ts'),
			// 			handler: 'cognitoUserConfirmed',
			// 			environment: this.props.environment ?? {},
			// 			layers: [coreLayer],
			// 			initialPolicy: [
			// 				new PolicyStatement({
			// 					effect: Effect.ALLOW,
			// 					resources: [
			// 						`arn:aws:cognito-idp:${Stack.of(this).region}:${Stack.of(this).account}:userpool/*`,
			// 					],
			// 					actions: [`cognito-idp:AdminAddUserToGroup`],
			// 				}),
			// 			],
			// 		}),
			// 	),
			// 	preTokenGeneration: new NodejsFunction(
			// 		this,
			// 		'cognitoPreTokenGenerator',
			// 		getNodejsFunctionOptions(this, {
			// 			entry: path.resolve(__dirname, '../../../functions/auth/index.ts'),
			// 			handler: 'cognitoPreTokenGenerator',
			// 			environment: this.props.environment ?? {},
			// 			layers: [coreLayer],
			// 		}),
			// 	),
			// 	preSignUp: new NodejsFunction(
			// 		this,
			// 		'cognitoPreSignUp',
			// 		getNodejsFunctionOptions(this, {
			// 			entry: path.resolve(__dirname, '../../../functions/auth/index.ts'),
			// 			handler: 'cognitoPreSignUp',
			// 			environment: this.props.environment ?? {},
			// 			layers: [coreLayer],
			// 		}),
			// 	),
			// },
		});

        // const clientReadAttributes = new cognito.ClientAttributes()
		// 	.withStandardAttributes(standardCognitoAttributes)
		// 	.withCustomAttributes(...['country', 'city', 'userType', 'acceptTerm', 'acceptPolicy'])

		// const clientWriteAttributes = new cognito.ClientAttributes()
		// 	.withStandardAttributes({
		// 		...standardCognitoAttributes,
		// 		emailVerified: false,
		// 		phoneNumberVerified: false,
		// 	})
		// 	.withCustomAttributes(...['country', 'city', 'userType', 'acceptTerm', 'acceptPolicy'])
       this.userPoolClient = new UserPoolClient(scope, `${props.stackName}-user-pool-client`, {
			userPoolClientName: `${props.stackName}-user-pool-client`,
			userPool: this.userPool,
			authFlows: {
				custom: true,
				userSrp: true,
				userPassword: true,
			},
			supportedIdentityProviders: [UserPoolClientIdentityProvider.COGNITO],
			// readAttributes: clientReadAttributes,
			// writeAttributes: clientWriteAttributes,
		});

        this.authorizer = new HttpUserPoolAuthorizer(`${props.stackName}-user-pool-client-authorizer`, this.userPool, {
			userPoolClients: [this.userPoolClient],
			identitySource: ['$request.header.Authorization'],
		});
    }
}