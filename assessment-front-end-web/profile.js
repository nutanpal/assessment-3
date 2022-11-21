// Build interactivity of buttons

//1. select element(get id from html file)
let colorBtn = document.querySelector("#color");
let placeBtn = document.querySelector("#place");
let ritualBtn = document.querySelector("#ritual");
//clearing-up forms
let formHoliday = document.querySelector("form");

//2. Write function
const favColor = () => {
  alert("My favorite color is purple.");
};

const favPlace = () => {
  alert("My favorite place is Hawai.");
};

const favRitual = () => {
  alert(
    "My favorite ritual is checking horoscope for the day right before falling asleep."
  );
};

const submitForm = (event) => {
  event.preventDefault();
  alert("I am ready for the adventure!");
};
//3. combine with event listener
colorBtn.addEventListener("click", favColor);
placeBtn.addEventListener("click", favPlace);
ritualBtn.addEventListener("click", favRitual);
formHoliday.addEventListener("submit", submitForm);
