var titulo = document.querySelector("h1");
titulo.onmouseenter = esconderSubtitulo;
titulo.onmouseleave = aparecerSubtitulo;

var porcentagem = document.querySelector("#porcentagem");
porcentagem.oninput = mostrarPOrcentagem;
porcentagem.onfocus = mudarEstilo;
porcentagem.onblur = voltarEstilo;

function voltarEstilo() {
	porcentagem.style.height = "16px";
}

function mudarEstilo() {
	porcentagem.style.height = "100px";
}

function mostrarPOrcentagem() {
	var valorPorcentagem = document.querySelector("#valorPorcentagem");
	var valorAtual = porcentagem.value;
	valorPorcentagem.textContent = porcentagem.value;

	var mensagem = document.querySelector("#mensagem");

	if (valorAtual > 14) {
		mensagem.style.display = "block";
	} else {
		mensagem.style.display = "none";
	}
}
function esconderSubtitulo() {
	var subtitulo = document.querySelector("h2");
	subtitulo.style.display = "none";
}

function aparecerSubtitulo() {
	var subtitulo = document.querySelector("h2");
	subtitulo.style.display = "block";
}