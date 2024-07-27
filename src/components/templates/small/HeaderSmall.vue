<script setup>
import { ref } from 'vue'
import Menu from 'vue-material-design-icons/Menu.vue';
// import { useScreen } from '@/composables/screen.js';

// const { isMobile } = useScreen();
const menuAberto = ref(false);

</script>

<template>
    <div class="header">
        <div class="logo">
            <img src="/logo.png" alt="Logo">
        </div>
        <Menu class="menu-hamburger" @click="menuAberto = !menuAberto" />
    </div>
        <div v-if="menuAberto" class="menu">
            <div class="models">
            <router-link class="link" to="/" @click="menuAberto = !menuAberto">Home</router-link>
            <router-link class="link" to="/acessorios" @click="menuAberto = !menuAberto">Acessórios</router-link>
            <router-link class="link" to="/categorias" @click="menuAberto = !menuAberto">Categorias</router-link>
            <router-link class="link" to="/cores" @click="menuAberto = !menuAberto">Cores</router-link>
            <router-link class="link" to="/modelos" @click="menuAberto = !menuAberto">Modelos</router-link>
            <router-link class="link" to="/veiculos" @click="menuAberto = !menuAberto">Veículos</router-link>
        </div>
        <div class="login">
            <router-link class="link" to="/login" @click="menuAberto = !menuAberto">Login</router-link>
        </div>
        </div>
</template>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        background-color:  rgb(231, 162, 248);
        border-radius: 5px;
    }

    .menu {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 5px;
        height: 80vh;
        width: 96%;
        margin-top: 2%;
        background-color: rgb(230, 230, 230);
        border-radius: 10px;
        font-size: 1.5rem;
        position: absolute;
    }

    .menu-hamburger {
        display: flex;
        align-self: center;
        justify-content: center;
        font-size: xx-large;
    }

    .models {
        display: flex;
        flex-direction: column;
        margin-top: 3%;
        margin-left: 3%;
    }
    
    .link {
        text-decoration: none;
        color: inherit;
    }

    .link:hover {
        color: rgb(26, 26, 26);
    }

    .login {
        margin: 0 0 3% 3%
    }

    img {
        width: 20vw;
    }

</style>