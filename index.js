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
if (randomNumber>=0 && randomNumber<1/3){
    computerMove  ="rock";

} else if(randomNumber >=1/3&& randomNumber< 2/3) {
    computerMove = "paper";
}else {
    computerMove = "scissors"
}
console.log(computerMove)

