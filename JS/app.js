document.body.style.textAlign = "center";
document.body.style.backgroundColor = "aquamarine";
let heading = document.getElementsByTagName("h1")[0];
let listInst = document.getElementsByTagName("label")[0];
let markInst = document.getElementsByTagName("p")[0];
heading.style.color = "blue";
heading.style.fontSize = "36px";
heading.style.fontFamily = "cursive";
listInst.style.fontSize = "28px";
listInst.style.fontFamily = "Brush Script MT";
let list = [];
function addBook() {
  let book = document.querySelector("#bname");
  let newBook = book.value;
  console.log(newBook);
  list.push(newBook);
  book.value = "";
}

function finBook(lbook) {
  lbook.style.textDecoration = "line-through";
  lbook.style.textDecorationColor = "red";
  lbook.style.color = "crimson";
  lbook.style.fontSize = "30px";
}

function dispList() {
  let dispBook = document.querySelectorAll(".display");
  dispBook[0].innerHTML = "<ul>";
  for (let lbook of list) {
    dispBook[0].innerHTML +=
      '<li class = "lbook" id ="' +
      lbook +
      '" onClick ="finBook(' +
      lbook +
      ')">' +
      lbook +
      "</li>";
  }
  dispBook[0].innerHTML += "</ul>";
}
