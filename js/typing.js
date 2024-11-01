const nameElement = document.getElementById('name');
const nameText = "MIKE";
let index = 0;

function type() {
    if (index < nameText.length) {
        nameElement.innerHTML += nameText.charAt(index);
        index++;
        setTimeout(type, 400); // Adjust typing speed here
    }
}

type();

