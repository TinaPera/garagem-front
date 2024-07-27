<script setup>
import { onMounted } from 'vue';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const getUserInfo = async () => {
  try {
    const authToken = localStorage.getItem('psg_auth_token');
    const passageUser = new PassageUser(authToken);
    const user = await passageUser.userInfo(authToken);
    if (user) {
      await authStore.setToken(authToken);
    } else {
      authStore.unsetToken();
    }
  } catch (error) {
    authStore.unsetToken();
  }
};

onMounted(() => {
  getUserInfo();
});
</script>

<template>
    <h1>Projeto garagem</h1>
</template>

<style scoped>
button {
    background-color: rgb(192, 125, 255);
    margin: 2px;
    color: white;
    border-radius: 5px;
    border: none;
    height: 30px;
}

h1 {
    color: rgb(204, 91, 219);
}
</style>