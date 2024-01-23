<template>
	<div class="wrapper">
		<div class="navigation">
			<SidebarComponent />
		</div>
		<div class="main-container">
			<router-view />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import SidebarComponent from "./components/sidebar/SidebarComponent.vue"

export default defineComponent({
	name: "LayoutView",
	components: {
		SidebarComponent,
	},
})
</script>
<style lang="scss" scoped>
.wrapper {
	display: flex;
	height: 100vh;
	width: 100%;
}
.navigation {
	display: flex;
	height: 100%;
	position: relative;
}
.main-container {
	position: relative;
	z-index: 0;
	overflow-x: hidden;
	overflow-y: auto;
	will-change: margin-left;
	transition: all 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
	min-height: 100vh;
	width: 100%;
	margin-left: var(--width-sidebar);
}
</style>
