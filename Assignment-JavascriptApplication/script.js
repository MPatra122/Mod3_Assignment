function upDate(previewPic) {
    console.log("Image clicked"); // Check if event is triggered
    console.log(previewPic.alt); // Check alt text of the image
    console.log(previewPic.src); // Check source of the image

    var displayBox = document.getElementById('image');
    displayBox.innerHTML = previewPic.alt; // Update the text
    displayBox.style.backgroundImage = "url('" + previewPic.src + "')"; // Update the background image
}

function undo() {
    var displayBox = document.getElementById('image');
    displayBox.style.backgroundImage = "none"; // Reset the background image
    displayBox.innerHTML = "Hover over an image below to display here."; // Reset the text
}
