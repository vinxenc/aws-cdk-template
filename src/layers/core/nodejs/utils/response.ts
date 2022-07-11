import { StatusCodes } from 'http-status-codes';

export class Response {
	private _status: StatusCodes;
	public constructor() {
		this._status = StatusCodes.OK;
	}

	public status(status: StatusCodes) {
		this._status = status;
		return this;
	}

	public send(data: string) {
		const result = {
			statusCode: this._status,
			body: data,
		};

		return result;
	}

	public json(data: object) {
		return this.send(JSON.stringify(data));
	}

	public badRequest(data: object) {
		this._status = StatusCodes.BAD_REQUEST;
		return this.json(data);
	}
}
