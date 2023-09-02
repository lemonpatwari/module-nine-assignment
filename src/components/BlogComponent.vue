<script setup>
// const props = defineProps(['item','single'])
const props = defineProps({
  item: {
    required: true
  },
  type: {
    default: 'multiple'
  }
})

</script>

<template>
  <div v-if="item" class="card">
    <img :src="item?.img" class="card-img-top" :alt="item?.title">
    <div class="card-body">
      <h5 class="card-title">{{ item?.title }}</h5>

      <template v-if="'multiple' == type">
        <p class="card-text">{{ item?.short }}</p>
        <router-link :to="{ name: 'blog-details', params: { blogId: item?.id }}" class="btn btn-primary">See Details
        </router-link>
      </template>

      <template v-else>
        <p>{{ item?.content }}</p>
      </template>
    </div>
  </div>

  <div v-else class="card">
    <div class="card-body">
      <p class="text-center">No Data Found.</p>
    </div>
  </div>
</template>

<style scoped>

</style>