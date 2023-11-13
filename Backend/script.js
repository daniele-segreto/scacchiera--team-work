// VARIABILE GIOCATORE
var giocatore; // Si aggiorna la posizione ogni volta
var board = [];

// FUNZIONE per portare tutto l'array a false
window.onload = function () {
	for (let i = 0; i < 64; i++) {
		board[i] = false;
	}
	/*player() //Attiva la variabile giocatore
	 console.log(giocatore);
	 spawn();

	for(let i = 0; i<board.length; i++) {
        if(board[i] == true && i != giocatore) {
	        console.log(i + " ");
	    }
	} */
};
//FUNZIONE PER IL MOVIMENTO DEL GIOCATORE
function movimento(direction) {
    // controlla se il giocatore esiste
	if (!(typeof giocatore === "undefined")) {
        // controllo in quale direzione vogliamo muoverci
		switch (direction) {
            // 
			case "right":
				if ((giocatore + 1) % 8 == 0 || (giocatore + 2) % 8 == 0) {
					alert("Non puoi muoverti a destra");
					if (
						document.getElementById("errore").classList.contains("invisibile")
					) {
						document.getElementById("errore").classList.remove("invisibile");
						document.getElementById("errore").classList.add("visibile");
					}
				} else {
					// altrimeti
					if (board[giocatore + 2] == false) {
						board[giocatore] = false;
						document.getElementById(giocatore.toString()).innerHTML = "";
						board[giocatore + 2] = true;
						giocatore += 2;
                        conversione();
						document.getElementById(giocatore.toString()).innerHTML =
							"<i class='fas fa-user-astronaut astronauta' style='color: #4ce900'></i>";

						if (
							document.getElementById("errore").classList.contains("visibile")
						) {
							document.getElementById("errore").classList.add("invisibile");
							document.getElementById("errore").classList.remove("visibile");
						}
						console.log("Il giocatore si è mosso in posizione " + giocatore);
					} else {
						document.getElementById("errore").classList.remove("invisibile");
						document.getElementById("errore").classList.add("visibile");
					}
				}

				break;

			case "left":
				if (
					giocatore == 1 || giocatore == 0 ||
					giocatore % 8 == 0 ||
					(giocatore - 1) % 8 == 0
				) {
					alert("Non puoi muoverti a sinistra");
					if (
						document.getElementById("errore").classList.contains("invisibile")
					) {
						document.getElementById("errore").classList.remove("invisibile");
						document.getElementById("errore").classList.add("visibile");
					}
				} else {
					// altrimenti
					if (board[giocatore - 2] == false) {
						board[giocatore] = false;
						document.getElementById(giocatore.toString()).innerHTML = "";
						board[giocatore - 2] = true;
						giocatore -= 2;
                        conversione();
						document.getElementById(giocatore.toString()).innerHTML =
							"<i class='fas fa-user-astronaut astronauta' style='color: #4ce900'></i>";

						if (
							document.getElementById("errore").classList.contains("visibile")
						) {
							document.getElementById("errore").classList.add("invisibile");
							document.getElementById("errore").classList.remove("visibile");
						}
						console.log("Il giocatore si è mosso in posizione " + giocatore);
					} else {
						document.getElementById("errore").classList.remove("invisibile");
						document.getElementById("errore").classList.add("visibile");
					}
				}

				break;

			case "up":
				if (giocatore + 16 > 63) {
					alert("Non puoi andare in alto"); // mostra un messaggio di errore
					var divErrore = document.getElementById("errore");
					divErrore.classList.remove("invisibile");
					divErrore.classList.add("visibile");

					// altrimenti
				} else {
					if (board[giocatore + 16] == false) {
						board[giocatore] = false;
						document.getElementById(giocatore.toString()).innerHTML = "";
						board[giocatore + 16] = true;
						giocatore += 16;
                        conversione();
						document.getElementById(giocatore.toString()).innerHTML =
							"<i class='fas fa-user-astronaut astronauta' style='color: #4ce900'></i>";

						if (
							document.getElementById("errore").classList.contains("visibile")
						) {
							document.getElementById("errore").classList.add("invisibile");
							document.getElementById("errore").classList.remove("visibile");
						}

						console.log("Il giocatore si è mosso in posizione " + giocatore);
					} else {
						document.getElementById("errore").classList.remove("invisibile");
						document.getElementById("errore").classList.add("visibile");
					}
				}

				break;

			case "down":
				if (giocatore - 16 < 0) {
					alert("Non puoi andare in basso"); // mostra un messaggio di errore
					var divErrore = document.getElementById("errore");
					divErrore.classList.remove("invisibile");
					divErrore.classList.add("visibile");

					// altrimenti
				} else {
					if (board[giocatore - 16] == false) {
						board[giocatore] = false;
						document.getElementById(giocatore.toString()).innerHTML = "";
						board[giocatore - 16] = true;
						giocatore -= 16;
                        conversione();
						document.getElementById(giocatore.toString()).innerHTML =
							"<i class='fas fa-user-astronaut astronauta' style='color: #4ce900'></i>";

						if (
							document.getElementById("errore").classList.contains("visibile")
						) {
							document.getElementById("errore").classList.add("invisibile");
							document.getElementById("errore").classList.remove("visibile");
						}

						console.log("Il giocatore si è mosso in posizione " + giocatore);
					} else {
						document.getElementById("errore").classList.remove("invisibile");
						document.getElementById("errore").classList.add("visibile");
					}
				}

				break;
			default:
				document.getElementById("errore").classList.remove("invisibile");
				document.getElementById("errore").classList.add("visibile");
				break;
		}
	}
}
// MOVIMENTO CON FRECCIA DESTRA
document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowRight") {
		movimento("right");
	}
});
// MOVIMENTO CON FRECCIA SINISTRA
document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowLeft") {
		movimento("left");
	}
});
// MOVIMENTO CON FRECCIA SU
document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowUp") {
		movimento("up");
	}
});
// MOVIMENTO CON FRECCIA GIU
document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowDown") {
		movimento("down");
	}
});
//FUNZIONE GIOCATORE
function player() {
	let min = 0;
	let max = 63;
	let exit = false;

	if (typeof giocatore === "undefined") {
		while (exit == false) {
			giocatore = Math.floor(Math.random() * (max - min + 1) + min);
			if (board[giocatore] == false) {
				board[giocatore] = true;
				document.getElementById(giocatore.toString()).innerHTML =
					"<i class='fas fa-user-astronaut astronauta' style='color: #4ce900'></i>";
				exit = true;
                
			}
		}
	} else {
		board[giocatore] == false;
		document.getElementById(giocatore.toString()).innerHTML = "";

		while (exit == false) {
			giocatore = Math.floor(Math.random() * (max - min + 1) + min);
			if (board[giocatore] == false) {
				board[giocatore] = true;
				document.getElementById(giocatore.toString()).innerHTML =
					"<i class='fas fa-user-astronaut astronauta' style='color: #4ce900'></i>";
				exit = true;
			}
		}
	}
    conversione();
}
// FUNZIONE POSIZIONI CASUALI
function spawn() {
	let min = 0;
	let max = 63;
	let min_gen = 5;
	let max_gen = 10;

	let pedineCasuali;
	let i = 0;

	for (let i = 0; i < board.length; i++) {
		if (board[i] == true && i != giocatore) {
			board[i] = false;
			document.getElementById(i.toString()).innerHTML = "";
		}
	}

	numbPedine = Math.floor(Math.random() * (max_gen - min_gen + 1) + min_gen);

	// Affinchè questa condizione è vera
	while (i <= numbPedine) {
		// Genero un numero casuale
		pedineCasuali = Math.floor(Math.random() * (max - min + 1) + min);
		// Controllo la presenza della pedina all'inteno dell'array (se è false...)
		if (board[pedineCasuali] == false) {
			board[pedineCasuali] = true; // lo modifico in true
			document.getElementById(pedineCasuali.toString()).innerHTML =
				"<i class='fas fa-meteor meteora' style='color: #fa0000;'></i>";
			i++; // e incremento
		}
	}
}
//FUNZIONE GAETANO
function conversione() {
	var N;
	N = 1 + parseInt(giocatore / 8); //Trova il carattere numerico

	//Dichiarazione Array
	var A = [];
	var B = [];
	var C = [];
	var D = [];
	var E = [];
	var F = [];
	var G = [];
	var H = [];

	var a = 0;
	for (i = 0; i < 8; i++) {
		if (i != 0) {
			A[i] = a + 8;
			a = a + 8;
		} else {
			A[i] = 0;
		}
	}

	var b = 1;
	for (i = 0; i < 8; i++) {
		if (i != 0) {
			B[i] = b + 8;
			b = b + 8;
		} else {
			B[i] = 1;
		}
	}

	var c = 2;
	for (i = 0; i < 8; i++) {
		if (i != 0) {
			C[i] = c + 8;
			c = c + 8;
		} else {
			C[i] = 2;
		}
	}

	var d = 3;

	for (i = 0; i < 8; i++) {
		if (i != 0) {
			D[i] = d + 8;
			d = d + 8;
		} else {
			D[i] = 3;
		}
	}

	var e = 4;
	for (i = 0; i < 8; i++) {
		if (i != 0) {
			E[i] = e + 8;
			e = e + 8;
		} else {
			E[i] = 4;
		}
	}

	var f = 5;
	for (i = 0; i < 8; i++) {
		if (i != 0) {
			F[i] = f + 8;
			f = f + 8;
		} else {
			F[i] = 5;
		}
	}

	var g = 6;
	for (i = 0; i < 8; i++) {
		if (i != 0) {
			G[i] = g + 8;
			g = g + 8;
		} else {
			G[i] = 6;
		}
	}

	var h = 7;
	for (i = 0; i < 8; i++) {
		if (i != 0) {
			H[i] = h + 8;
			h = h + 8;
		} else {
			H[i] = 7;
		}
	}

	var z;

	for (z = 0; z < 8; z++) {
		if (giocatore == A[z]) {
            document.getElementById("posizione_pedone").innerText = "A" + N;	
		}
		if (giocatore == B[z]) {
			document.getElementById("posizione_pedone").innerText = "B" + N;
		}
		if (giocatore == C[z]) {
			document.getElementById("posizione_pedone").innerText = "C" + N;
		}
		if (giocatore == D[z]) {
			document.getElementById("posizione_pedone").innerText = "D" + N;
		}
		if (giocatore == E[z]) {
			document.getElementById("posizione_pedone").innerText = "E" + N;
		}
		if (giocatore == F[z]) {
			document.getElementById("posizione_pedone").innerText = "F" + N;
		}
		if (giocatore == G[z]) {
			document.getElementById("posizione_pedone").innerText = "G" + N;
		}
		if (giocatore == H[z]) {
			document.getElementById("posizione_pedone").innerText = "H" + N;
		}
	}
}
