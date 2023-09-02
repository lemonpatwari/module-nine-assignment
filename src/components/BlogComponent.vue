<script setup>
const props = defineProps(['item'])

</script>

<template>
  <div class="card">
    <img :src="item.img" class="card-img-top" :alt="item.title">
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <p class="card-text">{{ item.short }}</p>
      <router-link to="/" class="btn btn-primary">See Details</router-link>
    </div>
  </div>
</template>

<style scoped>

</style>