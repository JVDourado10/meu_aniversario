AOS.init();
const dataDoEvento = new Date("May 27, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diaEmMs = 86400000;
    const horaEmMs = 3600000;
    const minEmMs = 60000;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % diaEmMs / horaEmMs);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % horaEmMs / minEmMs);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % minEmMs / 1000);
    document.getElementById("header__date").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("header__date").innerHTML = "Evento Expirado";
    }
}, 1000);
botao = document.querySelector(".header__infos__button");
botao.addEventListener("mouseover", function() {
    botao.innerHTML = "Manda no Whats :D";
});
botao.addEventListener("mouseout", function() {
    botao.innerHTML = "Garanta sua presen\xe7a";
});

//# sourceMappingURL=index.f75de5e1.js.map
