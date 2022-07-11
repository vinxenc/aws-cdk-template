import { Schema, String } from 'fastest-validator-decorators';

@Schema(true)
export class GetUserPath {
	@String()
	id!: string;
}
