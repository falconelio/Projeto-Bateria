// Detecta clique nos botões
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML.toLowerCase();
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    });
}

// Detecta tecla pressionada no teclado
document.addEventListener("keypress", function (event) {
    var key = event.key.toLowerCase();
    makeSound(key);
    buttonAnimation(key);
});

// Função para tocar som baseado na tecla
function makeSound(key) {
switch (key) {
    case "a":
        var crash = new Audio("Sound/crash.mp3");
        crash.play();
        break;
    case "s":
        var tom1 = new Audio("Sound/tom1.mp3");
        tom1.play();
        break;
    case "d":
        var snare = new Audio("Sound/snare.mp3");
        snare.play();
        break;
    case "g":
        var kickbass = new Audio("Sound/kickbass.mp3");
        kickbass.play();
        break;
    case "j":
        var tom3 = new Audio("Sound/tom3.mp3");
        tom3.play();
        break;
    case "k":
        var tom2 = new Audio("Sound/tom2.mp3");
        tom2.play();
        break;
    case "l":
        var crash2 = new Audio("Sound/crash.mp3");
        crash2.play();
        break;
    default:
        console.log("Tecla não mapeada: " + key);
    }
}

// Função para animar os botões
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}
}
