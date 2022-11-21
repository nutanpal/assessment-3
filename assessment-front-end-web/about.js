console.log("hello world");

// 1.  write function
function handleSubmit(evt) {
  evt.preventDefault();
  alert("Form has been submited successfully.");
}
// function to complement user on focusing on image
function handleMouseOver() {
  alert("Hey, you are such an engaged reader !");
}

//2. select element
let form = document.querySelector("#contact");
let image = document.querySelector("img");

//3. combine function and event listner
form.addEventListener("submit", handleSubmit);
//mouseover event trigger when focusing on image
image.addEventListener("mouseover", handleMouseOver);

//4. random array restuarnat picker
var myArray = [
  "Kenny's Burger Joint Plano",
  "Covinos Pasta and Pizza",
  "Eddies Diner",
  "Holy Grail Pub",
  "Seasons 52",
  "Brasão Brazilian Steakhouse",
  "E. B. Latin Bistro",
  "Taj Mahal Indian taste",
];
function restro() {
  var rand = myArray[~~(Math.random() * myArray.length)];
  console.log(rand);
}

let form = document.querySelector("#restro");
//form.addEventListener("click", randrestro);
form.addEventListener("click", restro);
//resrto button
let restroBtn = document.querySelector("#restro");
restroBtn.addEventListener("click", restro);
