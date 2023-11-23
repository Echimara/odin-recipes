// filename: script.js

document.addEventListener("DOMContentLoaded", function () {
    // Code to run after the DOM content has loaded

    // Example: Change the background color of the body
    document.body.style.background = "linear-gradient(to top, #3399ff 41%, #99ccff 100%)";

    // Display welcome alert
    alert("Welcome to Odin Recipes! - by Chimara");

    // Toggle background color on click
    var isBackgroundBlue = true;

    document.body.addEventListener("click", function () {
        if (isBackgroundBlue) {
            document.body.style.background = "linear-gradient(to top, #ff9999 41%, #ffcc99 100%)";
        } else {
            document.body.style.background = "linear-gradient(to top, #3399ff 41%, #99ccff 100%)";
        }

        isBackgroundBlue = !isBackgroundBlue;
    });

    // Log success message to the console
    console.log("Script loaded successfully!");
});
