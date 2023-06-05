let tg = window.Telegram.WebApp;

tg.expand();

let item = "";
let choice = "";

let alum_pipes = document.getElementById("Aluminum_pipes");
let boards = document.getElementById("Boards");
let floor_til = document.getElementById("Floor_tiles");

alum_pipes.addEventListener("click", function(){
    item = "Aluminum pipes";
});

boards.addEventListener("click", function(){
    item = "Boards";
});

floor_til.addEventListener("click", function(){
    item = "Floor tiles";
});

btn1.addEventListener("click", () => {
    data={
        itemName: item,
    }
    tg.sendData(data);
    tg.close()
});


