<script setup>
</script>
<template>
    <div class="w-64 h-full bg-gray-800 text-white p-4">
        <h2 class="text-xl font-bold mb-4">Admin Panel</h2>
        <ul class="space-y-2">
        <li>
            <router-link to="/admin" class="block p-2 hover:bg-gray-700 rounded">
            <i class="pi pi-home mr-2"></i> Dashboard
            </router-link>
        </li>
        <li>
            <router-link to="/admin/users" class="block p-2 hover:bg-gray-700 rounded">
            <i class="pi pi-users mr-2"></i> Users
            </router-link>
        </li>
        <li>
            <router-link to="/admin/categories" class="block p-2 hover:bg-gray-700 rounded">
            <i class="pi pi-cog mr-2"></i> Categories
            </router-link>
        </li>
        <li>
            <router-link to="/admin/foods" class="block p-2 hover:bg-gray-700 rounded">
            <i class="pi pi-cog mr-2"></i> Foods
            </router-link>
        </li>
        </ul>
    </div>
</template>