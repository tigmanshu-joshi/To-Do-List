const button = document.getElementById("add_item");
const section = document.getElementById("to_do_list");
const input = document.getElementById("input");

// ADD ITEM FUNCTION
const addItem = () => {
  const para = document.createElement("p");
  para.innerText = input.value;

  const mainDiv = document.createElement("div");
  mainDiv.className = "item";

  const iconDiv = document.createElement("div");
  const checkBox = document.createElement("i");
  const trashIcon = document.createElement("i");

  checkBox.className = "fas fa-check-square";
  trashIcon.className = "fas fa-trash";

  //   EVENT IN CHECKBOX AND TRASHICON

  checkBox.addEventListener("click", () => {
    checkBox.style.background("green");
  });

  trashIcon.addEventListener("click", () => {
    mainDiv.remove();
  });

  checkBox.style.color = "lightgray";
  trashIcon.style.color = "darkgray";

  iconDiv.appendChild(checkBox);
  iconDiv.appendChild(trashIcon);

  mainDiv.appendChild(para);
  mainDiv.appendChild(iconDiv);
  section.appendChild(mainDiv);

  input.value = "";
};

button.addEventListener("click", addItem);
