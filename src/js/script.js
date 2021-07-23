import "../scss/main.scss"


const body = document.querySelector("body")
const hamburgerOpen = document.getElementById("hamburgerButton");
const hamburgerClose = document.getElementById("hamburgerClose");
const hamburgerList = document.querySelector(".hamburgerList").children;
const overlayGreen = document.getElementById("overlay")
const overlayList = document.querySelector(".no-visibility")

/* 
 * Toggles hamburgeropen icon animation
 * Adds no scroll when mobile menu is open
 * Changing visibility on
 * Function for adding fade
 * 
 * 
 * 
*/ 
function toggleOverlay(fade, visibility, scroll) {
    hamburgerOpen.classList.toggle("toggle");
    body.classList.add(scroll); // Adds no scroll class to body tag
    overlayList.style.visibility = visibility; 
    overlayList.classList.add(fade); // Adds fade animation to mobile menu list
    overlayGreen.classList.add("overlay"); // Adds green color gradiant class from _header.scss 
    overlayGreen.classList.add(fade); // Adds fade animation to the green overlay
}
/* 
 * Toggles hamburger close icon animation
 * Function for removing fade
 * Changing visibility off
 * Removing no scroll, when hamburger menu is closed.
 * 
*/ 
function removeFade(fade, scroll) {
    hamburgerClose.classList.toggle("toggle");
    body.classList.remove(scroll); // Removes no scroll class to from body tag 
    overlayList.style.visibility = "hidden";
    overlayGreen.classList.remove(fade); // Removes fade class from overlay
    overlayList.classList.remove(fade);  //  Removes fade class from mobile menu list
    
}

// Open hamburger from bars icon
hamburgerOpen.addEventListener("click", () => {
    removeFade("fade-out")
    toggleOverlay("fade-in", "visible", "noscroll");
});
// Close hamburger from X icon
hamburgerClose.addEventListener("click", () => {
    removeFade("fade-in", "noscroll");
    toggleOverlay("fade-out");
});
// Closes mobile menu when clicked outside  
overlayGreen.addEventListener("click", () => {
    removeFade("fade-in", "noscroll");
    toggleOverlay("fade-out"); 
});
// Closes mobile menu when user navigates from list nav or clicks list
overlayList.addEventListener("click", (e) => {
    e = removeFade("fade-in", "noscroll");
        toggleOverlay("fade-out"); 
})
