import { initHttpHandler } from '/opt/core/utils';
import { CreatUserBody } from './validator';
import { execute } from './usecase';

const schema: HttpHandler<unknown, CreatUserBody, unknown> = {
	name: 'createUser',
	reqBody: CreatUserBody,
	usecase: execute,
};

export const handler = initHttpHandler(schema);
