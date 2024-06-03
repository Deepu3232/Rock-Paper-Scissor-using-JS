let userScore =0;
let compScore=0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");

const genCompChoice = () => {
    let Choices = ["rock","paper","scissor"];
    let compChoice = Choices[Math.floor(Math.random()*3)];
    return compChoice;
}

const drawGame = () => {
    msg.innerText = "Draw";
    msg.style.backgroundColor = "black";
}
const showWinner = (result) => {
    msg.innerText = result == true ? "You Win" : "You Lose";
    if(result){
        msg.style.backgroundColor = "green";
        userScore++;
        let uscore = document.querySelector("#user-score");
        uscore.innerText = userScore;
    }
    else{
        msg.style.backgroundColor = "red";
        compScore++;
        let cscore = document.querySelector("#comp-score");
        cscore.innerText = compScore;
    }
}
const playgame = (userChoice) =>{
        let compChoice = genCompChoice();
        
        console.log("user Choice =",userChoice);
        console.log("Comp choice =",compChoice);
        if(userChoice === compChoice){
            drawGame();
        }

        else{
            let userWin = true;
            if(userChoice === "rock"){
                userWin = compChoice === "scissor" ? true : false;
            }
            else if(userChoice === "paper"){
                userWin = compChoice==="rock" ? true : false;
            }
            else{
                userWin = compChoice ==="paper"?true :false;
            }
            showWinner(userWin);

        }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})