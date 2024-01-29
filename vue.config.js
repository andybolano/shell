const { ModuleFederationPlugin } = require("webpack").container

module.exports = {
	publicPath: process.env.VUE_APP_PUBLIC_PATH || "/",
	configureWebpack: {
		plugins: [
			new ModuleFederationPlugin({
				name: "shell",
				remotes: {
					sharedLibrary: `sharedLibrary@${process.env.VUE_APP_REMOTE_SHARED_LIBRARY}/remoteEntry.js`,
					tripManagement: `tripManagement@${process.env.VUE_APP_REMOTE_TRIP_MANAGEMENT}/remoteEntry.js`,
				},
				shared: {
					vue: {
						eager: true,
						singleton: true,
						requiredVersion: "3.2.13",
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
