class Item {
    constructor(name) {
        this.name = name;
        this.element = document.querySelector(`.${name}`);


        const pickUp = this.pickUp.bind(this);
        this.element.addEventListener("click", function () {
            pickUp();
            itemListShown.innerHTML = "";
            printList();
            handleWin();
        })
    }
    activate() {
        activeItems.push(this);
    }
    pickUp() {
        if (play) {
            if (activeItems.indexOf(this) > -1) {
                this.element.classList.add("erace");
                activeItems.splice(activeItems.indexOf(this), 1);
            }
        }
    }
    getName() {
        return this.name;
    }
};

const itemListShown = document.querySelector(".itemList");
const time = document.getElementById("time");
const youWon = document.querySelector(".youWon");
const youLose = document.querySelector(".youLose");
let score;
let play = true;

const itemList = [new Item("glasses"), new Item("shoes"), new Item("hat"), new Item("aid-kit"), new Item("compass"), new Item("flashlight"), new Item("bagpack"), new Item("binoculars"), new Item("wallet"), new Item("map"), new Item("camera"), new Item("watch"), new Item("sunscreen"), new Item("lighter"), new Item("phone")]

let newItems = [...itemList];

const activeItems = [];

(function activeItem() {
    for (let i = 0; i <= itemList.length / 2 - 1; i++) {
        let currentItem = Math.floor(Math.random() * newItems.length);
        newItems[currentItem].activate();
        newItems.splice(currentItem, 1);
    }
})();

const printList = () => {
    activeItems.forEach(item => {
        itemListShown.innerHTML += `<p>${item.getName()}</p>`;
    })
};

printList();

const handleWin = () => {
    if (activeItems.length == 0) {
        localStorage.setItem("myScore", score);
        youWon.style.visibility = "visible";
    }
    document.querySelector(".score").innerText = `${score + 100}`;
};

const handleLose = () => {
    play = false;
    youLose.style.visibility = "visible";

}


function gameRoomTimer(callback, value) {
    value = value || 30;
    let timer = setInterval(function () {
        callback(value);
        if (value-- <= 0) {
            setTimeout(handleLose, 500);
            clearInterval(timer);
        }
        if (activeItems.length == 0) {
            clearInterval(timer);
        }
    }, 1000);
}
new gameRoomTimer(function (value) {
    let timerMsg = "00:" + (value >= 10 ? value : "0" + value);
    time.textContent = timerMsg;
    score = value;
});



