// Author: Chi
// filename: script.js

document.addEventListener("DOMContentLoaded", function () {
    // Code to run after the DOM content has loaded

    // Example: Change the background color of the body
    document.body.style.background = "burlywood";

    // Display welcome alert
    alert("Welcome to Odin Recipes! - by Chimara");

    // Toggle background color on click
    var isBackgroundBlue = true;

    document.body.addEventListener("click", function () {
        if (isBackgroundBlue) {
            document.body.style.background = "plum";
        } else {
            document.body.style.background = "burlywood";
        }

        isBackgroundBlue = !isBackgroundBlue;
    });

    // Log success message to the console
    console.log("Script loaded successfully!");
});
