module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['avatars.githubusercontent.com'],
	},
	compiler: {
		// see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
		styledComponents: true,
		removeConsole: {
			exclude: ['error'],
		},
	},
	swcMinify: true,
	// experimental: {
	//     modularizeImports: {
	//         'test-utils/?(((\\w*)?/?)*)': {
	//             transform: 'src/utils/{{ matches.[1] }}/{{member}}',
	//         },
	//         'test-utils': {
	//             transform: 'src/utils/test-utils.tsx',
	//         },
	//     },
	// },
};
