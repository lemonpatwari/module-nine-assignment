<script setup>
import BlogComponent from "../components/BlogComponent.vue";
import {onMounted, reactive, watch} from "vue";
import axios from "axios";
import {useRoute} from 'vue-router';

const route = useRoute();

const data = reactive({
  newestPosts: [],
  loading: true,
})

watch(route, () => fetchPostsByCategory(route.params.categoryId));
onMounted(() => fetchPostsByCategory(route.params.categoryId));

function fetchPostsByCategory(categoryId) {
  data.loading = true;
  axios.get(`https://basic-blog.teamrabbil.com/api/post-list/${categoryId}`)
      .then((response) => {
        data.newestPosts = response.data;
        data.loading = false;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        data.loading = false;
      })
}
</script>

<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-12">
        <h1 class="text-center">Category Wise Product</h1>
      </div>
    </div>
    <div v-if="data.loading" class="row">
      <div class="col-12">
        <p class="text-center">Loading...</p>
      </div>
    </div>
    <div v-else class="row">
      <div v-for="newestPost in data.newestPosts" class="col-lg-4 mt-4">
        <BlogComponent :item="newestPost"/>
      </div>
    </div>
  </div>
</template>