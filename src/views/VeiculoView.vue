<script setup>
import { ref, reactive, onMounted } from "vue";
import VeiculosApi from "@/api/veiculos";
const veiculosApi = new VeiculosApi();

const defaultVeiculo = { id: null, descricao: "" };
const veiculos = ref([]);
const veiculo = reactive({ ...defaultVeiculo });

onMounted(async () => {
  veiculos.value = await veiculosApi.buscarVeiculos();
});

function limpar() {
  Object.assign(veiculo, { ...defaultVeiculo });
}

async function salvar() {
  if (veiculo.id) {
    await veiculosApi.atualizarVeiculo(veiculo);
  } else {
    await veiculosApi.adicionarVeiculo(veiculo);
  }
  veiculos.value = await veiculosApi.buscarVeiculos();
  limpar();
}

function editar(veiculo_para_editar) {
  Object.assign(veiculo, veiculo_para_editar);
}

async function excluir(id) {
  await veiculosApi.excluirVeiculo(id);
  veiculos.value = await veiculosApi.buscarVeiculos();
  limpar();
}
</script>

<template>
  <h1>Veiculo</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="veiculo.descricao" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <hr />
  <ul>
    <li v-for="veiculo in veiculos" :key="veiculo.id">
      <span @click="editar(veiculo)">
        ({{ veiculo.id }}) - {{ veiculo.modelo }} {{ veiculo.cor }} - {{ veiculo.ano }} -  
      </span>
      <button @click="excluir(veiculo.id)">X</button>
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