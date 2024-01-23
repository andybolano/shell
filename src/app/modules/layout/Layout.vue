<template>
	<div>
		<h1>Layout</h1>
		<router-view />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	name: "LayoutView",
})
</script>
