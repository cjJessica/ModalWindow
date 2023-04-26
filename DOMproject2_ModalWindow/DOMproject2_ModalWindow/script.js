'use strict';

/*
This project is to help you deepen your knowledge and skills with DOM and Events.

In this project, you will build a UI component which is called a Modal Window.

A Modal Window is basically a pop-up box which gets overlaid over the rest of the page. 

No matter which of the three buttons the user clicks, it will open the same modal window.

To close the modal window, the user can either click the X button on the modal window or 

click outside of the window or the user can press the Esc key on their keyboard.
*/



//--- Getting elements from html and style script to use in javascript
//style
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//HTML
const closeButton = document.querySelector(".close-modal");

let modalButtons = document.getElementsByClassName("show-modal");
let modal1 = modalButtons[0];
let modal2 = modalButtons[1];
let modal3 = modalButtons[2];



//--- Opening modal
modal1.onclick = openModal;
modal2.onclick = openModal;
modal3.onclick = openModal;

function openModal() {
    open = true;
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}



//--- Closing modal w/ X or when click on overlay
closeButton.onclick = closeModal;
overlay.onclick = closeModal;

function closeModal () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}



//--- Closing modal w/ key
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});






