<script setup>
import { onMounted, ref } from 'vue'
import { httpPrivate } from "@/services/httpClient.js";
import { useRouter } from "vue-router";
import MainBuilding from './components/MainBuilding.vue';
import Spinner from '@/components/Spinner.vue';

const router = useRouter();
const buildings = ref([]);

const loading = ref(false);

const fetchBuildings = () => {
  loading.value = true;
  const endpoint = 'modules/houses/getList/';

  httpPrivate.get(endpoint).then(({ data }) => {
    buildings.value = data && data.data ? data.data : [];
    sortBuildings()
  }).finally(() => loading.value = false);
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
  <div>
    <div v-if="loading" class="spinner-container">
      <Spinner></Spinner>
    </div>
    <div class="main-buildings-list" v-else>
      <MainBuilding
          v-for="item in buildings" :key="item.id"
          :name="item.name"
          :description="item.description"
          :img="item.image"
          @click="navigateToChat(item.id)"
      />
    </div>
  </div>
</template>

<style lang="sass">
.main-buildings-list
  display: flex
  flex-wrap: wrap
  padding: 25px
  box-sizing: border-box

.spinner-container
  display: flex
  width: 100%
  height: 200px
  justify-content: center
  align-items: center
</style>
