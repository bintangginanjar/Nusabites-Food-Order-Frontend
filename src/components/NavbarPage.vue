<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';

const isActive = ref(false);
const isHidden = ref(true);

function toggleHamburger() {
    //console.log(`isActive : `, isActive.value)
    //console.log(`isHidden : `, isHidden.value)
    isActive.value = !isActive.value;
    isHidden.value = !isHidden.value;
}

function handleScroll() {
    //console.log(window.pageYOffset)
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    //console.log(header.offsetTop);

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
})

</script>

<template>
    <header class="bg-creamy fixed top-0 left-0 w-full flex items-center z-10">
        <div class="container">
            <div class="flex items-center justify-between relative">
                <div class="px-4">
                    <a href="" class="font-bold text-lg text-dark block py-6">Nusa Bites</a>
                </div>
                <div class="flex items-center px-4">
                    <button type="button" class="block absolute right-4 lg:hidden" :class="{'hamburger-active': isActive}" @click="toggleHamburger">
                        <span class="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                        <span class="hamburger-line transition duration-300 ease-in-out"></span>
                        <span class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
                    </button>
                    <nav :class="{'hidden': isHidden}" class="absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                        <ul class="block lg:flex">
                            <li class="group">
                                <a href="#home" class="text-base text-dark py-2 mx-8 flex hover:text-secondary">Home</a>
                            </li>
                            <li class="group">
                                <a href="#about" class="text-base text-dark py-2 mx-8 flex hover:text-secondary">Login</a>
                            </li>
                            <li class="group">
                                <a href="#home" class="text-base text-dark py-2 mx-8 flex hover:text-secondary">Register</a>
                            </li>                            
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.navbar-fixed {
    @apply fixed z-[9999] bg-creamy bg-opacity-80;
    backdrop-filter: blur(5px);
    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.2);
}

.hamburger-line {
    @apply w-[30px] h-[2px] my-2 block bg-dark
}

.hamburger-active > span:nth-child(1) {
    @apply rotate-45;
}

.hamburger-active > span:nth-child(3) {
    @apply -rotate-45;
}

.hamburger-active > span:nth-child(2) {
    @apply scale-0;
}
</style>