import { Menu } from "./interfaces/Menu"
import { defineComponent } from "vue"

export default defineComponent({
	name: "SidebarComponent",
	setup() {
		const menu = [
			{
				icon: "icon-box",
				to: { name: "trip-list" },
				title: "Trip List",
			},
			{
				icon: "icon-truck",
				to: { name: "trip-management" },
				title: "Create Trip",
			},
		] as Array<Menu>

		return {
			menu,
			fullName: "Andy Yair Bolaño Castilla",
		}
	},
})
