const firstWrapper = document.querySelector(".first-task");
const secondWrapper = document.querySelector(".second-task");
const titleH1 = document.querySelector("h1");
const buttonChangeName = document.querySelector(".button-name");

const ourList = document.querySelector(".list");
const buttonAddtoList = document.querySelector(".button-list");

buttonChangeName.addEventListener("click", () => {
   // const newTitle = prompt('Insert new title');
   const newTitle = document.getElementById('new-title').value;
   titleH1.textContent = newTitle;
});

buttonAddtoList.addEventListener("click", () => {
    const listValue = prompt('Insert list element');
    addToList(listValue);
});

const addToList = (event) => {
    const childListElement = document.createElement("li");
    const addValue = document.createTextNode(event);
    childListElement.append(addValue);
    ourList.append(childListElement);

}