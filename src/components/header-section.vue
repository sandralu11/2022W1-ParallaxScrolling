<script>
import { ref } from 'vue'
export default {
	setup() {
		const btn = ref(false)

		return {
			btn
		}
	}
}
</script>

<template>
	<header :class="{ 'active': btn }">
		<div class="burger">
			<div @click="btn = !btn">
				<i class='bx bx-x' v-if="btn"></i>
				<i class='bx bx-menu' v-else></i>
			</div>
		</div>
		<div>
				<img alt="logo" class="logo" src="../assets/img/hex-logo 1.png"/>
		</div>

			<ul class="nav">
					<li><a href="#">關卡任務</a></li>
					<li><a href="#">競賽說明</a></li>
			</ul>

		<div>
			<button class="red-btn">立即報名</button>
		</div>
	</header>
</template>

<style lang="scss" scoped>
header {
	z-index: 10;
	background-color: var(--primary-color);
	top:0;
	left: 0;
	width: 100%;
	position: sticky;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	.logo,ul{
		display: none;
	}
	.burger{
		.bx-menu,.bx-x{
			font-size: 40px;
			color: #FFF;
		}

	}
}
@media (max-width: 768px) {
	.active{
		.nav{
			position: absolute;
			top: 100%;
			left: 0;
			display: block;
			background-color: var(--primary-color);
			width: 100%;
			text-align: center;
			z-index: 1;
			li{
				padding: 20px;
			}
		}
		.red-btn{
			display: none;
		}
	}
}
@media (min-width: 768px) {
	header {
		padding: 13px 20px;
		.logo{
			display: block;
		}
		.burger{
			display: none;
		}
		.nav{
			display: block;
			margin-left: auto;
			li{
				display: inline-block;
				padding: 0 20px;
			}
		}
	}
}

</style>
