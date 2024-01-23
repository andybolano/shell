import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Trip from "tripManagement/Trip.vue"

const routes: Array<RouteRecordRaw> = [
	{
		path: "/trip-management",
		name: "trip",
		component: Trip,
	},
	{
		path: "/",
		redirect: "/trip-management",
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
