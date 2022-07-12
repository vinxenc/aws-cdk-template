/* eslint-disable consistent-return */
import middy from '@middy/core';
import { APIGatewayProxyResultV2 } from 'aws-lambda';
import Validator, { ValidatorConstructorOptions } from 'fastest-validator';

/**
 *
 * The validator use `fastest-validator` package, please refer to the documentation: https://github.com/icebob/fastest-validator
 */

const defaultOptions = {
	defaults: {
		object: {
			strict: 'remove',
		},
	},
};

export interface MiddlewareValidatorOptions<SchemaType> {
	schema: SchemaType;
	options?: ValidatorConstructorOptions;
}
/**
 * @author: @lucduong
 *
 * The validator use `fastest-validator` package, please refer to the documentation: https://github.com/icebob/fastest-validator
 */
export const validatorBody = <SchemaType>({
	schema,
	options = {},
}: MiddlewareValidatorOptions<SchemaType>): middy.MiddlewareObj<
	HttpEventRequest<unknown, unknown, unknown>,
	APIGatewayProxyResultV2
> => {
	const v = new Validator({
		useNewCustomCheckerFunction: true,
		...options,
		...defaultOptions,
	});
	const check = v.compile(schema);

	return {
		before: async ({ event }) => {
			const result = await check(event?.body);
			if (result === true) return;

			return event.response.badRequest({ errors: result });
		},
	};
};
