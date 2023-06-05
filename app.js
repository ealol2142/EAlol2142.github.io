let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1").value;
let btn2 = document.getElementById("btn2").value;
let btn3 = document.getElementById("btn3").value;

btn1.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали 1 кнопку");
        item = "1";
        tg.MainButton.show();
    }
});

btn2.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали 2 кнопку");
        item = "2";
        tg.MainButton.show();
    }
});

btn3.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали 3 кнопку");
        item = "3";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    let data = {
        name: item,
    }
    tg.sendData(JSON.stringify(data));
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

// p.innerText = `${tg.initDataUnsafe.firstName}
// ${tg.initDataUnsafe.last_name}`;
// usercard.appendChild(p);