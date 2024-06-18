<template>
  <div class="main-building-card">
    <img class="main-building__img" :src="img ? getImageUrl(img) : '@/assets/building.png'" alt="" />

    <div class="main-building__title">
      {{ name }}
    </div>

    <div class="main-building__description">
      {{ description }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "main-building",
  props: {
    name: String,
    description: String,
    img: String,
  },
  components: {},
  setup() {

    const getImageUrl = (url) => {
      return 'https://bi-chat.aidala.uk' + url;
    }

    return {
      getImageUrl,
    };
  },
});
</script>

<style lang="sass">
.main-building-card
  width: 100%
  max-width: 350px
  margin-right: 30px
  margin-bottom: 24px
  padding: 20px 30px
  border: 1px solid #F1F1F4
  box-sizing: border-box
  border-radius: 6px
  cursor: pointer

.main-building__img
  width: 100%
  height: 250px
  object-fit: fill
  border-radius: 6px

.main-building__title
  color: #071437
  font-size: 20px
  font-weight: 500
  margin-top: 12px

.main-building__description
  margin-top: 10px
  color: #a1a5b7
  font-size: 12px
  line-height: 16px
  letter-spacing: 0.5px
  font-weight: 500
</style>
