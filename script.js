// to clear the consoleon every refresh, just use console.clear();
console.clear();
// a function which loads on every time ou click refreshor load window as normal

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = ",./;'[]=-<>?:}{+_)|(*&^%$#@!'";
let intensityIndicator = document.getElementById("intensityIndicator");
let lengthInput = document.getElementById("passwordInput");

lengthInput.addEventListener("input", () => {
  let length = parseInt(lengthInput.value);

  if (length < 8) {
    intensityIndicator.innerText = "Very Weak";
  } else if (length <= 15) {
    intensityIndicator.innerText = "Strong";
  } else if (length < 25) {
    intensityIndicator.innerText = "Very Strong";
  } else if (length < 50) {
    intensityIndicator.innerText = "high intensity";
  }
});

window.onload = function () {
  generateRandomPassword();
  faqProperties();
};

function generateRandomPassword() {
  let length = parseInt(document.getElementById("passwordInput").value);
  let allCharacters = upperCaseLetters + lowerCaseLetters + numbers + symbols;
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }
  document.getElementById("passwordHolder").value = password;
}

function rangeSlider(value) {
  const rangeValueDispla = document.getElementById("password-length");
  rangeValueDispla.textContent = value;
  generateRandomPassword(value); // Generate a new password whenever the length changes
  updateIntensityIndicator(value); // Update the intensity indicator
  genByCheckBox(value);
}
function btnIncreasedValue() {
  const rangeValue = document.getElementById("passwordInput");
  let increasingValueOnBtnClick = parseInt(rangeValue.value);

  if (increasingValueOnBtnClick < rangeValue.max) {
    increasingValueOnBtnClick += 1;
    rangeValue.value = increasingValueOnBtnClick;
    rangeSlider(increasingValueOnBtnClick);
  }

  updateIntensityIndicator();
}

function updateIntensityIndicator() {
  const intensityIndicator = document.getElementById("intensityIndicator");
  const length = parseInt(document.getElementById("passwordInput").value);

  if (length < 8) {
    intensityIndicator.innerText = "Very Weak";
  } else if (length <= 15) {
    intensityIndicator.innerText = "Strong";
  } else if (length < 25) {
    intensityIndicator.innerText = "Very Strong";
  } else if (length < 50) {
    intensityIndicator.innerText = "High Intensity";
  }
}

document
  .getElementById("plusbttn")
  .addEventListener("click", btnIncreasedValue);

function btnDecreasedValue() {
  const rangeValue = document.getElementById("passwordInput");
  let decreasingValueOnBtnClick = parseInt(rangeValue.value);

  if (decreasingValueOnBtnClick > rangeValue.min) {
    decreasingValueOnBtnClick -= 1;
    rangeValue.value = decreasingValueOnBtnClick;
    rangeSlider(decreasingValueOnBtnClick);
  }

  updateIntensityIndicator();
}

function updateIntensityIndicator() {
  const intensityIndicator = document.getElementById("intensityIndicator");
  const length = parseInt(document.getElementById("passwordInput").value);

  if (length < 8) {
    intensityIndicator.innerText = "Very Weak";
  } else if (length <= 15) {
    intensityIndicator.innerText = "Strong";
  } else if (length < 25) {
    intensityIndicator.innerText = "Very Strong";
  } else if (length < 50) {
    intensityIndicator.innerText = "High Intensity";
  }
}

document
  .getElementById("minusbttn")
  .addEventListener("click", btnDecreasedValue);

function isAnyCheckboxChecked() {
  // Get the checkbox states
  const includeUppercase =
    document.getElementById("includeCapsLetters").checked;
  const includeLowercase = document.getElementById(
    "includeSmallLetters"
  ).checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;

  // Check if at least one is checked
  if (
    includeUppercase ||
    includeLowercase ||
    includeNumbers ||
    includeSymbols
  ) {
    return true; // At least one checkbox is checked
  } else {
    alert("Please select at least one character type!"); // Alert if none are checked
    return false; // No checkbox is checked
  }
}

function genByCheckBox() {
  if (!isAnyCheckboxChecked()) {
    return; // Stop the function if no checkbox is checked
  }
  let length = parseInt(document.getElementById("passwordInput").value);
  allCharacters = "";
  password = "";
  const includeUppercase =
    document.getElementById("includeCapsLetters").checked;
  const includeLowercase = document.getElementById(
    "includeSmallLetters"
  ).checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;

  if (includeUppercase) {
    allCharacters += upperCaseLetters;
  }
  if (includeLowercase) {
    allCharacters += lowerCaseLetters;
  }
  if (includeNumbers) {
    allCharacters += numbers;
  }
  if (includeSymbols) {
    allCharacters += symbols;
  }

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }
  document.getElementById("passwordHolder").value = password;
}
function copyToClipboard() {
  // Get the text from the input field
  const copyText = document.getElementById("passwordHolder").value;

  // Copy the text to the clipboard
  navigator.clipboard
    .writeText(copyText)
    .then(function () {
      // Alert the user that the text was copied
      alert("Copied to clipboard: " + copyText);
    })
    .catch(function (error) {
      console.error("Could not copy text: ", error);
    });
}

function faqProperties() {
  const faqPage = document.getElementById("faqBtn");
  faqPage.addEventListener("click", () => {
    window.location.href = "./index2.html";
  });
}
function menuDropDown(){
    document.getElementById("dropDown").classList.toggle("show");
}