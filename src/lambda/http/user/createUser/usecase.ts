import { APIGatewayProxyResultV2, Context } from 'aws-lambda';
import { CreatUserBody } from './validator';

export const execute = async (
	event: HttpEventRequest<unknown, CreatUserBody, unknown>,
	context: Context,
): Promise<APIGatewayProxyResultV2> => {
	await Promise.resolve(true);
	const body = event.body;
	const res = event.response;
	const result = {
		message: 'Hello User!',
		input: event,
		context: context,
		body: { usernamr: body.username },
	};
	return res.json(result);
};
