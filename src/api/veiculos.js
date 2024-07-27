import axios from "axios";
export default class veiculosApi {
  async buscarVeiculos() {
    const { data } = await axios.get("/veiculos/");
    return data.results;
  }
  async adicionarVeiculos(veiculo) {
    const { data } = await axios.post("/veiculos/", veiculo);
    return data.results;
  }
  async atualizarVeiculos(veiculo) {
    const { data } = await axios.put(`/veiculos/${veiculo.id}/`, veiculo);
    return data.results;
  }
  async excluirVeiculos(id) {
    const { data } = await axios.delete(`/veiculos/${id}/`);
    return data.results;
  }
}