let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// Contador de jogadas
let player1 = 0;
let player2 = 0;

// Adicionando o evento click aos boxes
for(let i=0; i < boxes.length; i++){

    // Quando alguém clica na caixa
    boxes[i].addEventListener("click", function(){
       
        let elemento = verificarJogada(player1, player2);

        // Se o box estiver vazio pode inserir x ou o
        if(this.childNodes.length == 0){
            let cloneElemento = elemento.cloneNode(true);

            this.appendChild(cloneElemento);
    
            // Computar jogada
            if(player1 == player2){
                player1++;

                if(secondPlayer == "ai-player"){
                    // Função para executar a jogada
                    computerPlay();
                    player2++;                
                }
            }else{
                player2++;
            }
        }       
        
        verificaGanhador();
        
    });
    
}


// Evento para saber se é dois jogadores ou IA
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){

        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = "none";
        }

        setTimeout(function(){
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        })

    })
}

// Verifica quem joga
function verificarJogada(player1, player2){
    if(player1 == player2){
        elemento = x;
    } else{
        elemento = o;
    }
    return elemento;
}

// Verifica quem joga
function verificaGanhador(){
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    // Horizontal - 1º Linha
    if((b1.childNodes.length > 0) && (b2.childNodes.length > 0) && (b3.childNodes.length > 0)){

        let campo1 = b1.childNodes[0].className;
        let campo2 = b2.childNodes[0].className;
        let campo3 = b3.childNodes[0].className;

        if((campo1 == "x") && (campo2 == "x") && (campo3 == "x")){
            console.log("X Venceu 1");
            declaraVencedor("x");
        } else if ((campo1 == "o") && (campo2 == "o") && (campo3 == "o")) {
            console.log("O venceu 1");
            declaraVencedor("o");
        }
    }

    // Horizontal - 2º Linha
    if((b4.childNodes.length > 0) && (b5.childNodes.length > 0) && (b6.childNodes.length > 0)){

        let campo4 = b4.childNodes[0].className;
        let campo5 = b5.childNodes[0].className;
        let campo6 = b6.childNodes[0].className;
    
        if((campo4 == "x") && (campo5 == "x") && (campo6 == "x")){
            console.log("X Venceu 2");
            declaraVencedor("x");
        } else if ((campo4 == "o") && (campo5 == "o") && (campo6 == "o")){
            console.log("O venceu 2");
            declaraVencedor("o");
        }
    }

        // Horizontal - 3º Linha
        if((b7.childNodes.length > 0) && (b8.childNodes.length > 0) && (b9.childNodes.length > 0)){

            let campo7 = b7.childNodes[0].className;
            let campo8 = b8.childNodes[0].className;
            let campo9 = b9.childNodes[0].className;
        
            if((campo7 == "x") && (campo8 == "x") && (campo9 == "x")){
                console.log("X Venceu 3");
                declaraVencedor("x");
            } else if((campo7 == "o") && (campo8 == "o") && (campo9 == "o")) {
                console.log("O venceu 3");
                declaraVencedor("o");
            }
        }

        // Vertical 1
        if((b1.childNodes.length > 0) && (b4.childNodes.length > 0) && (b7.childNodes.length > 0)){

            let campo1 = b1.childNodes[0].className;
            let campo4 = b4.childNodes[0].className;
            let campo7 = b7.childNodes[0].className;

            if((campo1 == "x") && (campo4 == "x") && (campo7 == "x")){
                console.log("X Venceu 4");
                declaraVencedor("x");
            } else if ((campo1 == "o") && (campo4 == "o") && (campo7 == "o")) {
                console.log("O venceu 4");
                declaraVencedor("o");
            }
        }

        // Vertical 2
        if((b2.childNodes.length > 0) && (b5.childNodes.length > 0) && (b8.childNodes.length > 0)){

            let campo2 = b2.childNodes[0].className;
            let campo5 = b5.childNodes[0].className;
            let campo8 = b8.childNodes[0].className;
        
            if((campo2 == "x") && (campo5 == "x") && (campo8 == "x")){
                console.log("X Venceu 5");
                declaraVencedor("x");
            } else if ((campo2 == "o") && (campo5 == "o") && (campo8 == "o")) {
                console.log("O venceu 5");
                declaraVencedor("o");
            }
        }

        // Vertical 3
        if((b3.childNodes.length > 0) && (b6.childNodes.length > 0) && (b9.childNodes.length > 0)){

            let campo3 = b3.childNodes[0].className;
            let campo6 = b6.childNodes[0].className;
            let campo9 = b9.childNodes[0].className;
                
            if((campo3 == "x") && (campo6 == "x") && (campo9 == "x")){
                console.log("X Venceu 6");
                declaraVencedor("x");
            } else if ((campo3 == "o") && (campo6 == "o") && (campo9 == "o")) {
                console.log("O venceu 6");
                declaraVencedor("o");
            }
        }

        // Horizontal 1
        if((b1.childNodes.length > 0) && (b5.childNodes.length > 0) && (b9.childNodes.length > 0)){

            let campo1 = b1.childNodes[0].className;
            let campo5 = b5.childNodes[0].className;
            let campo9 = b9.childNodes[0].className;
                    
            if((campo1 == "x") && (campo5 == "x") && (campo9 == "x")){
                console.log("X Venceu 7");
                declaraVencedor("x");
            } else if ((campo1 == "o") && (campo5 == "o") && (campo9 == "o")) {
                console.log("O venceu 7");
                declaraVencedor("o");
            }
        }

        // Horizontal 2
        if((b3.childNodes.length > 0) && (b5.childNodes.length > 0) && (b7.childNodes.length > 0)){

            let campo3 = b3.childNodes[0].className;
            let campo5 = b5.childNodes[0].className;
            let campo7 = b7.childNodes[0].className;
                
            if((campo3 == "x") && (campo5 == "x") && (campo7 == "x")){
                console.log("X Venceu 8");
                declaraVencedor("x");
            } else if ((campo3 == "o") && (campo5 == "o") && (campo7 == "o")) {
                console.log("O venceu 8");
                declaraVencedor("o");
            }
        }

        let counter = 0;

        for(let i=0; i < boxes.length; i++){
            if(boxes[i].childNodes[0] != undefined){
                counter++;
            }
        }

        if(counter == 9){
            console.log("Deu velha");
            declaraVencedor("Deu velha");
        }            
    }

        // Limpa o jogo, declara o vencedor e atualiza o placar
        function declaraVencedor(vencedor){
            let scoreboardX = document.querySelector("#scoreboard-1");
            let scoreboardY = document.querySelector("#scoreboard-2");

            if(vencedor == "x"){
                scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
                msg = "O jogador 1 venceu !";                
            } else if (vencedor == "o"){
                scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
                msg = "O jogador 2 venceu !"
            } else{
                msg = "Deu velha !";
            }

            // Exibe mensagem
            messageText.innerHTML = msg;
            messageContainer.classList.remove("hide");

            // Esconde mensagem
            setTimeout(function() {
                messageContainer.classList.add("hide");
            }, 3000);

            // zera as jogadas
            player1 = 0;
            player2 = 0;

            // remove os x e o
            let boxesToRemove = document.querySelectorAll(".box div");
  
            for(let i = 0; i < boxesToRemove.length; i++) {
            boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
            }
        }


// Evento para ver se é contra IA ou segundo player
for(let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function() {
  
      secondPlayer = this.getAttribute("id");
  
      for(j = 0; j < buttons.length; j++) {
        buttons[j].style.display = "none";
      }
  
      setTimeout(function() {
        let container = document.querySelector("#container");
        container.classList.remove("hide");
      }, 500);
  
    });
  
  }
  
  // jogada IA 
  function computerPlay() {
  
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;
            
    for(let i = 0; i < boxes.length; i++) {
  
      let randomNumber = Math.floor(Math.random() * 5);
  
      // só se não tiver marcado anteriormente
      if(boxes[i].childNodes[0] == undefined) {  
        if(randomNumber <= 1) {
          boxes[i].appendChild(cloneO);
          counter++;
          break;
        }
      // checar quantas estão preenchidas        
      } else {
        filled++;
      }
  
    }
  
    if(counter == 0 && filled < 9) {
      computerPlay();
    }
  
  }

