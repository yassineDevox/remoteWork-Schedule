const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const employees = ["Hamza", "Badr", "Ilyass", "Yassine", "Younes"];

function generateSchedule() {
  const shuffledDays = daysOfWeek.slice().sort(() => Math.random() - 0.5); // Shuffle days
  const schedule = {};

  employees.forEach((employee, index) => {
    schedule[employee] = shuffledDays[index];
  });

  displaySchedule(schedule);
}

function displaySchedule(schedule) {
  const employeeList = document.getElementById("employee-list");
  employeeList.innerHTML = ""; // Clear previous schedule

  for (const employee in schedule) {
    const card = document.createElement("div");
    card.classList.add("col-sm-4", "card");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    cardBody.innerHTML = `
       <h5 class="card-title">${employee}</h5>
       <p class="card-text">Remote Day: ${schedule[employee]}</p>
    `;

    card.appendChild(cardBody);
    employeeList.appendChild(card);
  }
}

// Event Listener
document
  .getElementById("generate-schedule")
  .addEventListener("click", generateSchedule);
