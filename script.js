const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const employees = ["Badr", "Hamza", "Ilyass", "Yassine", "Youness"];

function getWeekDates() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const startDate = new Date(today.setDate(today.getDate() - dayOfWeek));

  const weekDates = [];
  for (let i = 1; i <= 5; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    weekDates.push(currentDate);
  }
  return weekDates.map((date) => ({
    date,
    day: daysOfWeek[date.getDay() - 1],
  }));
}

function generateSchedule(weekDates) {
  const shuffledDays = daysOfWeek.slice().sort(() => Math.random() - 0.5);
  const schedule = {};

  employees.forEach((employee, index) => {
    schedule[employee] = {
      day: shuffledDays[index],
      date: weekDates.find((dd) => shuffledDays[index] === dd.day)?.date,
    };
  });

  displaySchedule(schedule, weekDates);
}

function displaySchedule(schedule, weekDates) {
  const employeeList = document.getElementById("employee-list");
  employeeList.innerHTML = "";
  for (const employee in schedule) {
    const card = document.createElement("div");
    card.classList.add("col-sm-4", "card");
    card.classList.add("m-2", "card");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const dayClass = schedule[employee].day.toLowerCase();
    cardBody.classList.add(dayClass);

    cardBody.innerHTML = `
       <h5 class="card-title">${employee}</h5>
       <span class="card-text">Remote Day : ${schedule[employee]?.day}</span>
       <span class='badge badge-dark' >${schedule[employee]?.date.toLocaleDateString()}</span>
    `;

    card.appendChild(cardBody);
    employeeList.appendChild(card);
  }
}

document
  .getElementById("generate-schedule")
  .addEventListener("click", () => generateSchedule(getWeekDates()));

document.getElementById("random-worker").addEventListener("click", () => {
  document.getElementById("worker-view").innerHTML =
    `<strong>${employees[Math.floor(Math.random() * 5)]}</string>`;
});
