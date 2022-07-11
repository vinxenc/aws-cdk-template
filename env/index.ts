import { cleanEnv, str } from 'envalid';

export const env = cleanEnv(process.env, {
	STACK_NAME: str({ default: 'Lambda-cdk-ts-template' }),
	NODE_ENV: str({
		choices: ['local', 'development', 'production', 'staging'],
		default: 'local',
	}),
	AWS_ACCOUNT: str({ default: '181563824805' }),
	AWS_REGION: str({ default: 'eu-central-1' }),
});
