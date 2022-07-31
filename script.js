var scores, activePlayer, gamePlaying, winningscore;
scores = [0, 0];
gamePlaying = true;
activePlayer = 0; 
winningscore = 100; 


function nextPlayer () {
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
}


function win(){
    if (scores[0] >= winningscore){
        document.getElementById("displaytitle").textContent = "Congratulations Player 1 !!! You're the Winner of the Dice Master Game";
        document.querySelector(".rolldice").setAttribute('disabled', 'disabled');

    }

    else if(scores[1] >= winningscore){
        document.getElementById("displaytitle").textContent ="Congratulations Player 2 !!! You're the Winner of the Dice Master Game";
        document.querySelector(".rolldice").setAttribute('disabled', 'disabled');

    }

}

function rollTheDice() {
   
    
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src",
            "dice_" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "dice_" + randomNumber2 + ".png");


                if ((randomNumber1 === randomNumber2) && randomNumber1 !== 1 ) {
                    scores[activePlayer] += randomNumber1 + randomNumber2; 
                    document.getElementById("displaytitle").textContent = "It's turn to player " + parseInt(activePlayer + 1) ;
                    win();
                }
        
                else if(randomNumber1 === 1 && randomNumber2 === 1){
                    scores[activePlayer] = 0;
                    nextPlayer();
                    document.getElementById("displaytitle").textContent = "It's turn to player "+ parseInt(activePlayer + 1) ;
                    win();
                }   
                else{
                    scores[activePlayer] += randomNumber1 + randomNumber2;
                    nextPlayer();
                    document.getElementById("displaytitle").textContent = "It's turn to player "+ parseInt(activePlayer + 1) ;
                    win();
        
                }   
    
            console.log(scores[0], scores[1]);
            document.getElementById('player1marks').textContent = scores[0]
            document.getElementById('player2marks').textContent = scores[1]
       

}
		


	
