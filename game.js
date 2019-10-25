const glasses = document.querySelector(".glasses");
const shoes = document.querySelector(".shoes");
const hat = document.querySelector(".hat");
const bikini = document.querySelector(".bikini");
const towel = document.querySelector(".towel");
const sunscreen = document.querySelector(".sunscreen");
const bagpack = document.querySelector(".bagpack");
const medicine = document.querySelector(".medicine");
const passport = document.querySelector(".passport");
const map = document.querySelector(".map");
const camera = document.querySelector(".camera");
const watch = document.querySelector(".watch");
const bottle = document.querySelector(".bottle");
const sanwich = document.querySelector(".sanwich");
const bag = document.querySelector(".bag");
const radio = document.querySelector(".radio");
const phone = document.querySelector(".phone");


const itemListShown = document.querySelector(".itemList");
const restartBtn = document.querySelector(".btn-restart");

const itemList = [glasses, shoes, hat, bikini, towel, sunscreen, bagpack, medicine, passport, map, camera, watch, bottle, sanwich, bag, radio, phone];

const activeItems = [];

const activateItems = function () {
    for (let i = 0; i < itemList.length / 2; i++) {
        let j = Math.floor(Math.random() * itemList.length);
        itemList[j].classList.add("box-blue");
        activeItems.push(itemList[j]);
    }
}

const handleWin = () => {
    if (activeItems.length == 0) {
        console.log("You win");
    }
};

const eraceItem = () => {
    activeItems.forEach(element => {
        element.addEventListener("click", function () {
            this.classList.add("erace");
            activeItems.pop(this);
            handleWin();
        })
    })
};

activateItems();

itemListShown.innerHTML = `<p>${activeItems}<p>`;

eraceItem();

restartBtn.addEventListener("click", activateItems);