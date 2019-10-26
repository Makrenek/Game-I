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
        if (activeItems.indexOf(this) > -1) {
            this.element.classList.add("erace");
            activeItems.splice(activeItems.indexOf(this), 1);
        }
    }
    getName() {
        return this.name;
    }
};

const itemListShown = document.querySelector(".itemList");

const itemList = [new Item("glasses"), new Item("shoes"), new Item("hat"), new Item("aid-kit"), new Item("compass"), new Item("flashlight"), new Item("bagpack"), new Item("binoculars"), new Item("wallet"), new Item("map"), new Item("camera"), new Item("watch"), new Item("sunscreen"), new Item("lighter"), new Item("phone")]

let newItems = [...itemList];

const activeItems = [];

(function activeItem() {
    for (let i = 0; i <= itemList.length / 2 - 1; i++) {
        let currentItem = Math.floor(Math.random() * newItems.length);
        newItems[currentItem].activate();
        newItems.splice(currentItem, 1);
    }
})()

const printList = () => {
    activeItems.forEach(item => {
        itemListShown.innerHTML += `<p>${item.getName()}</p>`;
    })
};

printList();

const handleWin = () => {
    if (activeItems.length == 0) {
        window.alert(`You won!
        Your score is: 0`);
    }
};