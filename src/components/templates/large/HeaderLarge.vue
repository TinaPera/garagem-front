<script setup>
</script>

<template>
    <div class="header">
        <div class="logo">
            <img src="/logo.png" alt="Logo">
            <p>Garagem</p>
        </div>
        <div class="models">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/acessorios">Acessórios</router-link>
            <router-link class="link" to="/categorias">Categorias</router-link>
            <router-link class="link" to="/cores">Cores</router-link>
            <router-link class="link" to="/modelos">Modelos</router-link>
            <router-link class="link" to="/veiculos">Veículos</router-link>
        </div>
        <div class="login">
            <router-link class="link" to="/login">Login</router-link>
        </div>
    </div>
</template>

<style scoped>

.header {
    display: flex;
    justify-content: space-between;
    height: 8vh;
    width: 100%;
    border-radius: 10px;
    background-color: rgb(230, 230, 230);
}

.logo {
    display: flex;
    width: 15%;
    align-items: center;
    font-size: 2em;
}

img {
    width: 20%;
}

.models {
    display: flex;
    align-items: center;
    justify-content: space-between;
    display: flex;
    font-size: 1.4em;
    width: 35%;
}

.login {
    display: flex;
    align-items: center;
    font-size: 1.2em;
}

.link {
    text-decoration: none;
    color: inherit;
}

.link:hover {
    color: rgb(26, 26, 26);
}

.menu-hamburguer {
    display: none;
}
</style>