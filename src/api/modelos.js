import axios from "axios";

export default class ModelosApi {
  async buscarModelos() {
    const { data } = await axios.get("/modelos/");
    return data.results;
  }

  async adicionarModelos(modelo) {
    const { data } = await axios.post("/modelos/", modelo);
    return data.results;
  }

  async atualizarModelos(modelo) {
    const { data } = await axios.put(`/modelos/${modelo.id}/`, modelo);
    return data.results;
  }

  async excluirModelos(id) {
    const { data } = await axios.delete(`/modelos/${id}/`);
    return data.results;
  }
  
}