btnElement = document.querySelector(".btn");
nameElement = document.querySelector("#name");
surnameElement = document.querySelector("#surname");
resultElement = document.querySelector(".result");

btnElement.addEventListener("click", function () {
    resultElement.innerHTML = "Ответ: Здравствуйте, " + nameElement.value + " " + surnameElement.value + "!";
});