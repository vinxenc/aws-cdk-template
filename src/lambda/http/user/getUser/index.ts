import { initHttpHandler } from '/opt/core/utils';
import { GetUserPath } from './validator';
import { execute } from './usecase';

const schema: HttpHandler<GetUserPath, unknown, unknown> = {
	name: 'createUser',
	usecase: execute,
};

export const handler = initHttpHandler(schema);
