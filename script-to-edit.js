// Your JavaScript goes here

// Function to change the background image
function changeImg() {
    const imgSelector = document.getElementById("imgSelector");
    const selectedImg = imgSelector.value;
    const outputCanvas = document.getElementById("output-canvas");
    outputCanvas.style.backgroundImage = `url(${selectedImg})`;
}

// Function to update primary text
function outputText() {
    const primaryText = document.getElementById("textIndex").value;
    const text1 = document.getElementById("text-1");
    text1.textContent = primaryText;
}

// Function to update secondary text
function outputText2() {
    const secondaryText = document.getElementById("textIndex2").value;
    const text2 = document.getElementById("text-2");
    text2.textContent = secondaryText;
}

// Function to change font family
function fontChange() {
    const fontFamilies = document.getElementsByName("font-families");
    let selectedFontFamily = "";
    for (const fontFamily of fontFamilies) {
        if (fontFamily.checked) {
            selectedFontFamily = fontFamily.value;
            break;
        }
    }
    // Apply the selected font family to the text elements
    const text1 = document.getElementById("text-1");
    const text2 = document.getElementById("text-2");
    text1.style.fontFamily = selectedFontFamily;
    text2.style.fontFamily = selectedFontFamily;
}

// Function to change text color
function chooseColor() {
    const textColor = document.getElementById("textColor").value;
    const text1 = document.getElementById("text-1");
    const text2 = document.getElementById("text-2");
    text1.style.color = textColor;
    text2.style.color = textColor;
}

// Function to change font size
function changeSize() {
    const fontSize = document.getElementById("slider").value;
    const text1 = document.getElementById("text-1");
    const text2 = document.getElementById("text-2");
    text1.style.fontSize = fontSize + "px";
    text2.style.fontSize = fontSize + "px";
}

// Function to create the image
function createImage() {
    const img = document.createElement("img");
    img.src = document.getElementById("imgSelector").value;
    img.id = "imah";
    document.getElementById("output-canvas").appendChild(img);
}

// Function to save the image
function saveImage() {
    const canvas = document.getElementById("output-canvas");
    const dataURL = canvas.toDataURL();
    const fileName = prompt("Enter a file name:");
    const save = window.open("data:image/png;base64," + dataURL, fileName);
}

// Event listeners

document.getElementById("imgSelector").addEventListener("change", changeImg);
document.getElementById("textIndex").addEventListener("input", outputText);
document.getElementById("textIndex2").addEventListener("input", outputText2);
document.querySelectorAll("input[name='font-families']").forEach(input => {
    input.addEventListener("change", fontChange);
});
document.getElementById("textColor").addEventListener("change", chooseColor);
document.getElementById("slider").addEventListener("input", changeSize);
document.getElementById("save-img").addEventListener("click", saveImage);

// Create the image when the page loads
window.onload = createImage;
