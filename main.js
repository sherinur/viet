const cof1 = document.querySelector("#cof1");
const cof2 = document.querySelector("#cof2");
const cof3 = document.querySelector("#cof3");
const timer = document.querySelector(".timer");
const sign1 = document.querySelector("#sign1");
const sign2 = document.querySelector("#sign2");
const checkBtn = document.querySelector("#check");
const rightSound =  new Audio("./src/right.mp3");
const irregularSound =  new Audio("./src/irregular.mp3");
const startSound =  new Audio("./src/start.mp3");
const pointsObj = document.querySelector("#points");
const taskplace = document.querySelector(".taskplace");
const sec = document.querySelector("#seconds");
const easyBtn = document.querySelector(".easyBtn");
const normalBtn = document.querySelector(".normalBtn");
const hardBtn = document.querySelector(".hardBtn");
const menu = document.querySelector(".menu")
let min = -5;
let max = 10;
let points = 0;

// window.onload = () => {
// }

function playSound(sound) {
    if(document.querySelector("#audio").checked) sound.play();
    else return false;
}


easyBtn.onclick = () => {
    playSound(startSound);
    startGame();
}

normalBtn.onclick = () => {
    playSound(startSound);
    min = -10;
    max = 20;
    startGame();
}

hardBtn.onclick = () => {
    playSound(startSound);
    min = -30;
    max = 30;
    startGame();
}





function getRandomInt() {
    let result = Math.floor(Math.random() * (max - min)) + min;
    switch (result) {
        case 0:
            result = Math.floor(Math.random() * (max - min)) + min;

        case NaN: 
        result = Math.floor(Math.random() * (max - min)) + min;

        case undefined:
            result = Math.floor(Math.random() * (max - min)) + min;
    }

    return result;
}

function givePoint(num) {
    points = points + num;
    document.getElementById("po").innerHTML = "+" + num;
    taskplace.style.color = "#18da28";
    setInterval(() => {
        document.getElementById("po").innerHTML = "";
        taskplace.style.color = "#ffffff";
    }, 1000);
}

function startGame() {
        menu.style.display = "none";
        taskplace.classList.remove("disabled");

        let x1 = getRandomInt()
        let x2 = getRandomInt()
    
        console.log(x1,x2)
    
        let cof2Val = -(x1 + x2);
        let cof3Val = x1 * x2;
        let cof1Val = cof2Val / x1 + x2;
    
        if (cof2Val < 0) {
            cof2Val = -(cof2Val)
            sign1.innerHTML = "-"
        }
    
        if (cof3Val < 0) {
            cof3Val = -(cof3Val)
            sign2.innerHTML = "-"
        }
    
        if (cof2Val == 1) cof2Val = ""
        else if (cof1Val == 1) cof1Val = ""
    
        cof2.innerHTML = cof2Val;
        cof3.innerHTML = cof3Val;


    checkBtn.onclick = () => {
        let answer1 = document.querySelector("#x1").value;
        let answer2 = document.querySelector("#x2").value;

        if (answer1 == x1 && answer2 == x2 || answer2 == x1 && answer1 == x2) {
            startGame();
            givePoint(1);
            playSound(rightSound);
            pointsObj.innerHTML = points;
            document.querySelector("#x2").value = "";
            document.querySelector("#x1").value = "";

        } else {
            playSound(irregularSound);
            taskplace.classList.add("shake")
            taskplace.style.color = "#e20902";
            setInterval(() => {
            document.getElementById("po").innerHTML = "";
            taskplace.style.color = "#ffffff";
            }, 1000);
            setInterval(() => taskplace.classList.remove("shake"), 1500);
            startGame()  
            document.querySelector("#x2").value = "";
            document.querySelector("#x1").value = "";
        }
    }
}


// let interval = setInterval("stopWatch()", 1000);
//     let counter = 0;

//     function stopWatch() {
//         counter++;
//         sec.innerHTML = counter;
//     }
