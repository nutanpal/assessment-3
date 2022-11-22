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
/* // added to html file
var down = document.getElementById("xxx");
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
function GFG_Fun() {
  down.innerHTML = myArray[Math.floor(Math.random() * myArray.length)];
}
*/
