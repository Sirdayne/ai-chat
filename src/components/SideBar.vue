<script setup>
import { useRouter } from "vue-router";
import { logout } from "@/services/httpClient.js";

const router = useRouter();

const clickLogout = () => {
  router.push('/sign-in');
  logout();
}
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <img src="@/assets/ai-logo.png" class="sidebar-logo" alt="">
      <img src="@/assets/logout.svg" class="sidebar-logout" alt="" @click="clickLogout()">
    </div>

    <div class="sidebar-profile">
      <div class="sidebar-profile-img">
        <img src="@/assets/profile.jpg" class="sidebar-logo" alt="">
      </div>
      <div class="sidebar-profile-settings">
        <div class="sidebar-profile-settings-name">Super Admin</div>
        <div class="sidebar-profile-settings-role">Admin</div>
        <div class="sidebar-profile-settings-status">online</div>
      </div>
    </div>

    <div class="sidebar-links">
      <router-link class="sidebar-link" to="/dashboard/" exact-active-class="active">Главная</router-link>
      <router-link class="sidebar-link" active-class="active" to="/dashboard/rating">Рейтинг ЖК</router-link>
      <router-link class="sidebar-link" active-class="active" to="/dashboard/chart">Dashboard</router-link>
      <router-link class="sidebar-link" active-class="active" to="/dashboard/buildings">Список ЖК</router-link>
      <router-link class="sidebar-link" active-class="active" to="/dashboard/users">Список пользователей</router-link>
    </div>

  </div>
</template>

<style lang="sass">
.sidebar
  min-width: 300px
  width: 300px
  background: #0d0e12
  min-height: 100vh
  box-sizing: border-box
  padding: 20px
  overflow-y: auto

  &-header
    display: flex
    justify-content: space-between
    align-items: center

    .sidebar-logo
      width: 35px
      height: auto

    .sidebar-logout
      width: 22px
      height: auto
      cursor: pointer

  &-profile
    display: flex
    margin-top: 25px
    border-top: 1px dashed #1F212A
    padding-top: 25px

    &-img
      margin-right: 20px

      img
        width: 50px
        height: auto
        border-radius: 6px

    &-settings

     &-name
       color: #fff
       font-size: 14px
       margin-bottom: 7px
       font-weight: 600

     &-role
       color: #78829D
       font-size: 11px
       margin-bottom: 7px

     &-status
       color: #17C653
       font-size: 10px

  &-links
    margin-top: 25px
    border-top: 1px dashed #1F212A

  &-link
    color: #b6b9c8
    font-size: 13px
    box-sizing: border-box
    padding: 15px
    cursor: pointer
    transition: color .2s ease
    border-radius: 6px
    display: block
    text-decoration: none

    &.active
      color: #fff
      background: #1b84ff

    &:hover
      color: #fff
</style>
