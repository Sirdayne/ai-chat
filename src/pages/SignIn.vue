<script setup>
import { ref } from 'vue'

const email = ref('superadmin@example.com');
const password = ref('secret');
</script>

<template>
  <div class="auth">
    <div class="auth-content">
      <h1 class="auth-content__title">Sign In</h1>
      <h2 class="auth-content__sub-title">AI Chat | Авторизация</h2>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.auth
  display: flex
  justify-content: center
  align-items: center

  &-content
    max-width: 1200px
    width: 100%

</style>
