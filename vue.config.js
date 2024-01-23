const { ModuleFederationPlugin } = require("webpack").container

module.exports = {
	publicPath: "http://localhost:8080",
	configureWebpack: {
		plugins: [
			new ModuleFederationPlugin({
				name: "shell",
				remotes: {
					uiLibrary: "uiLibrary@http://localhost:8081/remoteEntry.js",
					tripManagement:
						"tripManagement@http://localhost:8082/remoteEntry.js",
				},
				shared: {
					vue: {
						eager: true,
						singleton: true,
					},
				},
			}),
		],
	},
}
