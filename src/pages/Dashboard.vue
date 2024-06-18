<script setup>
import { ref } from 'vue'
import SideBar from "../components/SideBar.vue";

const count = ref(0)
</script>

<template>
  <div class="main-dashboard">
    <SideBar></SideBar>
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.main-dashboard
  display: flex

.main-content
  display: block
  width: 100%
</style>
