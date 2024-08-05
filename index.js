// RELATÓRIOS

const value = document.getElementById("report-input");
const reportBtn = document.getElementById("report-btn");
const content = document.getElementById("content");

reportBtn.addEventListener("click", function () {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const textContainer = document.createElement("div");
  const img = document.createElement("img");
  const removebtn = document.createElement("button");

  removebtn.id = "removeButton";
  img.id = "img";
  img.src = "/pngs/assets/exit.png";
  removebtn.appendChild(img);

  textContainer.id = "textContainer";
  div.id = "reportContent";
  p.id = "reportContentText";
  textContainer.appendChild(p);
  textContainer.appendChild(removebtn);

  function lerArquivoTxt(caminhoArquivo) {
    return fetch(caminhoArquivo)
      .then((response) => response.text())
      .then((conteudo) => {
        return conteudo;
      })
      .catch((erro) => {
        console.error("Ocorreu um erro ao ler o arquivo:", erro);
        return null;
      });
  }

  const caminhoDoArquivo = `../reports/Súmula ${value.value}°.txt`;
  lerArquivoTxt(caminhoDoArquivo).then((conteudoDoArquivo) => {
    console.log("Sucessfull");
    // Aqui você pode fazer o que quiser com o conteúdo do arquivo
  });
  //FUNÇAO ASSINCRONA
  async function exibirConteudoDoArquivo() {
    const caminhoDoArquivo = `../reports/Súmula ${value.value}°.txt`;
    try {
      const conteudoDoArquivo = await lerArquivoTxt(caminhoDoArquivo);
      const p = document.getElementById("reportContentText");
      p.innerText = conteudoDoArquivo;
    } catch (erro) {
      console.error("Ocorreu um erro:", erro);
    }
  }
  exibirConteudoDoArquivo();

  div.appendChild(textContainer);

  if (document.getElementById("reportContent") === null) {
    content.appendChild(div);
  }

  removebtn.addEventListener("click", function () {
    content.removeChild(div);
  });
});

// CARDS
