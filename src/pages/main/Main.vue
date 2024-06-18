<script setup>
import { onMounted, ref } from 'vue'
import { httpPrivate } from "@/services/httpClient.js";
import { useRouter } from "vue-router";
import MainBuilding from './components/MainBuilding.vue'

const router = useRouter();
const buildings = ref([]);

const loading = ref(true);

const fetchBuildings = () => {
  const endpoint = 'modules/houses/getList/';

  httpPrivate.get(endpoint).then(({ data }) => {
    buildings.value = data && data.data ? data.data : [];
    sortBuildings()
  });
}

const sortBuildings = () => {
  buildings.value = buildings.value.sort()
}

const navigateToChat = (id) => {
  router.push({ path: `/chat/${id}` });
}

onMounted(() => {
  fetchBuildings()
})
</script>

<template>
  <div class="main-buildings-list">
    <MainBuilding
      v-for="item in buildings" :key="item.id"
      :name="item.name"
      :description="item.description"
      :img="item.image"
      @click="navigateToChat(item.id)"
    />
  </div>
</template>

<style lang="sass" scoped>
.main-buildings-list
  display: flex
  flex-wrap: wrap
  padding: 25px
  box-sizing: border-box
</style>
