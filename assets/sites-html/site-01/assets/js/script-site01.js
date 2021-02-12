let seuVotoPara = document.querySelector(".div-1-1 span"),
	cargo = document.querySelector(".div-1-2 span"),
	descricao = document.querySelector(".div-1-4"),
	aviso = document.querySelector(".div-2"),
	lateral = document.querySelector(".div-1-right"),
	//Modificar espaço dos numeros
	numeros = document.querySelector(".div-1-3");

let etapaAtual = 0,
	numero = "";

votobranco = false;

function comecarEtapa() {
	let etapa = etapas[etapaAtual];

	let numeroHtml = "";

	numero = "";

	votobranco = false;

	for (let i = 0; i < etapa.numeros; i++) {
		if (i == 0) {
			numeroHtml += '<div class="numero pisca">&nbsp</div>';
		} else {
			numeroHtml += '<div class="numero">&nbsp</div>';
		}
	}

	seuVotoPara.style.display = "none";
	cargo.innerHTML = etapas[etapaAtual].titulo;
	descricao.innerHTML = "";
	aviso.style.display = "none";
	lateral.innerHTML = "";
	numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
	let etapa = etapas[etapaAtual],
		candidato = etapa.candidatos.filter((item) => {
			if (item.numero === numero) {
				return true;
			} else {
				return false;
			}
		});
	if (candidato.length > 0) {
		candidato = candidato[0];
		seuVotoPara.style.display = "block";
		aviso.style.display = "block";
		descricao.innerHTML = `Nome: ${candidato.nome} <br/> 
        Partido: ${candidato.partido} <br/>`;

		let fotosHtml = "";
		for (let i in candidato.fotos) {
			if (candidato.fotos[i].small) {
				fotosHtml += `<div class='div-1-image small'><img src='./assets/img/${candidato.fotos[i].url}' /> ${candidato.fotos[i].legenda}</div>`;
			} else {
				fotosHtml += `<div class='div-1-image'><img src='./assets/img/${candidato.fotos[i].url}' /> ${candidato.fotos[i].legenda}</div>`;
			}
		}

		lateral.innerHTML = fotosHtml;
	} else {
		seuVotoPara.style.display = "block";
		aviso.style.display = "block";
		descricao.innerHTML = "<div class='aviso-grande pisca'>VOTO NULO</div>";
	}
}

function clicou(n) {
	let elNumero = document.querySelector(".numero.pisca");
	if (elNumero !== null) {
		elNumero.innerHTML = n;
		numero = `${numero}${n}`;

		elNumero.classList.remove("pisca");
		if (elNumero.nextElementSibling !== null) {
			elNumero.nextElementSibling.classList.add("pisca");
		} else {
			atualizaInterface();
		}
	}
}
function branco() {
	votobranco = true;
	if (numero === "") {
		numeros.innerHTML = "";
		seuVotoPara.style.display = "block";
		aviso.style.display = "block";
		descricao.innerHTML =
			"<div class='aviso-grande pisca'>VOTO EM BRANCO</div>";
	}
}
function corrige() {
	comecarEtapa();
}
function confirma() {
	let etapa = etapas[etapaAtual];

	votoConfirmado = false;

	if (votobranco == true || numero.length == etapa.numeros) {
		votoConfirmado = true;
	}

	if (votoConfirmado) {
		++etapaAtual;
		if (etapas[etapaAtual] !== undefined) {
			comecarEtapa();
		} else {
			document.querySelector(".tela").innerHTML =
				"<div class='aviso-gigante pisca'>FIM!</div>";
		}
	}
}

comecarEtapa();
