import {Config} from '@remotion/cli/config';

Config.overrideWebpackConfig((currentConfiguration) => {
	return {
		...currentConfiguration,
		module: {
			...currentConfiguration.module,
			rules: [
				...(currentConfiguration.module?.rules
					? currentConfiguration.module.rules
					: []
				).filter((rule) => {
					if (rule === '...') {
						return false;
					}
					if (rule.test?.toString().includes('.css')) {
						return false;
					}
					return true;
				}),
				{
					test: /\.css$/i,
					use: [
						'style-loader',
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: ['postcss-preset-env', 'autoprefixer'],
								},
							},
						},
					],
				},
			],
		},
	};
});

Config.setMaxTimelineTracks(30);
Config.setConcurrency(4);
Config.setOverwriteOutput(true);
Config.setCodec('h264');
Config.setCrf(30);

Config.setDelayRenderTimeoutInMilliseconds(150000);
