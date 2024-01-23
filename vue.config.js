const { ModuleFederationPlugin } = require("webpack").container

module.exports = {
	publicPath: "http://localhost:8080",
	configureWebpack: {
		plugins: [
			new ModuleFederationPlugin({
				name: "shell",
				remotes: {
					sharedLibrary:
						"sharedLibrary@http://localhost:8081/remoteEntry.js",
					tripManagement:
						"tripManagement@http://localhost:8082/remoteEntry.js",
				},
				shared: {
					vue: {
						eager: true,
						singleton: true,
						requiredVersion: "3.4.14",
					},
					"vue-router": {
						eager: true,
						singleton: true,
						requiredVersion: "4.2.5",
					},
				},
			}),
		],
		optimization: {
			splitChunks: false,
		},
	},
}
