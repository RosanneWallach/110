var purpleBtn = document.getElementById("purple")
var greenBtn = document.getElementById("green")
var blueBtn = document.getElementById("blue")
var redBtn = document.getElementById("red")

purple.addEventListener("click", function() {
    document.body.style.backgroundColor = "purple"
})

greenBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "green"
})

blueBtn.addEventListener("click", function({
    document.body.style.backgroundColor = "blue"
})

redBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "red"
})

white.addEventListener("click", function(){
    document.body.style.backgroundColor = "white"
})

var count = 0;
var subtractBtn = document.getElementById("subtract")
var addBtn = document.getElementById("add")

subtractBtn.addEventListener("click", function(){
    count--
    document.getElementById("counter").innerText = count;
})
addBtn.addEventListener("click", function(){
    count++
    document.getElementById("counter").innerText = count;
})