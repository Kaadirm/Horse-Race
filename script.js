const body = document.querySelector('body');
const container = document.createElement("div");
body.appendChild(container);
container.className = "container";
const startBtn = document.createElement('button');
container.appendChild(startBtn);
startBtn.textContent = 'Start';
startBtn.className = "startBtn";
const raceArea = document.createElement("div");
container.appendChild(raceArea);
raceArea.className = "raceArea"; 
const fence1 = document.createElement("div");
const fence2 = document.createElement("div");
const fence3 = document.createElement("div");
const fence4 = document.createElement("div");


raceArea.appendChild(fence1);
fence1.className = "fence";
const divHorse1 = document.createElement("div");
raceArea.appendChild(divHorse1);
divHorse1.className = "horses";
const firstHorse = document.createElement("img");
divHorse1.appendChild(firstHorse);
firstHorse.src = "images/horse1.jpg"
firstHorse.id = "Player-1"



raceArea.appendChild(fence2);
fence2.className = "fence";
const divHorse2 = document.createElement("div");
raceArea.appendChild(divHorse2);
divHorse2.className = "horses";
const secondHorse = document.createElement("img");
divHorse2.appendChild(secondHorse);
secondHorse.src = "images/horse2.jpg"
secondHorse.id = "Player-2"



raceArea.appendChild(fence3);
fence3.className = "fence";
const divHorse3 = document.createElement("div");
raceArea.appendChild(divHorse3);
divHorse3.className = "horses";
const thirdHorse = document.createElement("img");
divHorse3.appendChild(thirdHorse);
thirdHorse.src = "images/horse3.jpg"
thirdHorse.id = "Player-3"
raceArea.appendChild(fence4);
fence4.className = "fence";




const finishLine = document.createElement("div");
container.appendChild(finishLine);
finishLine.className = "finish";


for( let i = 1; i <= 48; i++ ) {
        finishLine.appendChild(document.createElement("div")).className = "line"+[i]
}

let firstHorseSpeed = 0
let secondHorseSpeed = 0
let thirdHorseSpeed = 0

const horsesArr = [firstHorse, secondHorse, thirdHorse]



startBtn.addEventListener("click", () => {const TimerId = setInterval(function(){
    startBtn.disabled = true;
    firstHorseSpeed += Math.random() * 200
    firstHorse.style.marginLeft = firstHorseSpeed + "px"
    secondHorseSpeed += Math.random() * 200
    secondHorse.style.marginLeft = secondHorseSpeed + "px"
    thirdHorseSpeed += Math.random() * 200
    thirdHorse.style.marginLeft = thirdHorseSpeed + "px"
    
    horsesArr.forEach(function (horse) {
        if (horse.offsetLeft >= finishLine.offsetLeft){
            clearInterval(TimerId) 
            winnerHorse() 
        }     
    })
   
},500)})

function winnerHorse(){
    const winner = horsesArr.reduce(function (acc, horse){
        let result = " "
        if(acc.offsetLeft > horse.offsetLeft){
            result = acc 
        }  
        else{
            result = horse
        }
        return result
    })
    const winnerTag = document.createElement("h2");
    winnerTag.className = "winner";
    container.appendChild(winnerTag);
    winnerTag.textContent = `${winner.id} Won!`  

    setTimeout(function(){
        firstHorse.style.marginLeft = 0+"px";
        secondHorse.style.marginLeft = 0+"px";
        thirdHorse.style.marginLeft = 0+"px";
        firstHorseSpeed = 0
        secondHorseSpeed = 0
        thirdHorseSpeed = 0
        winnerTag.textContent = "";
        startBtn.disabled = false;
    }, 5000)
}
