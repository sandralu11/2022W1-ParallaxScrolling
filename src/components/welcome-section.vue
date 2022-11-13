<script setup>

</script>

<template>
	<div class="wrap">
		<!-- <div class="newspapers">
				<div class="paper right"><img src="../assets/img/animation-left.png" alt=""></div>
				<div class="paper left"><img src="../assets/img/animation-right.png" alt=""></div>
				<div class="paper top" data-aos="zoom-out-up" data-aos-offset="200"><img src="../assets/img/animation-top.png" alt=""></div>
		</div> -->
		<div class="content">
			
			<div class="activity">
				<span class="name">THE F2E</span>
				<span class="section">4th </span>
			</div>
			<img class="img" src="../assets/img/people.png" alt="THE F2E">
			<div class="publicity">
					<p class="noto-font">前端工程師和介面設計師，攜手合作拿獎金</p>
					<p class="sub">羨慕別人的酷酷網頁動畫？滿足不了同事的許願？動畫技能樹太雜無從下手？</p>
			</div>
			<div class="people">
					<p>報名總人數 <span class="noto-font">1258  </span>人  </p>
					<p>報名總人數 <span class="noto-font">11152 </span>人 </p>
					<p>報名總人數 <span class="noto-font">48   </span> 人   </p>
			</div>

			<!-- <div class="mouse-scroll"></div> -->

		</div>
	</div>
</template>

<style lang="scss" scoped>
.wrap{
	background:url("../assets/img/index-bg.png");
	padding-top: 10px;
	.newspapers{
			z-index: 20;
			position: relative;
			
			.paper{
				position: absolute;
				// width: 70%;
			}
			.top{
				top: -40px;
				left: -40px;
			}
			.left{
				top: -20px;
				left: -60px;
			}
			.right{
				right: 10px;
			}
		}
	.content{
		max-width: 1280px;
		margin: auto;
		padding: 15px 5px 0;
		background: url('../assets/img/bg.png');
		border: 10px var(--primary-color) solid ;
		position: relative;
		display: grid;
		&::before{
			content: ""; 
			position: absolute; 
			width: 200px;
			height: 130px;
			right: 20px;
			top: 50px;
			background: url('../assets/img/task.png') ;
			background-size: 200px 130px;
		}

		.name{
				color: var(--primary-color);
				font-size: 40px;
				font-weight: 800;
				font-family: 'Noto Serif TC', serif;
		}
		.activity{
			display: flex;
			align-items:center;
		}
		.section{
				border-radius: 10px;
				background-color: var(--red-color);
				padding: 5px 15px;
				color: #FFF;
				font-weight: bolder;
				box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.7);
		}
		.publicity{
				padding: 10px 0;
				color: var(--primary-color);
				font-size: 30px;
				.sub{
					padding: 10px 0;
					font-size: 24px;
					line-height: 35px;
				}
		}
		.people{
			display: none;
			p{
				font-size: 28px;
				line-height: 31px;
				.noto-font{
					font-size: 45px;
					line-height: 60px;
				}
			}
		}
		.img{
				width: 100%;
				height: 100%;
				object-fit: contain;
				object-position: bottom;
		}
		


	}
}
@media (min-width: 768px) {
.wrap{
	padding: 40px;
	.content{
		padding: 50px 55px 0;
		grid-template-columns: repeat(8,minmax(0, 1fr));
		grid-template-rows: repeat(3,minmax(0, 1fr));
		&::before{
			content: ""; 
			width: 450px;
			height: 300px;
			right: -30px;
			top: -50px;
			background-size: 450px 300px;
		}
		.activity{
			grid-column:1/4;
			grid-row: 1/2 ;
			.name{
				font-size: 80px;
				line-height: 90px;
			}
			.section{
				font-size: 32px;
			}
		}
		.publicity{
			grid-column:1/4;
			grid-row: 2/4 ;
			font-size: 42px;
			line-height: 60px;
			.sub {
				width: 70%;
			}
		}
		.people{
			display: block;
			grid-column:7/9;
			grid-row: 2/3;
		}
		.img{
			grid-column:3/8;
			grid-row: 1/4;
		}
		.mouse-scroll {
			grid-column:7/8;
			grid-row: 3/4;
			width: 36px;
			height: 60px;
			border: 2px solid #000;
			border-radius: 30px;
			}
			.mouse-scroll:before {
			content: "";
			position: absolute;
			left: 14px;
			top: 10px;
			margin: auto;
			width: 8px;
			height: 8px;
			background: #000;
			border-radius: 8px;
			animation: scroll-ani 1s linear infinite;
			}

			@keyframes scroll-ani {
			0% {
				top: 10px;
				opacity: 0.8;
			}
			100% {
				top: 25px;
				opacity: .1;
			}
			}
	}
}
}

</style>
