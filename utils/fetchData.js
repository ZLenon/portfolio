async function fetchData() {
  try {
    const response = await fetch("../data/infos.json");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error.message);
  }
}

fetchData();

export default fetchData;

// fetch("../data/infos.json");
