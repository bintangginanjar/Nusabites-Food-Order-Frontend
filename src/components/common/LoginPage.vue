<script setup>
import { ref } from "vue"
import NavbarPage from './NavbarPage.vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const API_URL = "http://localhost:8080";
const loginEndpoint = "/api/auth/login";

const email = ref("");
const password = ref("");
const router = useRouter();

async function handleLogin() {
    try {
        const response = await axios.post(API_URL + loginEndpoint, {
            email: email.value,
            password: password.value
        });
        
        const userData = response.data.data;
        localStorage.setItem("token", userData.token);

        if (userData.roles[0] === "ROLE_ADMIN") {
            router.push("/admin")
        } else {
            router.push("/")
        }
        
    } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        alert("Invalid email or password");
    }
}

</script>
<template>
    <NavbarPage/>    
    <div class="flex justify-center items-center py-16 bg-creamy">
        <div class="bg-white shadow-lg rounded-lg p-6 w-96">        
                
        <h2 class="text-2xl font-semibold text-center mb-6">Log In</h2>

        <input v-model="email" type="email" placeholder="Email" class="w-full border rounded-lg p-2 mb-4" />

        <input v-model="password" type="password" placeholder="Password" class="w-full border rounded-lg p-2 mb-4" />

        <button @click="handleLogin" class="w-full bg-greeny text-white p-2 rounded-lg font-semibold">Log In</button>

        <p class="text-center text-sm mt-3">
            Need an account? <router-link to="/register" class="text-red-500 font-semibold">Register</router-link>
        </p>
        <!--
        <div class="mt-4 text-center text-gray-500">OR</div>
        <button class="w-full border p-2 mt-3 flex items-center justify-center rounded-lg">
            <img src="@/assets/google-icon.png" class="w-5 mr-2" /> Sign In With Google
        </button>
        -->
        </div>        
    </div>
</template>