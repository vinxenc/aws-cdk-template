import { APIGatewayProxyResultV2, Context } from 'aws-lambda';
import { GetUserPath } from './validator';
import { addNumber } from '/opt/core/common';

export const execute = async (
	event: HttpEventRequest<GetUserPath, unknown, unknown>,
	context: Context,
): Promise<APIGatewayProxyResultV2> => {
	await Promise.resolve(true);
	const { id }= event.pathParameters;
	const res = event.response;
	const result = {
		message: 'Hello User!',
		input: event,
		context,
		add: addNumber(6, 4),
		id,
	};
	return res.json(result);
};
