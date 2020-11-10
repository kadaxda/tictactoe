let gameModule = (function() {

    let PlayerFactory = (name, logo) => {
        this.name = name;
        this.logo = logo;
    
        return {name, logo};
    }
    
    let inputOne = document.querySelector("#InputOne");
    let inputTwo = document.querySelector("#InputTwo");

    let PlayerOne = PlayerFactory(inputOne.value, "X");
    let PlayerTwo = PlayerFactory(inputTwo.value, "O");


    let Gameboard = [" ", " ", " ",
                     " ", " ", " ",
                     " ", " ", " "]

    let currentLogo = "X" //Logo for first move
    let won = "";

    // New Game Button: Clears the Field
    let newGameButton = document.querySelector("#NewGameButton");
    newGameButton.addEventListener("click", function(e) {
        generateEmptyBoard(Gameboard);
        render(Gameboard);
    })

    // Submit Button: Clears the inputs
    let submitButton = document.querySelector("#Submit");
    submitButton.addEventListener("click", function(e) {
        PlayerOne = PlayerFactory(inputOne.value, "X");
        PlayerTwo = PlayerFactory(inputTwo.value, "O");
        inputOne.value = "";
        inputTwo.value = "";
    })

    let display = document.querySelector("#display")
    
    // Initialize Gameboard
    render(Gameboard);
    addLogo(Gameboard);

    function generateEmptyBoard(board) {
        for(let i = 0; i<board.length; i++) {
            board[i] = " ";
        }

    }

    function render(board) {
        let everyDiv = document.querySelectorAll(".gameField div");
      
        for(let i = 0; i<everyDiv.length; i++) {
            everyDiv[i].textContent = board[i];
            everyDiv[i].classList.add("divdesign")
        }
    }

    function addLogo(board) {
      
        let display = document.querySelector("#display")
        let everyDiv = document.querySelectorAll(".gameField div");
        
        for(let i = 0; i<everyDiv.length; i++) {
        
            everyDiv[i].addEventListener("click", function(e) {
                display.textContent = " ";
                if(everyDiv[i].textContent == " ") {
                    everyDiv[i].textContent = currentLogo;
                    board[i] = currentLogo;
                    console.log(Gameboard)
                    won = checkIfWon(Gameboard);
                    
                    if(won == "X")  {
                        
                        display.textContent = PlayerOne.name + " with: X won the match!"
                        generateEmptyBoard(Gameboard);
                        render(Gameboard);
                        return;
                    } else if(won == "O") {
                        display.textContent =  PlayerTwo.name + " with: O won the match!"
                        generateEmptyBoard(Gameboard);
                        render(Gameboard);
                        return;
                    }

                    if(won == "Tie")  {
                        display.textContent = "Its a tie!";
                        generateEmptyBoard(Gameboard);
                        render(Gameboard);
                        return;
                    }
                    swapCurrentPlayer();            
                           
                }
            })
            
        }
       
    }


    function checkIfWon(board) {
        if(board[0] == board[1] && board[1] == board[2] && board[0] != " ") {      //Top row horizontal
            return board[0];
        } else if(board[3] == board[4] && board[4] == board[5] && board[4] != " ") { //mid row horizonzal
            return board[3];
        }
        else if(board[6] == board[7] && board[7] == board[8] && board[6] != " ") { // bottom row horizonzal
            return board[6];
        }
        else if(board[0] == board[3] && board[3] == board[6] && board[0] != " ") { // left colum vertical
            return board[0];
        }
        else if(board[1] == board[4] && board[4] == board[7] && board[1] != " ") { // mid colum vertical
            return board[1];
        }
        else if(board[2] == board[5] && board[5] == board[8] && board[2] != " ") { // right colum vertical
            return board[2];
        }
        else if(board[0] == board[4] && board[4] == board[8] && board[0] != " ") { // diagonal topleft to botrig
            return board[0];
        }
        else if(board[2] == board[4] && board[4] == board[6] && board[2] != " ") { // diagonal topr to botl
            return board[2];
        } else if(board[0] != " " && board[1] != " " && board[2] != " " && board[3] != " " && board[4] != " " && board[5] != " " && board[6] != " " && board[7] != " " && board[8] != " ") {
            return "Tie";
        }
        else {
            return "";
        }
    }
    

    function swapCurrentPlayer() {
        if(currentLogo == "X") {
            currentLogo = "O";
        } else {
            currentLogo = "X";
        }
    }



})();

