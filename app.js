var input = document.getElementById("todo-item");
var list  = document.getElementById("todo-list");

// Create Add Item Function
function addItem() {
    // Create li With Text Node
    var li = document.createElement("li");
    var liText = document.createTextNode(input.value);
    li.appendChild(liText)
    list.appendChild(li)
    // Create Edit Button
    var editBtn = document.createElement("button");
    var editBtnText =document.createTextNode("Edit");
    editBtn.setAttribute("onclick","edit(this)")
    editBtn.appendChild(editBtnText)
    li.appendChild(editBtn)

    // Create Delete Button
    var delBtn = document.createElement("button");
    var delBtnText = document.createTextNode("Delete");
    delBtn.setAttribute("onclick","del(this)")
    delBtn.appendChild(delBtnText)
    li.appendChild(delBtn)

    input.value = ""

}

// Create Delete All Function
function deleteItem() {
    list.innerHTML = ""
}

// Create Edit Button Function
function edit(e) {
    var edit = e.parentNode.firstChild.nodeValue;
    var update = prompt("Update Your Task",edit)
    e.parentNode.firstChild.nodeValue = update
}

// Create Delete Button Function
function del(e) {
    e.parentNode.remove()
}