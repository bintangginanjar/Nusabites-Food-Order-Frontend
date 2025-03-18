<script setup>
import NavbarPage from './NavbarPage.vue';

</script>
<template>
    <NavbarPage/>
    <div class="flex justify-center items-center py-8 bg-creamy">
        <div class="bg-white shadow-lg rounded-lg p-6 w-96">        
            <h2 class="text-2xl font-semibold text-center mb-6">Register</h2>

            <input v-model="email" type="email" placeholder="Email" class="w-full border rounded-lg p-2 mb-4" />

            <input v-model="password" type="password" placeholder="Password" class="w-full border rounded-lg p-2 mb-4" />

            <input v-model="confirmPassword" type="confirmPassword" placeholder="Confirmed Password" class="w-full border rounded-lg p-2 mb-4" />

            <button @click="register" class="w-full bg-greeny text-white p-2 rounded-lg font-semibold">Register</button>

            <p class="text-center text-sm mt-3">
                Already have an account? <router-link to="/login" class="text-greeny font-semibold">Log In</router-link>
            </p>

            <!--
            <div class="mt-4 text-center text-gray-500">OR</div>

            <button class="w-full border p-2 mt-3 flex items-center justify-center rounded-lg">
                <img src="@/assets/google-icon.png" class="w-5 mr-2" /> Sign Up With Google
            </button>
            -->
        </div>
    </div>
</template>