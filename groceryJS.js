var grocery = {};
let itemIds = [];

document.getElementById("addItem").addEventListener("click", function() {
    let item = document.getElementById("item").value;

    document.getElementById("list").innerHTML += ("<input type=\"checkbox\" id=\"" + item + itemIds.length + "\"><label for=\"" + item + itemIds.length + "\">" + item + "</label><br>");
    itemIds.push(item + itemIds.length);
    grocery[item + itemIds.length] = item;
    console.log(itemIds);
});

document.getElementById("removeItem").addEventListener("click", function() {
    let delItems = [];
    itemIds.array.forEach(element => {
        if (document.querySelector("" + element + "") == true) {
            delItems.push(element);
            itemIds.pop(element);
        };
    });

    let parent = document.getElementById("list");
    delItems.array.forEach(element => {
        parent.removeChild(document.getElementById("" + element + ""));
    });
});

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("item").value = "";
})