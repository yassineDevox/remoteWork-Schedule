const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const employees = ["Badr", "Hamza", "Ilyass", "Yassine", "Youness"];

function getWeekDates() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const startDate = new Date(today.setDate(today.getDate() - dayOfWeek));

  const weekDates = [];
  for (let i = 0; i < 5; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    weekDates.push(currentDate);
  }
  return weekDates;
}

function generateSchedule(weekDates) {
  const shuffledDays = daysOfWeek.slice().sort(() => Math.random() - 0.5);
  const schedule = {};

  employees.forEach((employee, index) => {
    schedule[employee] = shuffledDays[index];
  });

  displaySchedule(schedule, weekDates);
}

function displaySchedule(schedule, weekDates) {
  const employeeList = document.getElementById("employee-list");
  employeeList.innerHTML = "";
  let i = 0;
  for (const employee in schedule) {
    const date = weekDates[i];
    const card = document.createElement("div");
    card.classList.add("col-sm-4", "card");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const dayClass = schedule[employee].toLowerCase();
    cardBody.classList.add(dayClass);

    cardBody.innerHTML = `
       <h5 class="card-title">${employee}</h5>
       <span class="card-text">Remote Day : ${schedule[employee]}</span>
       <span class='badge badge-dark' >${date.toLocaleDateString()}</span>
    `;

    card.appendChild(cardBody);
    employeeList.appendChild(card);
    i++;
  }
}

document
  .getElementById("generate-schedule")
  .addEventListener("click", () => generateSchedule(getWeekDates()));
