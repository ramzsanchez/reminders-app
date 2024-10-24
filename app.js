// Select elements
const reminderInput = document.getElementById("reminder-input");
const addBtn = document.getElementById("add-btn");
const remindersList = document.getElementById("reminders-list");

// Event listeners
addBtn.addEventListener("click", addReminder);
reminderInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addReminder();
  }
});

// Functions
function addReminder() {
  const reminderText = reminderInput.value.trim();

  if (reminderText === "") {
    alert("Please enter a reminder");
    return;
  }

  // Create new reminder element
  const li = document.createElement("li");
  li.innerHTML = `
        ${reminderText}
        <button class="delete-btn">&times;</button>
    `;

  // Add delete functionality
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  // Append to the list
  remindersList.appendChild(li);

  // Clear input field
  reminderInput.value = "";
}
