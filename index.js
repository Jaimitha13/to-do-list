function addTask() {
    const input = document.getElementById("demo");
    const task = input.value.trim();

    if (task === "") return;


    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";


    const span = document.createElement("span");
    span.textContent = task;


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm";

    deleteBtn.onclick = function () {
        li.remove();
    };


    li.appendChild(span);
    li.appendChild(deleteBtn);


    document.getElementById("list").appendChild(li);


    input.value = "";
}

