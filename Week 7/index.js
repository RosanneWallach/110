function add() {
    var input = document.getElementById('Input').value;
    var ol = document.getElementById('ol');
    var li = document.createElement('li')
    var text = document.createTextNode(input);

    li.appendChild(text);
    ol.appendChild(li)
}
