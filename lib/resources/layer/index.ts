import * as path from 'path';
import { Construct } from 'constructs';
import { StackProps } from 'aws-cdk-lib';
import { LayerVersion, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import { env } from '../../../env';
import corePackages from '../../../src/layers/core/nodejs/package.json';

export interface DependencyLayers {
	core: {
		layer: LayerVersion;
		externalModules: string[];
	};
}
export class Layer {
	private coreDependencyLayer: LayerVersion;
	private coreExternalModules: string[];

	public constructor(scope: Construct, props: StackProps) {
		const baseName = props.stackName
			? props.stackName
			: `${env.STACK_NAME}-${env.NODE_ENV}`;
		this.coreDependencyLayer = new LayerVersion(
			scope,
			`${baseName}-core-dependency-layer`,
			{
				compatibleRuntimes: [Runtime.NODEJS_16_X],
				code: Code.fromAsset(
					path.join(__dirname, '/../../../src/layers/core/nodejs'),
					{
						bundling: {
							user: 'root',
							image: Runtime.NODEJS_16_X.bundlingImage,
							command: [
								'bash',
								'-xc',
								[
									'export npm_config_update_notifier=false', // Disable npm upgrade check
									'export npm_config_cache=$(mktemp -d)', // Change npm default cache folder
									'cd $(mktemp -d)',
									'cp -v /asset-input/package*.json .',
									'npm i --no-scripts --no-bin-links --only=prod',
									'mkdir -p /asset-output/nodejs',
									'cp -r ./node_modules /asset-output/nodejs',
									'cp -v ./package-lock.json /asset-output/nodejs',
								].join('&&'),
							],
						},
					},
				),
				description: 'core dependency layer',
			},
		);
		this.coreExternalModules = Object.keys(corePackages.dependencies);
	}

	public getDependencies(): DependencyLayers {
		return {
			core: {
				layer: this.coreDependencyLayer,
				externalModules: this.coreExternalModules,
			},
		};
	}
}
