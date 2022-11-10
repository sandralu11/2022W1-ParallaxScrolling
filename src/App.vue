<script setup>
import HeaderSection from './components/header-section.vue'
import WelcomeSection from './components/welcome-section.vue'
import HexschoolSection from './components/hexschool-section.vue'
import TimeSection from './components/time-section.vue'
import AwardsSection from './components/awards-section.vue'
import LiveSection from './components/live-section.vue'
import FooterSection from './components/footer-section.vue'
window.addEventListener("DOMContentLoaded",function(){
  AOS.init();
})

</script>

<template>
  <HeaderSection/>
  <WelcomeSection/>
  <HexschoolSection/>
  <TimeSection/>
  <AwardsSection/>
  <LiveSection/>
  <FooterSection/>
</template>

<style lang="scss">
#app{
  background:url("./assets/img/bg.png");
  min-height:100vh ;
}

</style>
