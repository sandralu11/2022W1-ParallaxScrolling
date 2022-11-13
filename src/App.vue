<script setup>
import HeaderSection from './components/header-section.vue'
import WelcomeSection from './components/welcome-section.vue'
import HexschoolSection from './components/hexschool-section.vue'
import TimeSection from './components/time-section.vue'
import AwardsSection from './components/awards-section.vue'
import LiveSection from './components/live-section.vue'
import FooterSection from './components/footer-section.vue'
import Loading from './components/loading.vue'
import { ref } from '@vue/reactivity'
const modal = ref(true)
window.addEventListener("DOMContentLoaded",function(){
  AOS.init()
  setTimeout(()=>{
    modal.value = false

  }, 1000)
})

</script>

<template>
  
  <HeaderSection/>
  <Transition mode="out-in">
    <Loading v-if="modal"/>
  </Transition>
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
  cursor:url('./assets/img/cursor.png'),auto;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
