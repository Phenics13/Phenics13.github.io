let previewBackground = document.querySelector('.preview--background');
document.addEventListener('mousemove', function (event) {
    let x = (event.clientX - 500) / 10;
    let y = (event.clientY - 100) / 10;
    previewBackground.style.transform = `translateX(${-x}px) translateY(${-y}px)`;
});
let previewButton = document.querySelector('.preview--btn');
console.log(previewButton);
console.log(document.querySelector('.section'));
previewButton.addEventListener('click', function () {
    console.log("click");
    document.querySelector('.section').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
});