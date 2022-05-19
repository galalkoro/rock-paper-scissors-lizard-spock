
// let us first have a rsult varible 

const result = document.getElementById("result");
let [comp_score, user_score] = [0,0];


let gameRules = {
    Rock: {
        Rock: 'draw',
        Scissors: 'lose',
        Paper: 'win',
        Spock: 'win',
        Lizard: 'lose'
    },
    Paper: {
        Paper: 'draw',
        Rock: 'lose',
        Scissors: 'win',
        Lizard: 'win',
        Spock: 'lose'
    },
    Scissors: {
        Scissors: 'draw',
        Paper: 'lose',
        Rock: 'win',
        Lizard: 'lose',
        Spock: 'win'
    },
    Lizard: {
        Scissors: 'win',
        Paper: 'lose',
        Rock: 'win',
        Lizard: 'draw',
        Spock: 'lose'
    },
    Spock: {
        Scissors: 'lose',
        Paper: 'win',
        Rock: 'lose',
        Lizard: 'win',
        Spock: 'draw'
    }
}

var undo = document.getElementById("undo").addEventListener("click", reload)

function reload() {
    location.reload();
}

function clicked(input) {
    let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let randomNumber = Math.trunc(Math.random() * 5); //trunc removes the fraction part of any number and gives the int value
    let comp_choice = choices[randomNumber];
    
    console.log(randomNumber);
    document.getElementById("userChoice").innerHTML = 
    `Computer choose <span>${comp_choice.toUpperCase()}</span>`;   //innerHtml is use when we use to replace any tag etc. but innertext is used to update or change the content of the tag.
    document.getElementById("compChoice").innerHTML = 
    `You choose <span>${input.toUpperCase()}</span>`;

    console.log('input', input, 'comp- choice', comp_choice);

    switch(gameRules[comp_choice][input]) {
        case 'win':
            result.innerText = `You win فائز`;
            result.style.cssText = "background-color: rgb(128, 247, 128)";
            user_score++;
            break;
        case 'lose':
            result.innerText = `You lose, خسرت`;
            result.style.cssText = "background-color: rgb(240, 124, 124)";
            comp_score++;
            break;
        case 'draw':
            result.innerText = `You draw تعادل`;
            result.style.cssText = "background-color: rgb(102, 102, 102)";
            break;   
    }
    document.getElementById('comp_score').innerHTML = comp_score;
    document.getElementById('user_score').innerHTML = user_score;

// For user wins and computer wins

    if(user_score === 10) {
        alert("You won the match");
        location.reload();
       
    }
    else if(comp_score === 10) {
        alert("Computer won the match");
        location.reload();
    }  



}


    


