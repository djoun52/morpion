let player = "X"
let titre = document.getElementById("titre")
let again = document.getElementById("again")
again.addEventListener('click', start);
let btns = document.getElementsByClassName("btns")
function start() {
    for (let i = 0; i < btns.length; i++) {
        titre.innerHTML = "C'est à " + player + " de jouer";
        btns[i].innerHTML = ""
        btns[i].addEventListener('click', game, {once: true});
        again.hidden = true
    }   
}
start();
function game() {
    this.innerHTML = player;        
    if (checkVictory()== false) {
        if (checkDrawn() == false) {
            changePlayer()
        }
    }
}
function changePlayer(){
    if (player === "X"){
        player = "O"
        titre.innerHTML = "C'est à " + player + " de jouer";
    }else{
        player = "X"
        titre.innerHTML = "C'est à " + player + " de jouer";
    }
}
function checkDrawn() {
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].innerHTML == "" ){
            return false
        }
    }
    again.hidden = false
    titre.innerHTML = "EGALITE"
    return true
}
function checkVictory() {
    let arr = [ [0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8]]
    for (let i = 0; i < arr.length; i++) {
        if (btns[arr[i][0]].innerHTML == player && btns[arr[i][1]].innerHTML == player && btns[arr[i][2]].innerHTML == player ) {
            again.hidden = false
            titre.innerHTML = "Victoire de " + player
            for (let i = 0; i < btns.length; i++) {
                btns[i].removeEventListener('click', game);
            }
            return true
        }
    }
    return false
}