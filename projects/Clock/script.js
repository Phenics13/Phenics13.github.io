// Constants
const tg = "--toggle";

// Manage time clock
// let time = document.getElementById("currentTime");
let time = document.querySelector('#currentTime');

// Always display time with 2 numbers 
function pad(n) {
    return ('0' + n).slice(-2);
}
let europeanFormat = () => {
    let current = new Date();
    time.innerHTML = `${pad(current.getHours())}:${pad(current.getMinutes())}:${pad(current.getSeconds())}`;
};
let britishFormat = () => {
    let current = new Date();
    let hours = current.getHours();
    if (hours > 12) {
        hours = hours - 12;
        time.innerHTML = `${pad(hours)}:${pad(current.getMinutes())}:${pad(current.getSeconds())} PM`;
    }
    else {
        time.innerHTML = `${pad(hours)}:${pad(current.getMinutes())}:${pad(current.getSeconds())} AM`;
    }
};
let setTime = europeanFormat;
setTime();
let interval = setInterval(setTime, 200);

// Manage menu
let menuBurger = document.querySelector('.menu-burger');
let menu = document.querySelector('.menu');
let menuExit = document.querySelector('.menu--exit');
menuBurger.addEventListener("click", function () {
    menuBurger.classList.remove(tg);
    menu.classList.add(tg);
});
menuExit.addEventListener("click", function () {
    menuBurger.classList.add(tg);
    menu.classList.remove(tg);
});

// menu - toggle dark theme
let themeToggle = document.querySelector('#theme');
let body = document.querySelector('body');
let hrs = document.querySelectorAll('hr');

function findLabel(input) {
    let id = input.id;
    let labels = document.querySelectorAll('label');
    for (let i = 0; i < labels.length; i++) {
        const element = labels[i];
        if (element.htmlFor == id) return element;
    }
}

// for async - await
const delay = ms => new Promise(res => setTimeout(res, ms));

const toggleDarkTheme = async () => {
    await delay(300);
    if (themeToggle.checked) {
        body.classList.add("--dark");
        Array.from(hrs).forEach(hr => {
            hr.classList.add("--dark");
        });
    }
    else {
        body.classList.remove("--dark");
        Array.from(hrs).forEach(hr => {
            hr.classList.remove("--dark");
        });
    }
    menu.classList.remove("--toggle");
    await delay(2000);
    menu.classList.add("--toggle");
};

let labelTheme = findLabel(themeToggle);
labelTheme.addEventListener("click", toggleDarkTheme);

// Auto dark theme based on time
let current = new Date();
if (current.getHours() >= 20 && themeToggle.checked == false) {
    console.log("works");
    themeToggle.checked = true;
    body.classList.add("--dark");
    Array.from(hrs).forEach(hr => {
        hr.classList.add("--dark");
    });
}

// menu - toggle 12/24
const toggleTimeFormat = async () => {
    await delay(10);
    console.log("toggle work");
    if (!timeFormatToggle.checked) {
        setTime = britishFormat;
        console.log(12);
    }
    else {
        setTime = europeanFormat;
        console.log(24);
    }
    clearInterval(interval);
    interval = setInterval(setTime, 200);
};
let timeFormatToggle = document.getElementById("time");
let labelTime = findLabel(timeFormatToggle);
labelTime.addEventListener("click", toggleTimeFormat);

// Close menu on container click 
let container = document.querySelector('.container');
function removeTagContainsToggle(tag, afterToggle) {
    if (tag.classList.contains(tg)) {
        tag.classList.remove(tg);
        afterToggle.classList.add(tg);
    }
}
container.addEventListener("click", function () {
    removeTagContainsToggle(menu, menuBurger);
    removeTagContainsToggle(author, menu);
});

// Manage author page
let menuButton = document.querySelector('.menu--btn');
let author = document.querySelector('.author');
menuButton.addEventListener("click", function () {
    menu.classList.remove(tg);
    author.classList.add(tg);
});

let authorExit = document.querySelector('.author--exit');
authorExit.addEventListener("click", function () {
    author.classList.remove(tg);
    menu.classList.add(tg);
});

// Manage "Clock"-header bg change on click
let clock = document.querySelector('.header--clock');
let counter = 2;
function setClockBackground() {
    counter = counter + 1;
    if (counter > 5) counter = 1;
}
clock.addEventListener("click", function () {
    console.log("clicked");
    setClockBackground();
    clock.style.backgroundImage = `url(./img/bg${counter}.jpg)`;
});

// Manage hint (change of clock bg)
let hint = document.querySelector('.hint');

// Manage hint emoji
const hintShowFade = async () => {
    if (!hint.classList.contains(tg)) {
        hint.classList.add(tg);
        await delay(5000);
        hint.classList.remove(tg);
    }
};

let hintEmoji = document.querySelector('.question');
hintEmoji.addEventListener("click", hintShowFade);
const setMyTimeout = async (ts, fun, timeout) => {
    await delay(timeout);
    fun.call(ts);
};
setMyTimeout(hintEmoji, hintEmoji.click, 5000);

