import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { env } from '../env';
import { LambdaStackOptions } from './lambda';
import { Cognito } from './resources/cognito';
import { HttpApiGateway } from './resources/httpApi';
import { Layer } from './resources/layer';
import merge from 'lodash/merge';
import { UsersStack } from './stack/httpLambda/user';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkTemplateStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
    const httpApiGateway = new HttpApiGateway(this, props);
    const layer = new Layer(this, props);
    const cognito = new Cognito(this, props);
    const options: LambdaStackOptions = {
			api: httpApiGateway.httpApi,
			authorizer: cognito.authorizer,
			stackName: env.STACK_NAME,
			region: this.region,
			account: this.account,
			environment: merge({...env as unknown as { [key: string]: string }}, {}),
      layers: layer.getDependencies(),
		};
    new UsersStack(this, 'user', options);
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsCdkTemplateQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
