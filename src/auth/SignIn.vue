<script setup>
import { ref } from 'vue'
import { httpPublic, setToken } from "@/services/httpClient.js";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const email = ref('superadmin@example.com');
const password = ref('secret');

const loading = ref(false);
const router = useRouter();

const login = () => {
  loading.value = true;
  const body = {
    email: email.value,
    password: password.value
  }
  httpPublic.post('auth/login', body).then((res) => {
    if (res && res.data && res.data.data && res.data.data.access_token) {
      setToken(res.data.data.access_token);
      ElMessage({
        message: 'Вы успешно авторизованы!',
        type: 'success',
      })
      router.push('/dashboard');
    }
  }).finally(() => {
    loading.value = false;
  })
}
</script>

<template>
  <div class="auth">
    <div class="auth-content">
      <h1 class="auth-content__title">Sign In</h1>
      <h2 class="auth-content__sub-title">AI Chat | Авторизация</h2>
      <div class="auth-content-help">
        Use account <b>superadmin@example.com</b> and password <b>secret</b> to continue.
      </div>
      <div class="auth-form">
        <div class="auth-form-row">
          <div class="auth-form-row__label">Email</div>
          <el-input v-model="email" size="large" placeholder="Please type email..." :disabled="loading" />
        </div>
        <div class="auth-form-row">
          <div class="auth-form-row__label">Password</div>
          <el-input v-model="password" size="large" type="password" placeholder="Please type password..."  :disabled="loading"/>
        </div>
        <el-button type="primary" size="large" @click="login" :disabled="loading" :loading="loading">Continue</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.auth
  display: flex
  justify-content: center
  align-items: center
  margin-top: 50px

  &-content
    max-width: 400px
    width: 100%

    &__title
      color: #071437
      font-size: 22px
      text-align: center
      font-weight: 500

    &__sub-title
      margin-top: 15px
      color: #99A1B7
      font-size: 16px
      text-align: center
      font-weight: 500

    &-help
      margin-top: 20px
      background: #F8F5FF
      color: #7239EA
      font-size: 13px
      line-height: 22px
      padding: 26px
      box-sizing: border-box
      border-radius: 6px

  &-form
    margin-top: 15px

    &-row
      margin-bottom: 18px

      &__label
        color: #071437
        font-size: 14px
        font-weight: 600
        margin-bottom: 8px

    .el-button
      width: 100%

</style>
