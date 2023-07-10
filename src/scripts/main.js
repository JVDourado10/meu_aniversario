botao = document.querySelector(".header__infos__button");

botao.addEventListener("mouseover", function () {
  botao.innerHTML = "Manda no Whats :D";
});
botao.addEventListener("mouseout", function () {
  botao.innerHTML = "Garanta sua presença";
});
