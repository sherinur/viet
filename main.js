const cof1 = document.querySelector("#cof1");
const cof2 = document.querySelector("#cof2");
const cof3 = document.querySelector("#cof3");
const timer = document.querySelector(".timer");
const sign1 = document.querySelector("#sign1");
const sign2 = document.querySelector("#sign2");
const checkBtn = document.querySelector("#check");
const rightSound =  new Audio("./audio/right.mp3");
const irregularSound =  new Audio("./audio/irregular.mp3");
const pointsObj = document.querySelector("#points");
const taskplace = document.querySelector(".taskplace");
const sec = document.querySelector("#seconds");
let min = -5;
let max = 10;
let points = 0;



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

// function timerCount() {
    

// }

let interval = setInterval("stopWatch()", 1000);
    let counter = 0;

    function stopWatch() {
        counter++;
        sec.innerHTML = counter;
    }


function startGame() {
        // timerCount()
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
        console.log("CHECKED!")
        let answer1 = document.querySelector("#x1").value;
        let answer2 = document.querySelector("#x2").value;

        if (answer1 == x1 && answer2 == x2 || answer2 == x1 && answer1 == x2) {
            startGame()
            rightSound.play();
            points++;
            pointsObj.innerHTML = points;
        } else {
            taskplace.classList.add("shake")
            setInterval(() => taskplace.classList.remove("shake"), 1500);
            irregularSound.play()
        }
    }



    // if(-(answerX1 + answerX2) == cof2Val) {
    //     console.log("Right!");
    //     startGame();
    // } else {
    //     console.log("Irregular!")
    //     startGame();
    // }
}

startGame()





// function makeTask() {
//     let x1 = getRandomInt()
//     let x2 = getRandomInt()

//     console.log(x1,x2)

//     let cof2Val = -(x1 + x2);
//     let cof3Val = x1 * x2;
//     let cof1Val = cof2Val / x1 + x2;

//     if (cof2Val < 0) {
//         cof2Val = -(cof2Val)
//         sign1.innerHTML = "-"
//     }

//     if (cof3Val < 0) {
//         cof3Val = -(cof3Val)
//         sign2.innerHTML = "-"
//     }

//     if (cof2Val == 1) cof2Val = ""
//     else if (cof1Val == 1) cof1Val = ""

//     cof2.innerHTML = cof2Val;
//     cof3.innerHTML = cof3Val;

// }