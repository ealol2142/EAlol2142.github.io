let tg = window.Telegram.WebApp;

tg.expand();

// tg.MainButton.textColor = "#FFFFFF";
// tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click", function(){
    item = "1";
});

// btn2.addEventListener("click", function(){
//     if (tg.MainButton.isVisible){
//         tg.MainButton.hide();
//     }
//     else {
//         tg.MainButton.setText("Вы выбрали 2 кнопку");
//         item = "2";
//         tg.MainButton.show();
//     }
// });

// btn3.addEventListener("click", function(){
//     if (tg.MainButton.isVisible){
//         tg.MainButton.hide();
//     }
//     else {
//         tg.MainButton.setText("Вы выбрали 3 кнопку");
//         item = "3";
//         tg.MainButton.show();
//     }
// });

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
})

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

// p.innerText = `${tg.initDataUnsafe.firstName}
// ${tg.initDataUnsafe.last_name}`;
// usercard.appendChild(p);