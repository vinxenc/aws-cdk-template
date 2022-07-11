import { HttpMethod } from '@aws-cdk/aws-apigatewayv2-alpha';
import { BaseLambdaStack, Route } from '../../lambda';

export class UsersStack extends BaseLambdaStack {
	protected getRoutes(): Route[] {
        const { GET, POST } = HttpMethod;
		const core = this.layers.core;
		return [
			{ path: '/users', method: POST, functionName: 'createUser', layers: [core.layer], externalModules: core.externalModules },
			{ path: '/users/{id}', method: GET, functionName: 'getUser', requiresAuth: false, layers: [core.layer], externalModules: core.externalModules },
		]
	}
};
