function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById("clock-top").textContent = timeString;
}

// Запускаємо одразу і оновлюємо щосекунди
updateClock();
setInterval(updateClock, 1000);


// Оновлювати щосекунди
document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (!text) return;

    const li = document.createElement("li");
    li.textContent = text;

    // Позначення виконаного
    li.addEventListener("click", () => li.classList.toggle("completed"));

    // Кнопка видалення
    const del = document.createElement("button");
    del.textContent = "X";
    del.className = "delete-btn";
    del.addEventListener("click", e => {
      e.stopPropagation();
      li.remove();
    });

    li.appendChild(del);
    taskList.appendChild(li);
    taskInput.value = "";
  });
});


