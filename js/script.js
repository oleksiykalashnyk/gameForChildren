"use strict";

let i = 0,
    txt = ``,
    resultOfAction = "",
    resultOfActionOp1 = "",
    resultOfActionOp2 = "",
    resultOfActionOp3 = "",
    resultOfActionOp4 = "",
    arr = [],
    A = "",
    B = "",
    C = "",
    x = 0,
    y = 0,
    speed = 120,
    elementIdTime = document.getElementById("time"),
    mainMusic = new Audio('styles/main.mp3'),

    getRandomInt9 = () => {
        return Math.floor(Math.random() * (9 - 1)) + 1;
    },

    getRandomInt4 = () => {
        return Math.floor(Math.random() * 4) + 1;
    },


    genAsk = () => {

        A = getRandomInt9();
        B = getRandomInt4();
        C = getRandomInt9();
        if (B == 4) {
            do {
                A = getRandomInt9();
                C = getRandomInt9();
            } while (A % C != 0);
        }

        let a = A,
            b = B,
            c = C;

        switch (b) {
            case 1:
                b = "+";
                break;
            case 2:
                b = "-";
                break;
            case 3:
                b = "*";
                break;
            case 4:
                b = "/";
                break;
        }

        switchSymbol(a, b, c);

        txt = `${a} ${b} ${c} = ?`;
        elementIdTime.innerHTML = txt;
    },

    switchSymbol = (a, b, c) => {
        switch (b) {
            case "+":
                resultOfAction = a + c;
                break;

            case "-":
                resultOfAction = a - c;
                break;

            case "*":
                resultOfAction = a * c;
                break;

            case "/":
                resultOfAction = a / c;
                break;
            default:
                resultOfAction = 0;
                break;
        }
    },


    switchSymbolOptions = (a, b, c) => {
        switch (b) {
            case "+":
                resultOfActionOp1 = a + c;
                break;

            case "-":
                resultOfActionOp2 = a - c;
                break;

            case "*":
                resultOfActionOp3 = a * c;
                break;

            case "/":
                resultOfActionOp4 = a / c;
                break;
            default:
                resultOfActionOp1 = 0;
                break;
        }
    },

    showOptions = () => {
        let a = A,
            b = B,
            b1 = "+",
            b2 = "-",
            b3 = "*",
            b4 = "/",
            c = C;

        switch (b) {
            case 1:
                b = "+";
                break;
            case 2:
                b = "-";
                break;
            case 3:
                b = "*";
                break;
            case 4:
                b = "/";
                break;
        }

        let option1 = document.getElementById("option-1"),
            option2 = document.getElementById("option-2"),
            option3 = document.getElementById("option-3"),
            option4 = document.getElementById("option-4"),
            sukcesShow = document.getElementById("sukces"),
            errorShow = document.getElementById("unSukces");

        sukcesShow.innerHTML = succ;
        errorShow.innerHTML = error;


        switchSymbolOptions(a, b1, c);
        switchSymbolOptions(a, b2, c);
        switchSymbolOptions(a, b3, c);
        switchSymbolOptions(a, b4, c);

        
        resultOfActionOp1 = parseInt(resultOfActionOp1);
        resultOfActionOp2 = parseInt(resultOfActionOp2);
        resultOfActionOp3 = parseInt(resultOfActionOp3);
        resultOfActionOp4 = parseInt(resultOfActionOp4);

        
        if (b == b1) {
            if (resultOfAction == resultOfActionOp2) {
                let a = getRandomInt9();
                resultOfActionOp2 += a;
            }
            if (resultOfAction == resultOfActionOp3) {
                let a = getRandomInt9();
                resultOfActionOp3 += a;
            }
            if (resultOfAction == resultOfActionOp4) {
                let a = getRandomInt9();
                resultOfActionOp4 += a;
            }
        }

        if (b == b2) {
            if (resultOfAction == resultOfActionOp1) {
                let a = getRandomInt9();
                resultOfActionOp1 += a;
            }
            if (resultOfAction == resultOfActionOp3) {
                let a = getRandomInt9();
                resultOfActionOp3 += a;
            }
            if (resultOfAction == resultOfActionOp4) {
                let a = getRandomInt9();
                resultOfActionOp4 += a;
            }
        }

        if (b == b3) {
            if (resultOfAction == resultOfActionOp1) {
                let a = getRandomInt9();
                resultOfActionOp1 += a;
            }
            if (resultOfAction == resultOfActionOp2) {
                let a = getRandomInt9();
                resultOfActionOp2 += a;
            }
            if (resultOfAction == resultOfActionOp4) {
                let a = getRandomInt9();
                resultOfActionOp4 += a;
            }
        }

        if (b == b4) {
            if (resultOfAction == resultOfActionOp1) {
                let a = getRandomInt9();
                resultOfActionOp1 += a;
            }
            if (resultOfAction == resultOfActionOp2) {
                let a = getRandomInt9();
                resultOfActionOp2 += a;
            }
            if (resultOfAction == resultOfActionOp3) {
                let a = getRandomInt9();
                resultOfActionOp3 += a;
            }
        }
                
        arr = [resultOfActionOp1, resultOfActionOp2, resultOfActionOp3, resultOfActionOp4];

        arr.sort();

        option1.innerHTML = arr[0];
        option2.innerHTML = arr[1];
        option3.innerHTML = arr[2];
        option4.innerHTML = arr[3];
    },


    query = (a) => {
        x = document.getElementById(`option-${a}`);
        y = +x.innerText;
        startA(y);
    },

    error = 0,
    succ = 0,

    start = () => {
        if (error < 3) {
            genAsk();
            showOptions();
        } else {
            document.getElementById("win").innerHTML = succ;
            document.querySelector(".game").style.display = "none";
            document.querySelector(".loss").style.display = "flex";
            mainMusic.pause();
            new Audio('styles/fon.mp3').play();
            
        }
    },

    startA = (a) => {
        mainMusic.loop = true;
        mainMusic.play();
        if (error < 3) {
            if (a == resultOfAction) {
                succ++;
                new Audio('styles/a.mp3').play();
                start();
            } else {
                error++;
                new Audio('styles/b.wav').play();
                start();
            }
        }
    };
    
start();