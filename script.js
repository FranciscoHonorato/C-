let tabuleiro = ['', '', '', '', '', '', '', '', '']
let jogador = "O"
let cor = "white"


function atualizarJogo() {
	for (let i in tabuleiro) {
		let tela = document.getElementById("cel" + i)

		cor = tabuleiro[i] == "X" ? "gold" : "SpringGreen"
		tela.style.color = cor
		tela.innerHTML = tabuleiro[i]
	}
}


function jogar(num) {
let msgVencedor = document.getElementById('modal')
let menssagem = document.getElementById('menssagem')

	if (tabuleiro[num] == '') {
		tabuleiro[num] = jogador
		atualizarJogo()
		if (checarVencedor()) {
			msgVencedor.showModal()
			menssagem.innerText = "Vencedor " + jogador + " !"
		limparQuadro()
		} else if (checarEmpate()) {
			msgVencedor.showModal()
			menssagem.innerText = "Empate !" 
			limparQuadro()
		} else {
			jogador = jogador == "X" ? "O" : "X"
			setTimeout(jogadorAutomatico, 600)
		}
	}
	console.log('---------------------------------------------------')
}


function checarVencedor() {

	if (
		(tabuleiro[0] != '' && tabuleiro[0] == tabuleiro[1] && tabuleiro[1] == tabuleiro[2]) ||
		(tabuleiro[3] != '' && tabuleiro[3] == tabuleiro[4] && tabuleiro[4] == tabuleiro[5]) ||
		(tabuleiro[6] != '' && tabuleiro[6] == tabuleiro[7] && tabuleiro[7] == tabuleiro[8]) ||
		(tabuleiro[0] != '' && tabuleiro[0] == tabuleiro[3] && tabuleiro[3] == tabuleiro[6]) ||
		(tabuleiro[1] != '' && tabuleiro[1] == tabuleiro[4] && tabuleiro[4] == tabuleiro[7]) ||
		(tabuleiro[2] != '' && tabuleiro[2] == tabuleiro[5] && tabuleiro[5] == tabuleiro[8]) ||
		(tabuleiro[0] != '' && tabuleiro[0] == tabuleiro[4] && tabuleiro[4] == tabuleiro[8]) ||
		(tabuleiro[2] != '' && tabuleiro[2] == tabuleiro[4] && tabuleiro[4] == tabuleiro[6])
	) {
		return true;
	} else {
		return false;
	}
}


function checarEmpate() {
	for (let i = 0; i < tabuleiro.length; i++) {
		if (tabuleiro[i] == '') {
			return false;
		}
	}
	return true;
}


function limparQuadro() {
	tabuleiro = ['', '', '', '', '', '', '', '', '']
	jogador = 'O'
	atualizarJogo()
}


function jogadorAutomatico() {
	let i = Math.floor( 9 * Math.random())

	if (tabuleiro[i] == '' && jogador == 'X') {
		jogar(i)
	} else if(i > 0 && i < 10) {
		jogadorAutomatico()
	}
console.log(i)

}

atualizarJogo()

