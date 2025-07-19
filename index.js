const randomNumber = Math.random();
let computerMove;
let result;
const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
btnRock.addEventListener("click", ()=>{
    if (computerMove ==="rock"){
    result = "Tie";
}else if (computerMove === "paper"){
    result = "You lose"
}else if (computerMove ==="scissors"){
    result = "You Win"
}
alert(`You picked rock. computer picked ${computerMove} ${result}`)
})
btnPaper.addEventListener("click", ()=>{
    if (computerMove ==="rock"){
    result = "You lose";
}else if (computerMove === "paper"){
    result = "Tie"
}else if (computerMove ==="scissors"){
    result = "You lose"
}
alert(`You picked paper. computer picked ${computerMove} ${result}`)
})
btnScissors.addEventListener("click", ()=>{
    if (computerMove ==="rock"){
    result = "You win";
}else if (computerMove === "paper"){
    result = "You Win"
}else if (computerMove ==="scissors"){
    result = "Tie"
}
alert(`You picked Scissors. computer picked ${computerMove} ${result}`)
})
if (randomNumber>=0 && randomNumber<1/3){
    computerMove  ="rock";

} else if(randomNumber >=1/3&& randomNumber< 2/3) {
    computerMove = "paper";
}else {
    computerMove = "scissors"
}
console.log(computerMove)

