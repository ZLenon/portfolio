import fetchData from "../utils/fetchData.js";

const loadHeader = async () => {
  const data = await fetchData();
  const title = document.getElementById("title-principal");
  const job = document.getElementById("profissão");
  const foto = document.getElementById("foto-pessoal");

  title.innerText = data.nome;
  job.innerText = data.profissão;
  foto.src = data.foto;
};

loadHeader();

const loadArticle = async () => {
  const data = await fetchData();
  const sobreMin = document.getElementById("sobre-min");
  const habilidades = document.getElementById("habilidades");

  sobreMin.innerText = data["sobre-min"];
  const itens = String(data.habilidades).split(",");

  // Para cada item da string, cria um <li> e adiciona à <ul>
  itens.forEach((item) => {
    const li = document.createElement("li"); // Cria um elemento <li>
    li.textContent = item.trim(); // Define o texto do <li> e remove possíveis espaços em branco
    habilidades.appendChild(li); // Adiciona o <li> à lista <ul>
  });
};

loadArticle();
