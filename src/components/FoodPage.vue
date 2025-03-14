<script setup>
</script>

<template>
    <section class="pt-2">
        <div class="container">
            <div class="flex justify-center space-x-8 p-6 bg-white">
                <button class="bg-red-500 text-white px-6 py-2 rounded-full">Breakfast</button>
                <button class="text-gray-600 hover:text-red-500">Lunch</button>
                <button class="text-gray-600 hover:text-red-500">Dinner</button>
            </div>

            <!-- Food Menu -->
        <div class="mx-auto py-10">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-16 px-12">
                
                <!-- Food Card -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center hover:scale-110 transition duration-500">
                    <span class="bg-pinky text-red-500 text-sm px-3 py-1 rounded-full">Breakfast</span>
                    <img src="https://ik.imagekit.io/69plbkujo/pngtree-hand-drawn-winter-food-delicious-casserole-drawn-foodcartoon-foodwinter-png-image_671394-removebg-preview.png?updatedAt=1741924385948" alt="Eggs Benedict" class="w-40 mx-auto my-4 rounded-full">
                    <h3 class="text-lg font-bold">Eggs Benedict</h3>
                    <p class="text-gray-500 text-sm my-2">Gay one the what walk then she. Demesne mention pr</p>
                    <p class="text-xl font-bold text-gray-800">$8.99</p>
                    <button class="bg-red-500 text-white px-6 py-2 rounded-full mt-4 hover:scale-110 transition duration-500">Order Now</button>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md text-center hover:scale-110 transition duration-500">
                    <span class="bg-pinky text-red-500 text-sm px-3 py-1 rounded-full">Breakfast</span>
                    <img src="https://ik.imagekit.io/69plbkujo/pngtree-cartoon-hand-drawn-a-bowl-of-gourmet-design-image_1079094-removebg-preview.png?updatedAt=1741924387287" class="w-40 mx-auto my-4 rounded-full">
                    <h3 class="text-lg font-bold">Breakfast Sandwich</h3>
                    <p class="text-gray-500 text-sm my-2">Gay one the what walk then she. Demesne mention pr</p>
                    <p class="text-xl font-bold text-gray-800">$9.99</p>
                    <button class="bg-red-500 text-white px-6 py-2 rounded-full mt-4 hover:scale-110 transition duration-500">Order Now</button>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-md text-center hover:scale-110 transition duration-500">
                    <span class="bg-pinky text-red-500 text-sm px-3 py-1 rounded-full">Breakfast</span>
                    <img src="https://ik.imagekit.io/69plbkujo/d2407e9cb13d17c635236324d1353cbd-removebg-preview.png?updatedAt=1741924388058" class="w-40 mx-auto my-4 rounded-full">
                    <h3 class="text-lg font-bold">Baked Chicken</h3>
                    <p class="text-gray-500 text-sm my-2">Gay one the what walk then she. Demesne mention pr</p>
                    <p class="text-xl font-bold text-gray-800">$10.99</p>
                    <button class="bg-red-500 text-white px-6 py-2 rounded-full mt-4 hover:scale-110 transition duration-500">Order Now</button>
                </div>
            </div>
        </div>
        </div>        
    </section>    
</template>