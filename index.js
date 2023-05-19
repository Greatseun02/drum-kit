//query all element with class drum and stores it as a list in beatButtons
const beatButtons = document.querySelectorAll(".drum")
//stores the length list beatButtons
const numberOfBeatButtons = beatButtons.length;

//using for each to loop through the list beatButtons
beatButtons.forEach(function(button){
  //for each of the button we add a event listener to listen to the click event
  button.addEventListener("click", function() {
    //when the button is clicked we store the alphabet the button element contains in a variable buttonInnerHtml
    var buttonInnerHtml = button.innerHTML;
    //we call some function and pass buttonInnerHtml as the input to represent the button clicked
    makeSound(buttonInnerHtml);//this makes a sound depending on the input
    makeAnimations(buttonInnerHtml);//this animates the button clicked
 
   });
})
//this is add event listener to listen to any keyboard pressed down.
document.addEventListener("keypress", function(event){
  //when a key is press we pass in the event and get access to the value using the key
  makeSound(event.key);
  makeAnimations(event.key);
});

//a function that makes sounds
function makeSound(key){
  //using switch statement if the key passed in to the function is equal to any of the string "wasdjkl" it plays a sound else it alerts the users that they entered a wrong key 
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    default: alert("Entered wrong key");

  }
}

//this is a function that makes animations on the button clicked
function makeAnimations(input){
  //this queries for the element clicked and stores it in var addAttribute
  var addAttribute = document.querySelector("." + input);
  //this add a class to the button clicked. this class already has a style attached to it
  addAttribute.classList.add("pressed")
  //after a 0.1 second the class is removed to remove the style. this then makes it look animated.
  setTimeout(function (){addAttribute.classList.remove("pressed")}, 100)
}
