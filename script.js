// Initialize variables to store the left and right gradient colors
let leftColor = "";
let rightColor = "";

// Initialize variables to keep track of the currently active buttons for left and right rows
let activeButtonLeft = null;
let activeButtonRight = null;

// This function is called when a button is clicked, and it changes the background gradient
function changeBackground(color, button, isLeftRow) {
  // If the button belongs to the left row, update the left gradient color
  // Otherwise, update the right gradient color
  if (isLeftRow) {
    leftColor = color;
  } else {
    rightColor = color;
  }

  // Update the background with the chosen gradient colors
  document.body.style.background = `linear-gradient(to right, ${leftColor}, ${rightColor})`;

  // Now, let's handle the behavior for the clicked button

  // If it's in the left row
  if (isLeftRow) {
    // Check if there was a previously active button in the left row
    if (activeButtonLeft) {
      // If yes, remove the "active" class and reset the scale for the previous active button
      activeButtonLeft.classList.remove("active");
      activeButtonLeft.style.transform = "scale(1)";
    }

    // Add the "active" class to the clicked button and scale it to make it look active
    button.classList.add("active");
    button.style.transform = "scale(1.3)";

    // Update the activeButtonLeft variable to keep track of the current active button in the left row
    activeButtonLeft = button;
  } else {
    // Otherwise, it's in the right row

    // Check if there was a previously active button in the right row
    if (activeButtonRight) {
      // If yes, remove the "active" class and reset the scale for the previous active button
      activeButtonRight.classList.remove("active");
      activeButtonRight.style.transform = "scale(1)";
    }

    // Add the "active" class to the clicked button and scale it to make it look active
    button.classList.add("active");
    button.style.transform = "scale(1.3)";

    // Update the activeButtonRight variable to keep track of the current active button in the right row
    activeButtonRight = button;
  }
}
