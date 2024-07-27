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
    height: 10vh;
    width: 100%;
    border-radius: 5px;
    background-color:  rgb(231, 162, 248);
}

.logo {
    display: flex;
    width: 15%;
    align-items: center;
    font-size: 1.8em;
    color: white;
    padding: 5px;
}

img {
    width: 20%;
}

.models {
    display: flex;
    align-items: center;
    justify-content: space-between;
    display: flex;
    font-size: 1em;
    width: 35%;
    color: white;
}

.login {
    display: flex;
    align-items: center;
    font-size: 1em;
    color: white;
}

.link {
    text-decoration: none;
    color: inherit;
}

.link:hover {
    color: rgb(0, 0, 0);
}

.menu-hamburguer {
    display: none;
}

</style>