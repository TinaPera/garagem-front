<script setup>
import { ref, reactive, onMounted } from "vue";
import MarcasApi from "@/api/marcas";
const marcasApi = new MarcasApi();

const defaultMarca = { id: null, descricao: "" };
const marcas = ref([]);
const marca = reactive({ ...defaultMarca });

onMounted(async () => {
  marcas.value = await marcasApi.buscarMarcas();
});

function limpar() {
  Object.assign(marca, { ...defaultMarca });
}

async function salvar() {
  if (marca.id) {
    await marcasApi.atualizarMarca(marca);
  } else {
    await marcasApi.adicionarMarca(marca);
  }
  marcas.value = await marcasApi.buscarMarcas();
  limpar();
}

function editar(marca_para_editar) {
  Object.assign(marca, marca_para_editar);
}

async function excluir(id) {
  await marcasApi.excluirMarca(id);
  marcas.value = await marcasApi.buscarMarcas();
  limpar();
}
</script>

<template>
  <h1>Marca</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="marca.descricao" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <hr />
  <ul>
    <li v-for="marca in marcas" :key="marca.id">
      <span @click="editar(marca)">
        ({{ marca.id }}) - {{ marca.nome }} - {{ marca.nacionalidade }} -
      </span>
      <button @click="excluir(marca.id)">X</button>
    </li>
  </ul>
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
}</style>