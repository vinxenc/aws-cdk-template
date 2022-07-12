import { Schema, String } from 'fastest-validator-decorators';

@Schema(true)
export class CreatUserBody {
	@String()
	username!: string;
	
	@String()
	password!: string;
}
