import express from 'express';
import serverless from 'serverless-http';
import swaggerUI from './swagger-ui';

const options = {
	explorer: true,
};

const app = express();
import swaggerDocument from './api-specification/api.json';
console.log(swaggerDocument, 'swaggerDocument');
app.use(
	'/docs',
	swaggerUI.serve,
	swaggerUI.setup(swaggerDocument as swaggerUI.JsonObject, options),
);
const redirectRouter = express.Router();
redirectRouter.use(
	'docs',
	swaggerUI.serve,
	swaggerUI.setup(swaggerDocument as swaggerUI.JsonObject, options),
);
app.use('/prod', redirectRouter);

export const handler = serverless(app);
