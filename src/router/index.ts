import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import LayoutRouter from "@/app/modules/layout/router"

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		redirect: "/layout",
		name: "root",
	},
	...LayoutRouter,
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
