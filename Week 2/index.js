var newLi = document.createElement("li")
newLi.textContent = "3"
var myList = document.getElementById("my-list")
myList.prepend(newLi)
var newP = document.createElement("p")
newP.textContent = "All of this was created with Javascript"
newP.style.textAlign = "center"
newP.style.fontSize = "30px"
document.body.append(newP)