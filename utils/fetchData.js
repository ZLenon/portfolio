function fetchData() {
  fetch("../data/infos.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao carregar o arquivo JSON: " + response.status);
      }
      const data = response.json();
      return data;
    })
    .then((data) => {
      // Aqui você trabalha com os dados JSON no console.log
      console.log(data);
    })
    .catch((error) => {
      console.error("Erro ao fazer o fetch:", error.message);
    });
}

export default fetchData;
