var boxCount = 0;

function buttonClick() {
    // Create and add div element
    var div =  document.createElement("div");
    var id = "new-box" + boxCount;
    div.setAttribute("id", id);
    div.setAttribute("class", "row search-div");
    document.getElementById("search-boxes").appendChild(div);

    // Create and add text area element to new div
    var input = document.createElement("textarea");
    input.setAttribute("rows", "2");
    input.setAttribute("cols", "50");
    input.setAttribute("id", "box-" + boxCount);
    document.getElementById(id).appendChild(input);

    // Create search button for question
    var search = document.createElement("button");
    search.setAttribute("id", "search-" + boxCount);
    search.setAttribute("class", "search-button");
    search.setAttribute("onclick", "search(this.id)");
    search.innerHTML = "Search";
    document.getElementById(id).appendChild(search);

    // Create delete button
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "delete-" + boxCount);
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.setAttribute("onclick", "deleteRow(this.id)");
    deleteButton.innerHTML = "Delete";
    document.getElementById(id).appendChild(deleteButton);
    boxCount += 1;
}

function search(clickedId) {
    // Get the id of button clicked
    var buttonNum = clickedId.split("-").pop();
    var boxId = "box-" + buttonNum;
    // Use number to get the corresponding text box id
    var userInput = document.getElementById(boxId).value;

    window.open("https://www.google.com/search?q=" + userInput);
}

function deleteRow(clickedId) {
    // Get the id of button clicked
    var boxNum = clickedId.split("-").pop();
    // Use number to get the corresponding div id and delete it
    var element = document.getElementById("new-box" + boxNum);
    element.parentNode.removeChild(element);
}