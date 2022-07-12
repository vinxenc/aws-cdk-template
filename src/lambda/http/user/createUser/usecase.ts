import { APIGatewayProxyResultV2, Context } from 'aws-lambda';
import { CreatUserBody } from './validator';

export const execute = async (
	event: HttpEventRequest<unknown, CreatUserBody, unknown>,
	context: Context,
): Promise<APIGatewayProxyResultV2> => {
	await Promise.resolve(true);
	const { body, response, } = event;
	
	const result = {
		message: 'Hello User!',
		input: event,
		context,
		body: { usernamr: body.username },
	};
	return response.json(result);
};
