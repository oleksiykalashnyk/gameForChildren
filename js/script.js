"use strict";

let i = 0,
    txt = ``,
    resultOfAction = "",
    resultOfActionOp1 = "",
    resultOfActionOp2 = "",
    resultOfActionOp3 = "",
    resultOfActionOp4 = "",
    arr = [],
    randomArr = [],
    A = "",
    B = "",
    C = "",
    x = 0,
    y = 0,
    error = 0,
    succ = 0,
    speed = 120,
    elementIdTime = document.getElementById("time"),
    mainMusic = new Audio('styles/main.mp3'),
    lossMusic = new Audio('styles/fon.mp3'),

    getRandomInt9 = () => {
        return Math.floor(Math.random() * 9) + 1;
    },

    getRandomInt4 = () => {
        return Math.floor(Math.random() * 4) + 1;
    },

    getRandomInt123 = (a) => {
        return Math.floor(Math.random() * a) + 1;
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

    shufflingAnArray = (arr) => {
        let j, temp;
        for (let i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr;
    },

    showOptions = () => {
        let option1 = document.getElementById("option-1"),
            option2 = document.getElementById("option-2"),
            option3 = document.getElementById("option-3"),
            option4 = document.getElementById("option-4"),
            sukcesShow = document.getElementById("sukces"),
            errorShow = document.getElementById("unSukces");

        sukcesShow.innerHTML = succ;
        errorShow.innerHTML = error;

        for (let i = -12; i <= 99; i++) {
            randomArr.push(i);
        }

        let realResultInRandomArray = randomArr.indexOf(resultOfAction, 0);
        resultOfActionOp1 = randomArr[realResultInRandomArray];
        console.log(randomArr[realResultInRandomArray]);
        randomArr.splice(realResultInRandomArray, 1);
        console.log(randomArr[realResultInRandomArray]);

        do {
            let randomNum2 = getRandomInt123(randomArr.length);
            resultOfActionOp2 = randomArr[randomNum2];
            randomArr.splice(randomNum2, 1);

            let randomNum3 = getRandomInt123(randomArr.length);
            resultOfActionOp3 = randomArr[randomNum3];
            randomArr.splice(randomNum3, 1);

            let randomNum4 = getRandomInt123(randomArr.length);
            resultOfActionOp4 = randomArr[randomNum4];
            randomArr.splice(randomNum4, 1);
        } while (resultOfActionOp2 == undefined || resultOfActionOp3 == undefined || resultOfActionOp4 == undefined);

        randomArr = [];

        arr = [resultOfActionOp1, resultOfActionOp2, resultOfActionOp3, resultOfActionOp4];

        shufflingAnArray(arr);

        option1.innerHTML = arr[0];
        option2.innerHTML = arr[1];
        option3.innerHTML = arr[2];
        option4.innerHTML = arr[3];
    },


    query = (a) => {
        x = document.getElementById(`option-${a}`);
        y = +x.innerText;
        validationResult(y);
    },

    start = () => {
        if (error < 3) {
            genAsk();
            showOptions();
        } else {
            document.getElementById("win").innerHTML = succ;
            document.querySelector(".game").style.display = "none";
            document.querySelector(".loss").style.display = "flex";

            mainMusic.pause();

            lossMusic.loop = true;
            lossMusic.volume = 0.1;
            lossMusic.play();

        }
    },

    validationResult = (a) => {
        mainMusic.loop = true;
        mainMusic.volume = 0.15;
        mainMusic.play();
        if (error < 3) {
            if (a == resultOfAction) {
                succ++;
                let succMusic = new Audio('styles/a.mp3');
                succMusic.volume = 0.3;
                succMusic.play();
                start();
            } else {
                error++;
                let errorMusic = new Audio('styles/b.wav');
                errorMusic.volume = 0.2;
                errorMusic.play();
                start();
            }
        }
    };

start();