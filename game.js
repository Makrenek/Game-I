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
const sandwich = document.querySelector(".sandwich");
const bag = document.querySelector(".bag");
const radio = document.querySelector(".radio");
const phone = document.querySelector(".phone");


const itemListShown = document.querySelector(".itemList");
const restartBtn = document.querySelector(".btn-restart");

const itemList = [glasses, shoes, hat, bikini, towel, sunscreen, bagpack, medicine, passport, map, camera, watch, bottle, sandwich, bag, radio, phone];

let newItems = [...itemList];

const activeItems = [];

const activateItems = function () {
    for (let i = 0; i <= itemList.length / 2 - 1; i++) {
        let currentItem = Math.floor(Math.random() * newItems.length);
        newItems[currentItem].classList.add("box-blue");
        activeItems.push(newItems[currentItem]);
        newItems.splice(currentItem, 1);
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

activeItems.forEach(element => {
    itemListShown.innerHTML += `<p>${element.id}</p>`;
});

eraceItem();

restartBtn.addEventListener("click", activateItems);