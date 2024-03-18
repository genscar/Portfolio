var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener(
    "click",
    function () {
      var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    }
    //what  to do when click detected
  );
}

//detecting keyboard press

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kickbass = new Audio("./sounds/kick-bass.mp3");
      kickbass.play();
      break;

    case "l":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(buttonInnerHTMLinnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// document.addEventListener("keydown", function (event) {
//   if (event.key == "w") {
//     var tom1 = new Audio("./sounds/tom-1.mp3");
//     tom1.play();
//   }
//   if (event.key == "a") {
//     var tom2 = new Audio("./sounds/tom-2.mp3");
//     tom2.play();
//   }
//   if (event.key == "s") {
//     var tom3 = new Audio("./sounds/tom-3.mp3");
//     tom3.play();
//   }
//   if (event.key == "d") {
//     var tom4 = new Audio("./sounds/tom-4.mp3");
//     tom4.play();
//   }
//   if (event.key == "j") {
//     var crash = new Audio("./sounds/crash.mp3");
//     crash.play();
//   }
//   if (event.key == "k") {
//     var kickbass = new Audio("./sounds/kick-bass.mp3");
//     kickbass.play();
//   }
//   if (event.key == "l") {
//     var snare = new Audio("./sounds/snare.mp3");
//     snare.play();
//   }
// });

//var audio = new Audio("./sounds/tom-1.mp3");
//audio.play();
