let tg = window.Telegram.WebApp;

tg.expand();


let item = "";

let btn_pipe = document.getElementById("pipe");
let btn_les = document.getElementById("les");
let btn_plitka = document.getElementById("plitka");
let btn_ugol = document.getElementById("ugol");


btn_pipe.addEventListener("click", () => {
    let data = {
        name: 'pipe',
    }
    tg.sendData(JSON.stringify(data));
    tg.close()
});

btn_les.addEventListener("click", () => {
    let data = {
        name: 'les',
    }
    tg.sendData(JSON.stringify(data));
    tg.close()
});

btn_plitka.addEventListener("click", () => {
    let data = {
        name: 'plitka',
    }
    tg.sendData(JSON.stringify(data));
    tg.close()
});

btn_ugol.addEventListener("click", () => {
    let data = {
        name: 'ugol',
    }
    tg.sendData(JSON.stringify(data));
    tg.close()
});

// Telegram.WebApp.onEvent("mainButtonClicked", function(){
//     tg.sendData(item);
// });

// btn_pipe.addEventListener("click", function () {
//     item = "pipe";
// });
// btn_les.addEventListener("click", function () {
//     item = "les";
// });
// btn_plitka.addEventListener("click", function () {
//     item = "plitka";
// });
// btn_ugol.addEventListener("click", function () {
//     item = "ugol";
// });


