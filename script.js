let userChoice=document.getElementById('userChoiceName');
let computerChoice=document.getElementById('computerChoiceName');
let squares=document.querySelectorAll('.box');
// console.log(squares);
squares.forEach(square=>{
    square.onclick=()=>onClickButton(square.value);
});


function onClickButton(userInput){
    document.getElementById('hidden').style.visibility='visible';
    document.getElementById('hiddenVs').style.visibility='visible';
    computerInput=getComputerChoice();
    getResult(computerInput,userInput);
}

function getComputerChoice(){    

    //Array of all possible choices Rock Paper Choice 
    let computerInputArray=[];
    squares.forEach(square=>{
        computerInputArray.push(square.value);
    });

    //Computer choice
    let computerInput;
    let index=Math.floor(Math.random()*computerInputArray.length);
    computerInput=computerInputArray[index];
    // console.log(computerInput,index);
    return computerInput;
}

function getResult(computerInput,userInput){
    // console.log(computerInput,userInput);
    let score=-1;
    userChoice.innerText=userInput;
    computerChoice.innerText=computerInput;

    if(userInput==computerInput)
        score=0;
    else if(userInput=='rock'&&computerInput=='paper')
        score=-1;
    else if(userInput=='rock'&&computerInput=='scissor')
        score=1;
    else if(userInput=='paper'&&computerInput=='rock')
        score=1;
    else if(userInput=='paper'&&computerInput=='scissor')
        score=-1;
    else if(userInput=='scissor'&&computerInput=='rock')
        score=-1;
    else 
        score=1;
    scoreDescription(score);
}

const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const scissorDiv = document.getElementById('scissor');
let output=document.getElementById('finalOutput');

function scoreDescription(score){
    let message='';
    if(score==0)
        message='Its a draw'
    else if(score==-1)
        message='You lose'
    else if(score==1)
        message='You won'

    output.innerText=message;
    scoreUpdater(score);
}

let userScoreValue=document.getElementById('userScore');
let computerScoreValue=document.getElementById('computerScore');
let userScore=0;
let computerScore=0;
    
function scoreUpdater(score){
    if(score==-1)
    {
        computerScore++;
        computerScoreValue.innerText=computerScore;
    }
    if(score==1) 
    {
        userScore++;
        userScoreValue.innerText=userScore;
    }

}

const endGame=document.getElementById('clear')
endGame.onclick=()=>{
    userChoice.innerText='';
    computerChoice.innerText='';

    userScore=0;
    computerScore=0;
    userScoreValue.innerText=userScore;
    computerScoreValue.innerText=computerScore;
    output.innerText='';
    document.getElementById('hidden').style.visibility='hidden';
    document.getElementById('hiddenVs').style.visibility='hidden';
}
