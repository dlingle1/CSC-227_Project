var grocery = {};
let itemIds = [];
let itemIdLabels = [];
let itemIdBreaks = [];
let itemCount = 0;

document.getElementById("addItem").addEventListener("click", function() {
    let item = document.getElementById("item").value;

    document.getElementById("list").innerHTML += ("<input type=\"checkbox\" id=\"item" + itemCount + "\"><label for=\"item" + itemCount + "\" id=\"label" + itemCount + "\">" + item + "</label><br id=\"break" + itemCount + "\">");
    itemIdLabels.push("label" + itemCount);
    itemIdBreaks.push("break" + itemCount);
    itemIds.push("item" + itemCount);
    grocery["item" + itemCount] = item;
    itemCount++;
});

document.getElementById("removeItem").addEventListener("click", function() {
    console.log("Remove item(s)");
    let delItems = [];
    for (let i = 0; i < itemCount; i++) {
        console.log(document.querySelector("#" + itemIds[i]));
        if (document.querySelector("#" + itemIds[i]) == null) {
            console.log("skip");
        } else if (document.getElementById(itemIds[i]).checked == true) {
            delItems.push(itemIds[i]);
            delItems.push(itemIdLabels[i]);
            delItems.push(itemIdBreaks[i]);
            console.log("found one");
        }
    }

    let parent = document.getElementById("list");
    
    for (let i = 0; i < delItems.length; i++) {
        if (document.querySelector("#" + delItems[i])) {
            parent.removeChild(document.getElementById(delItems[i]));
        }
    }
});

document.getElementById("clear").addEventListener("click", function() {
    console.log("Clear list");
    let parent = document.getElementById("list");
    for (let i = 0; i < itemCount; i++) {
        if (document.querySelector("#" + itemIds[i]) == null) {
            console.log("skip");
        } else {
            parent.removeChild(document.getElementById(itemIds[i]));
            parent.removeChild(document.getElementById(itemIdLabels[i]));
            parent.removeChild(document.getElementById(itemIdBreaks[i]));
        }
    }
});

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("item").value = "";
});