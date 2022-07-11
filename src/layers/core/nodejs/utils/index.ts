/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import jsonBodyParser from '@middy/http-json-body-parser';
import httpResponseSerializer from '@middy/http-response-serializer';
import doNotWaitForEmptyEventLoop from '@middy/do-not-wait-for-empty-event-loop';
import warmup from '@middy/warmup';
import isFunction from 'lodash/isFunction';
import isArray from 'lodash/isArray';
import { Context } from 'aws-lambda';
import { getSchema } from 'fastest-validator-decorators';
import { validatorBody } from './validator';
import { Response } from './response';

const responseSerializer = httpResponseSerializer({
	serializers: [
		{
			regex: /^application\/xml$/,
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			serializer: ({ body }) => `<message>${body}</message>`,
		},
		{
			regex: /^application\/json$/,
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			serializer: ({ body }) => body,
		},
		{
			regex: /^text\/plain$/,
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			serializer: ({ body }) => body,
		},
	],
	default: 'application/json',
});

/**
 *
 * @param schema
 * @returns
 */
export const initHttpHandler = <P = unknown, B = unknown, Q = unknown>(
	schema: HttpHandler<P, B, Q>,
) => {
	if (!isFunction(schema.usecase)) {
		throw new SyntaxError('the handler must be a function');
	}

	const httpHandler = middy(schema.usecase)
		.use(warmup())
		.use({
			before({ event }: { event: HttpEventRequest<P, B, Q>; context: Context }) {
				// write your code custom event
				event.response = new Response();
			},
		})
		.use(jsonBodyParser())
		.use(responseSerializer)
		.use(doNotWaitForEmptyEventLoop({ runOnError: true }))
		.use(httpErrorHandler());

	if (schema.reqBody) {
		const reqBody = schema.reqBody as unknown as { prototype: any };
		const bodySchema = getSchema(reqBody);
		httpHandler.use(validatorBody({ schema: bodySchema }));
	}

	if (isArray(schema.middlewares))
		schema.middlewares.forEach((middleware: middy.MiddlewareObj) =>
			httpHandler.use(middleware),
		);
	return httpHandler;
};
