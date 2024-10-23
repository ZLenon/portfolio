import fetchData from "../utils/fetchData.js";

const loadPage = async () => {
  const data = await fetchData();
  const title = document.getElementById("title-principal");
  const job = document.getElementById("profissão");
  const foto = document.getElementById("foto-pessoal");

  title.innerText = data.nome;
  job.innerText = data.profissão;
  foto.src = data.foto;
};

loadPage();
