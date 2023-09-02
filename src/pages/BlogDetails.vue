<script setup>
import BlogComponent from "../components/BlogComponent.vue";
import {onMounted, ref, watch} from "vue";
import axios from "axios";
import {useRoute} from 'vue-router';

const route = useRoute();
const postDetails = ref();
const loading = ref(true);

watch(route, () => fetchPostsByCategory(route.params.blogId));
onMounted(() => fetchPostsByCategory(route.params.blogId));

function fetchPostsByCategory(blogId) {
  loading.value = true;
  axios.get(`https://basic-blog.teamrabbil.com/api/post-details/${blogId}`)
      .then((response) => {
        postDetails.value = response?.data?.postDetails;
        loading.value = false;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        loading.value = false;
      })
}
</script>

<template>
  <div class="container">
    <div class="row mt-3">
    </div>
    <div v-if="loading.value" class="row">
      <div class="col-12">
        <p class="text-center">Loading...</p>
      </div>
    </div>
    <div v-else class="row">
      <div class="col-lg-12 mt-4">
        <BlogComponent :item="postDetails" type="single"/>
      </div>
    </div>
  </div>
</template>