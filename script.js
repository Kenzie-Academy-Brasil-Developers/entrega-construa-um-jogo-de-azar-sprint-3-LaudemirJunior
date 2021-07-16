function numeros() {
    let resultado = Math.ceil(Math.random() * 20)
  return resultado
}

function respostaPossivel() {

let resposta = numeros()

  if (resposta == 1) {
    return "É certo."
  } if (resposta == 2) {
    return "É decididamente assim."
  } if (resposta == 3) {
    return "Sem dúvida.."
  } if (resposta == 4) {
    return "Sim, definitivamente."
  } if (resposta == 5) {
    return "Você pode confiar nisso."
  } if (resposta == 6) {
    return "A meu ver, sim."
  } if (resposta == 7) {
    return "Provavelmente."
  } if (resposta == 8) {
    return "Parece bom."
  } if (resposta == 9) {
    return "Sim."
  } if (resposta == 10) {
    return "Os sinais apontam que sim."
  } if (resposta == 11) {
    return "Resposta nebulosa, tente novamente."
  } if (resposta == 12) {
    return "Pergunte novamente mais tarde."
  } if (resposta == 13) {
    return "Melhor não contar agora."
  } if (resposta == 14) {
    return "Não é possível prever agora."
  } if (resposta ==15) {
    return "Concentre-se e pergunte novamente."
  } if (resposta == 16) {
    return "Não conte com isso."
  } if (resposta == 17) {
    return " Minha resposta é não."
  } if (resposta == 18) {
    return "Minhas fontes dizem não."
  } if (resposta == 19) {
    return "Não parece ser bom."
  } if (resposta == 20) {
    return " Muito duvidoso."
  }
}

const button = document.getElementById("bola");

button.addEventListener("click", function(){ 

   const p = document.getElementById("resultado")
   p.innerText = respostaPossivel()
})
