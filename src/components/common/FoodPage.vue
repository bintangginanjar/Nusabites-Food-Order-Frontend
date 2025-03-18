<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const API_URL = "http://localhost:8080";
const foodEndpoint = "/api/foods";
const categoryEndpoint = "/api/categories"

const foods = ref([]);
const filteredFood = ref([]);
const categories = ref([]);
const selectedCategory = ref([]);

// Computed property for paginated menu items
/*
const paginatedMenu = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredMenu.value.slice(start, end);
});
*/

// Total pages computed dynamically
//const totalPages = computed(() => Math.ceil(filteredMenu.value.length / itemsPerPage));

// Pagination functions
/*
async function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

async function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}
*/

// Fetch food from API
async function fetchFoods() {
    try {
        const response = await axios.get(API_URL + foodEndpoint);
        foods.value = response.data.data;
        changeCategory(selectedCategory.value);
    } catch (error) {
        console.log("Error fetching foods:", error);
    }
}

// Fetch categories from API
async function fetchCategories() {
    try {
        const response = await axios.get(API_URL + categoryEndpoint);
        categories.value = response.data.data;
        console.log(categories.value);
        selectedCategory.value = categories.value[0].name;
        console.log(selectedCategory.value);
        await fetchFoods();
    } catch (error) {
        console.log("Error fetching categories:", error);
    }
}

async function changeCategory(category) {
    console.log('Change category');
    selectedCategory.value = category;
    console.log(category);
    filteredFood.value = foods.value.filter((item) => item.categoryName === category);
    //currentPage.value = 1;
}

onMounted(async () => {
    //await fetchFoods();
    await fetchCategories();
})
</script>

<template>
        <section class="pt-2">
        <div class="container">
            <div class="flex justify-center space-x-8 p-6 bg-white">
                <button v-for="category in categories" :key="category.id" @click="changeCategory(category.name)" class="px-6 py-2 rounded-full" :class="selectedCategory === category.name ? 'bg-greeny text-white' : 'bg-green-200 text-green-800'">{{ category.name }}</button>                
            </div>

        <!-- Food Menu -->
        <div class="mx-auto py-10">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-16 px-12">
                <!-- Food Card -->
                <div v-for="food in filteredFood" v-bind:key="food.id" class="bg-white p-6 rounded-lg shadow-md text-center hover:scale-110 transition duration-500">
                    <span class="bg-pinky border-2 border-greeny text-greeny text-sm px-3 py-1 rounded-full">{{ food.categoryName }}</span>
                    <img v-bind:src="food.photoUrl" v-bind:alt="food.name" class="w-40 mx-auto my-4 rounded-full">
                    <h3 class="text-lg font-bold">{{ food.name }}</h3>
                    <p class="text-gray-500 text-sm my-2">{{ food.description }}</p>
                    <p class="text-xl font-bold text-gray-800">IDR {{ food.price }}K</p>
                    <button class="bg-greeny text-white px-6 py-2 rounded-full mt-4 hover:scale-110 transition duration-500">Order Now</button>
                </div>                                
            </div>
        </div>
        </div>        
    </section>    
</template>