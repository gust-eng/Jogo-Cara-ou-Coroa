const resultado = document.querySelector("#resultado");
const botao = document.querySelector("#jogar");

function JogarMoeda(){
    const radom = Math.random() < 0.5 ? "Cara" : "Coroa";
    resultado.textContent = radom;
}

botao.addEventListener("click", JogarMoeda);