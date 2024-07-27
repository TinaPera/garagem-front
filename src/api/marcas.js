import axios from "axios";

export default class MarcasApi {
  async buscarMarcas() {
    const { data } = await axios.get("/marcas/");
    return data.results;
  }

  async adicionarMarcas(marca) {
    const { data } = await axios.post("/marcas/", marca);
    return data.results;
  }

  async atualizarMarcas(marca) {
    const { data } = await axios.put(`/marcas/${marca.id}/`, marca);
    return data.results;
  }

  async excluirMarcas(id) {
    const { data } = await axios.delete(`/marcas/${id}/`);
    return data.results;
  }

}