<script setup>
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Main</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/sign-in">Sign In</router-link>
    </nav>
  </div>
  <RouterView></RouterView>
</template>

<style lang="scss">
@import "element-plus/dist/index.css";
</style>
