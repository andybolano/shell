<template>
	<div class="sidebar sidebar--desk">
		<div class="information">
			<CusAvatar :name="fullName" />
			<div class="information__data">
				<h5 class="information__name" :title="fullName">
					{{ fullName }}
				</h5>
				<p class="information__description">Administrator</p>
			</div>
		</div>
		<div class="sidebar__content">
			<ul class="menu">
				<li v-for="link in menu" :key="link.to">
					<router-link :to="link.to" v-slot="{ isActive }">
						<div
							class="menu__item"
							:class="
								isActive
									? 'menu__item--active'
									: 'menu__item--normal'
							"
						>
							<i :class="link.icon"></i>
							<a>
								{{ link.title }}
							</a>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" src="./SidebarComponent.ts" />
<style lang="scss" src="./SidebarComponent.scss" scoped></style>
