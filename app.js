let tg = window.Telegram.WebApp;

tg.expand();

let item = "";
let choice = "";

let alum_pipes = document.getElementById("Aluminum_pipes");
let boards = document.getElementById("Boards");
let floor_til = document.getElementById("Floor_tiles");

alum_pipes.addEventListener("click", function(){
    item = "Al";
});

boards.addEventListener("click", function(){
    item = "Boards";
});

floor_til.addEventListener("click", function(){
    item = "Floortiles";
});

btn1.addEventListener("click", () => {
    data={
        itemName: "Al",
    }
    tg.sendData(data);
    tg.close()
});


