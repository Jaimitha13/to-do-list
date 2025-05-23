function addTask() {
    const input = document.getElementById("demo");
    const task = input.value.trim();

    if (task === "") return;

    // Create <li> element
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";

    // Create task span
    const span = document.createElement("span");
    span.textContent = task;

    // Create Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm";

    // On click, remove task
    deleteBtn.onclick = function () {
        li.remove();
    };

    // Append both to <li>
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add <li> to list
    document.getElementById("list").appendChild(li);

    // Clear input
    input.value = "";
}

