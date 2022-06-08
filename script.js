let gameBoard = [];
let players = [];
let win = [];
let playerCurrent = ``
const board = document.querySelector(`.board`);
const X = document.querySelector(`.X`)
const O = document.querySelector(`.O`)
const buttons = document.querySelectorAll(`.buttonXO`)

//123 123 123 321 111 222 333 
//add classes for each square like 1, 2 , 3 , 4, 5, 6, 7, 8,9
const player = (choice, name) =>{
    const getChoice = () => choice;
    const getName = () => name;
    const whoLost = () =>{
        win.forEach( function(i){
            const squares = document.querySelector(`[value = "${i}"]`)
            const player1 = players[0];
            const player2 = players[1];
            if(squares.id === player1.choice ){
                if(players.choice === 'X' squares.value){
                    console.log('you won!')
                }
            }
        })
    }
    return { choice:getChoice(), name:getName(), whoLost};

}
const GAMEBOARD = (() =>{
    const populate = () =>{
        for(let i = 1; i<10; i++){
            const squares = document.createElement(`div`);
            squares.classList.add('squares');
            squares.setAttribute(`value`, `${i}`);
            win.push(i);
            board.appendChild(squares);
            console.log(win)
            }
    }
    return {populate}
})();

GAMEBOARD.populate()



function userChoice(){
    X.addEventListener('click', ()=>{
        const player1 = player(`X`, 'player1')
        const player2 = player(`O`, `player2`)
        players.push(player1)
        players.push(player2)
    
        console.log(players)
        buttons.forEach(button =>{
            button.style.display = `none`;
        })
    })
    O.addEventListener('click', () =>{
        const player1 = player(`O`, 'player1')
        const player2 = player(`X`, `player2`)
        players.push(player1)
        players.push(player2)
    
        console.log(players)
        buttons.forEach(button =>{
            button.style.display = `none`;
        })
    })
}

userChoice()


//change id or class to X so if id is connected to class of 1 2 3 or whatever else it = a win
//square set attribute = id player1.choice || player2.choice
//if player.id === 123 || 321 || 111 || 222 || 333
//new player is set by prompt either global or something like that
function XO(e, currentPlayer){
    const squares = document.querySelectorAll('.squares')
    squares.forEach(square => square.addEventListener('click', (e) => {
        const player1 = players[0]
        const player2 = players[1]
         if( playerCurrent === ``){
             playerCurrent = player1
            square.setAttribute(`id`, `${player1.choice}`)
            square.textContent = `${player1.choice} `
            gameBoard.push(player1.choice)
            console.log(gameBoard)
            return playerCurrent = player2
         } else if( playerCurrent=== player2 ){
            square.setAttribute(`id`, `${player2.choice}`)
            square.textContent = `${player2.choice} `
            gameBoard.push(player2.choice)
            player2.whoLost()
            console.log(gameBoard)
            return playerCurrent = ``  
        }
    }))
}
XO()