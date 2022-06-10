let gameBoard = [];
let players = [];
let player1Taken = [];
let player2Taken = []
let win = [
    [`1`,`2`,`3`],
    [`4`,`5`,`6`],
    [`7`,`8`,`9`],
    [`1`,`5`,`9`],
    [`1`,`4`,`7`],
    [`7`,`4`,`1`],
    [`2`,`5`,`8`],
    [`3`,`5`,`7`]
];
let values = []
let playerCurrent = ``
const board = document.querySelector(`.board`);
const X = document.querySelector(`.X`)
const O = document.querySelector(`.O`)
const buttons = document.querySelectorAll(`.buttonXO`)
const winner = document.createElement(`div`);
winner.classList.add(`winner`)
document.body.appendChild(winner)
const whoWon = document.createElement(`p`);
const RESETBUTTON = document.createElement(`button`)
const INPUT1 =document.querySelector(`#player1`)
const INPUT2 =document.querySelector(`#player2`)
const LABEL = document.querySelector(`#label`)
const LABEL2 = document.querySelector(`#label2`)
winner.append(RESETBUTTON);
RESETBUTTON.textContent = `RESET`
RESETBUTTON.style.display = `none`
RESETBUTTON.classList.add(`resetbtn`)

//123 123 123 321 111 222 333 
//add classes for each square like 1, 2 , 3 , 4, 5, 6, 7, 8,9
//array push each square taken then every array method then.includes


const player = (choice, name) =>{
    const getChoice = () => choice;
    const getName = () => name;
    const TIE = () => {
        const squares = document.querySelectorAll('.squares')
        const squared = Array.from(squares)

        
    }
    const whoLost = () =>{
     for(let i = 0; i < win.length; i++){
        const squares = document.querySelectorAll('.squares')
        const squared = Array.from(squares)
            if(win[i].every(ele =>(player1Taken).includes(ele))){
                winner.appendChild(whoWon);
                whoWon.textContent = `${name} won!`
                RESETBUTTON.style.display = `block`
                RESETBUTTON.addEventListener(`click`, ()=>{
                    window.location.reload()
                })
            } else if(win[i].every(ele =>(player2Taken).includes(ele))){
                winner.appendChild(whoWon);
                whoWon.textContent = `${name} won!`
                RESETBUTTON.style.display = `block`
                RESETBUTTON.addEventListener(`click`, ()=>{
                    window.location.reload()
                })
            }  
            const allSquares = squared.every((square) => square.id !== ``);
            console.log(allSquares)
            if(allSquares === true){
                winner.appendChild(whoWon);
                whoWon.textContent = `TIE`
                RESETBUTTON.style.display = `block`
                RESETBUTTON.addEventListener(`click`, ()=>{
                    window.location.reload()
                })
            }

            }
        }
    return { choice:getChoice(), name:getName(), whoLost, TIE};

}



const GAMEBOARD = (() =>{
    const populate = () =>{
        for(let i = 1; i<10; i++){
            const squares = document.createElement(`div`);
            squares.classList.add('squares');
            squares.setAttribute(`value`, `${i}`);
            values.push(i);
            board.appendChild(squares);
            console.log(win)
            }
    }
    return {populate}
})();

GAMEBOARD.populate()



function userChoice(){
    X.addEventListener('click', ()=>{
        const player1 = player(`X`, `${INPUT1.value}`)
        const player2 = player(`O`,`${INPUT2.value}`)
        players.push(player1)
        players.push(player2)
        XO()
        console.log(players)
        INPUT1.style.display = `none`
        INPUT2.style.display = `none`
        LABEL.style.display =`none`
        LABEL2.style.display = `none`
        buttons.forEach(button =>{
            button.style.display = `none`;
        })
    })
    O.addEventListener('click', () =>{
        const player1 = player(`O`, `${INPUT1.value}`)
        const player2 = player(`X`, `${INPUT2.value}`)
        players.push(player1)
        players.push(player2)
        console.log(players)
        XO()
        INPUT1.style.display = `none`
        INPUT2.style.display = `none`
        LABEL.style.display =`none`
        LABEL2.style.display = `none`
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
    const squared = Array.from(squares)
    squares.forEach(square => square.addEventListener('click', (e) => {
        const player1 = players[0]
        const player2 = players[1]
        if(whoWon.textContent !== ``){
            return
        }
         if( playerCurrent === ``){
             playerCurrent = player1
             if(square.id === player2.choice ){
                return
            }
            square.setAttribute(`id`, `${player1.choice}`)
            square.textContent = `${player1.choice} `
            player1Taken.push(square.getAttribute(`value`))
            gameBoard.push(player1.choice)
            player1.whoLost()
            return playerCurrent = player2
         } else if( playerCurrent=== player2 ){
            if(square.id === player1.choice ){
                return
            }
            square.setAttribute(`id`, `${player2.choice}`)
            square.textContent = `${player2.choice} `
            player2Taken.push(square.getAttribute(`value`))
            gameBoard.push(player2.choice)
            player2.whoLost()
            return playerCurrent = ``  
        }

    }))

}



/*             if(squares.id === player1.choice || squares.id === player2.choice){
                if(squares.getAttribute('value') === `1` &&squares.id ===player1.choice && squares.getAttribute('value') === `2`  && squares.id ===player1.choice
                && squares.getAttribute('value') === `3`&& squares.id ===player1.choice || 
                squares.getAttribute('value') === [`1`,  `2`, `3`]  && squares.id ===player1.choice ){
                    console.log('you won!')
                } */