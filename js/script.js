const firstWrapper = document.querySelector(".first-task");
const secondWrapper = document.querySelector(".second-task");
const titleH1 = document.querySelector("h1");
const buttonChangeName = document.querySelector(".button-name");
const ourList = document.querySelector(".list");
const childListElement = document.createElement("li");
const buttonAddtoList = document.querySelector(".button-list");

buttonChangeName.addEventListener("click", () => {
    const newTitle = prompt('Insert new title');
    titleH1.textContent = newTitle;
});

buttonAddtoList.addEventListener("click", () => {
    const listValue = prompt('Insert list element');
    ourList.appendChild(childListElement);
    childListElement.textContent = listValue;
})