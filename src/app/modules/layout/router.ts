import { RouteRecordRaw } from "vue-router"

const layoutRouter: Array<RouteRecordRaw> = [
	{
		path: "/layout",
		name: "layout",
		component: () => import("./Layout.vue"),
		children: [
			{
				path: "trip/list",
				name: "trip-list",
				component: () =>
					import(
						/* webpackChunkName: "TripList" */ "tripManagement/TripList.vue"
					).catch((error) => {
						console.error("Error loading TripList:", error)
					}),
			},
			{
				path: "trip/management/:id?",
				name: "trip-management",
				component: () =>
					import(
						/* webpackChunkName: "TripList" */ "tripManagement/ManageTrip.vue"
					).catch((error) => {
						console.error("Error loading ManageTrip:", error)
					}),
			},
			{
				path: "/",
				redirect: { name: "trip-list" },
			},
		],
	},
]

export default layoutRouter
