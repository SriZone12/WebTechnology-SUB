const inputWork = document.getElementById('inputWork');
const addBtn = document.getElementById('addBtn');
const listContainer = document.getElementById('listContainer');

// Add a new task
addBtn.addEventListener('click', () => {
    const taskText = inputWork.value.trim();
    if (!taskText) {
        alert("Please enter a task");
        return;
    }

    // Task container
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        label.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });

    // Label
    const label = document.createElement('label');
    label.textContent = taskText;

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.textContent = 'Edit';

    // Save button
    const saveBtn = document.createElement('button');
    saveBtn.type = 'button';
    saveBtn.textContent = 'Save';
    saveBtn.style.display = 'none';

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete';

    // Edit logic
    editBtn.addEventListener('click', () => {
        const inputEdit = document.createElement('input');
        inputEdit.type = 'text';
        inputEdit.value = label.textContent;
        taskDiv.replaceChild(inputEdit, label);
        editBtn.style.display = 'none';
        saveBtn.style.display = 'inline';
    });

    // Save logic
    saveBtn.addEventListener('click', () => {
        const inputEdit = taskDiv.querySelector('input[type="text"]');
        if (!inputEdit.value.trim()) {
            alert("Task cannot be empty");
            return;
        }
        label.textContent = inputEdit.value.trim();
        taskDiv.replaceChild(label, inputEdit);
        saveBtn.style.display = 'none';
        editBtn.style.display = 'inline';
    });

    // Delete logic
    deleteBtn.addEventListener('click', () => {
        listContainer.removeChild(taskDiv);
    });

    // Append elements
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    taskDiv.appendChild(editBtn);
    taskDiv.appendChild(saveBtn);
    taskDiv.appendChild(deleteBtn);

    listContainer.appendChild(taskDiv);

    inputWork.value = '';
});
