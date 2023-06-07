// document.querySelector(".photo").addEventListener("click", function() {

//   alert("clicked");

// });


var numberOfImageButtons = document.querySelectorAll(".card").length;

for (var i = 0; i < numberOfImageButtons; i++) {

  document.querySelectorAll(".card")[i].addEventListener("click", function() {

    // alert(this.innerHTML + "clicked");
    // let audio= new Audio("sounds/wolf.mp3");
    // audio.play();

    var buttonInnerHTML = this.innerText;
    switch (buttonInnerHTML) {
      case "Cat":
        let cat = new Audio("sounds/cat.mp3");
        cat.play();
        break;
  
      case "Dog":
        let dog = new Audio("sounds/dog.mp3");
        dog.play();
        break;
  
      case "Tiger":
        let tiger = new Audio('sounds/tiger.mp3');
        tiger.play();
        break;
  
      case "Lion":
        var lion = new Audio('sounds/lion.mp3');
        lion.play();
        break;
  
      case "Gorilla":
        let chimp = new Audio('sounds/chimp.mp3');
        chimp.play();
        break;
  
      case "Penguin":
        let penguin = new Audio("sounds/pingvin.mp3");
        penguin.play();
        break;
  
      case "Horse":
        let horse = new Audio("sounds/horse.mp3");
        horse.play();
        break;

      case "Panda":
        let panda = new Audio("sounds/panda.mp3");
        panda.play();
        break;

      case "Wolf":
       let wolf = new Audio("sounds/wolf.mp3");
       wolf.play();
       break;

      case "Elephant":
        let elephant = new Audio('sounds/elephant.mp3');
        elephant.play();
        break;
  
  
      default: console.log(error);
  
    }

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

  

}

// function makeSound(key){
    

// }


// function buttonAnimation(currkey){

// }