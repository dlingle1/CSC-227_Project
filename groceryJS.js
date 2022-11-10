let grocery = [];
let itemKeys = [];

document.getElementById("addItem").addEventListener("click", function() {
    let item = document.getElementById("item").value;

    document.getElementById("list").innerHTML += ("<input type=\"checkbox\" id=\"\"><label>" + item + "</label><br>");

});

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("item").value = "";
})