<script setup>

import {onMounted, reactive} from 'vue';
import axios from "axios";

const data = reactive({
  categories: []
})

onMounted(async () => {
  try {
    const response = await axios.get("https://basic-blog.teamrabbil.com/api/post-categories");
    data.categories = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">LP</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto" v-if="data.categories?.length > 0">
          <li v-for="category in data.categories" :key="category.id" class="nav-item">
            <router-link class="nav-link active" aria-current="page" :to="{ name: 'category-wise-product', params: { categoryId: category.id }}">{{ category.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>