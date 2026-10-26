
const timetableData = {
  1: [
    { start: "09:00 AM", end: "10:00 AM", subject: "Mathematics for Computing", faculty: "Prof. Sharma", room: "Room 201", type: "LECTURE", color: "#7775e8" },
    { start: "10:00 AM", end: "11:00 AM", subject: "Data Structures", faculty: "Prof. Patel", room: "Lab 1", type: "PRACTICAL", color: "#32a889" },
    { start: "11:00 AM", end: "11:15 AM", break: "Short Break" },
    { start: "11:15 AM", end: "12:15 PM", subject: "Business Communication", faculty: "Prof. Mehta", room: "Room 201", type: "LECTURE", color: "#e9a04b" },
    { start: "12:15 PM", end: "01:15 PM", subject: "Database Management Systems", faculty: "Prof. Desai", room: "Room 201", type: "LECTURE", color: "#e47b91" },
    { start: "01:15 PM", end: "02:00 PM", break: "Lunch Break" },
    { start: "02:00 PM", end: "03:00 PM", subject: "Python Programming", faculty: "Prof. Shah", room: "Lab 2", type: "PRACTICAL", color: "#32a889" }
  ],

  2: [
    { start: "09:00 AM", end: "10:00 AM", subject: "Operating Systems", faculty: "Prof. Patel", room: "Room 202", type: "LECTURE", color: "#7775e8" },
    { start: "10:00 AM", end: "11:00 AM", subject: "Database Management Systems", faculty: "Prof. Desai", room: "Room 202", type: "LECTURE", color: "#e47b91" },
    { start: "11:00 AM", end: "11:15 AM", break: "Short Break" },
    { start: "11:15 AM", end: "12:15 PM", subject: "Statistics for Business", faculty: "Prof. Sharma", room: "Room 202", type: "LECTURE", color: "#e9a04b" },
    { start: "12:15 PM", end: "01:15 PM", subject: "Data Structures", faculty: "Prof. Patel", room: "Lab 1", type: "PRACTICAL", color: "#32a889" },
    { start: "01:15 PM", end: "02:00 PM", break: "Lunch Break" },
    { start: "02:00 PM", end: "03:00 PM", subject: "Soft Skills", faculty: "Prof. Mehta", room: "Room 202", type: "LECTURE", color: "#b28ae5" }
  ],

  3: [
    { start: "09:00 AM", end: "10:00 AM", subject: "Computer Networks", faculty: "Prof. Shah", room: "Room 203", type: "LECTURE", color: "#7775e8" },
    { start: "10:00 AM", end: "11:00 AM", subject: "Python Programming", faculty: "Prof. Shah", room: "Lab 2", type: "PRACTICAL", color: "#32a889" },
    { start: "11:00 AM", end: "11:15 AM", break: "Short Break" },
    { start: "11:15 AM", end: "12:15 PM", subject: "Business Economics", faculty: "Prof. Mehta", room: "Room 203", type: "LECTURE", color: "#e9a04b" },
    { start: "12:15 PM", end: "01:15 PM", subject: "Operating Systems", faculty: "Prof. Patel", room: "Room 203", type: "LECTURE", color: "#e47b91" },
    { start: "01:15 PM", end: "02:00 PM", break: "Lunch Break" },
    { start: "02:00 PM", end: "03:00 PM", subject: "Database Management Systems", faculty: "Prof. Desai", room: "Lab 1", type: "PRACTICAL", color: "#32a889" }
  ],

  4: [
    { start: "09:00 AM", end: "10:00 AM", subject: "Software Engineering", faculty: "Prof. Patel", room: "Room 204", type: "LECTURE", color: "#7775e8" },
    { start: "10:00 AM", end: "11:00 AM", subject: "Computer Networks", faculty: "Prof. Shah", room: "Room 204", type: "LECTURE", color: "#e47b91" },
    { start: "11:00 AM", end: "11:15 AM", break: "Short Break" },
    { start: "11:15 AM", end: "12:15 PM", subject: "Mathematics for Computing", faculty: "Prof. Sharma", room: "Room 204", type: "LECTURE", color: "#e9a04b" },
    { start: "12:15 PM", end: "01:15 PM", subject: "Business Communication", faculty: "Prof. Mehta", room: "Room 204", type: "LECTURE", color: "#b28ae5" },
    { start: "01:15 PM", end: "02:00 PM", break: "Lunch Break" },
    { start: "02:00 PM", end: "03:00 PM", subject: "Software Engineering", faculty: "Prof. Patel", room: "Lab 2", type: "PRACTICAL", color: "#32a889" }
  ],

  5: [
    { start: "09:00 AM", end: "10:00 AM", subject: "Data Structures", faculty: "Prof. Patel", room: "Room 205", type: "LECTURE", color: "#7775e8" },
    { start: "10:00 AM", end: "11:00 AM", subject: "Statistics for Business", faculty: "Prof. Sharma", room: "Room 205", type: "LECTURE", color: "#e9a04b" },
    { start: "11:00 AM", end: "11:15 AM", break: "Short Break" },
    { start: "11:15 AM", end: "12:15 PM", subject: "Computer Networks", faculty: "Prof. Shah", room: "Lab 1", type: "PRACTICAL", color: "#32a889" },
    { start: "12:15 PM", end: "01:15 PM", subject: "Business Economics", faculty: "Prof. Mehta", room: "Room 205", type: "LECTURE", color: "#e47b91" },
    { start: "01:15 PM", end: "02:00 PM", break: "Lunch Break" },
    { start: "02:00 PM", end: "03:00 PM", subject: "Project / Tutorial", faculty: "Class Coordinator", room: "Room 205", type: "TUTORIAL", color: "#b28ae5" }
  ],

  6: [
    { start: "09:00 AM", end: "10:00 AM", subject: "Python Programming", faculty: "Prof. Shah", room: "Lab 2", type: "PRACTICAL", color: "#32a889" },
    { start: "10:00 AM", end: "11:00 AM", subject: "Software Engineering", faculty: "Prof. Patel", room: "Room 206", type: "LECTURE", color: "#7775e8" },
    { start: "11:00 AM", end: "11:15 AM", break: "Short Break" },
    { start: "11:15 AM", end: "12:15 PM", subject: "Professional Skills", faculty: "Prof. Mehta", room: "Room 206", type: "LECTURE", color: "#e9a04b" }
  ]
};

// JavaScript weekday: Sunday = 0, Monday = 1, ..., Saturday = 6.
const calendarDays = document.getElementById("calendarDays");
const monthLabel = document.getElementById("monthLabel");
const selectedDateLabel = document.getElementById("selectedDate");
const daySubtitle = document.getElementById("daySubtitle");
const timetable = document.getElementById("timetable");
const classCount = document.getElementById("classCount");

const today = new Date();
today.setHours(0, 0, 0, 0);

let selectedDate = new Date(today);
let displayedMonth = new Date(today.getFullYear(), today.getMonth(), 1);

const monthFormatter = new Intl.DateTimeFormat("en-IN", {
  month: "long",
  year: "numeric"
});

const fullDateFormatter = new Intl.DateTimeFormat("en-IN", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});

const shortDateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric"
});

function sameDate(a, b) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

function hasClasses(date) {
  return Boolean(timetableData[date.getDay()]);
}

function renderCalendar() {
  calendarDays.innerHTML = "";
  monthLabel.textContent = monthFormatter.format(displayedMonth);

  const year = displayedMonth.getFullYear();
  const month = displayedMonth.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Show the previous month's final dates.
  const previousMonthDays = new Date(year, month, 0).getDate();

  for (let i = 0; i < firstWeekday; i++) {
    const date = new Date(year, month - 1, previousMonthDays - firstWeekday + i + 1);
    createDayButton(date, true);
  }

  // Show every day of the current month.
  for (let day = 1; day <= daysInMonth; day++) {
    createDayButton(new Date(year, month, day), false);
  }

  // Complete the final calendar row.
  const remaining = (7 - (calendarDays.children.length % 7)) % 7;

  for (let day = 1; day <= remaining; day++) {
    createDayButton(new Date(year, month + 1, day), true);
  }
}

function createDayButton(date, outsideMonth) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "calendar-day";
  button.textContent = date.getDate();
  button.setAttribute("aria-label", fullDateFormatter.format(date));

  if (outsideMonth) {
    button.classList.add("outside");
  }

  if (date.getDay() === 0) {
    button.classList.add("weekend");
  }

  if (sameDate(date, today)) {
    button.classList.add("today");
  }

  if (sameDate(date, selectedDate)) {
    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");
  } else {
    button.setAttribute("aria-pressed", "false");
  }

  if (hasClasses(date)) {
    button.classList.add("has-classes");
  }

  button.addEventListener("click", () => {
    selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);

    // Keep the clicked date visible, including dates from adjacent months.
    displayedMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );

    renderCalendar();
    renderTimetable();
  });

  calendarDays.appendChild(button);
}

function renderTimetable() {
  const day = selectedDate.getDay();
  const classes = timetableData[day] || [];

  selectedDateLabel.textContent = fullDateFormatter.format(selectedDate);
  daySubtitle.textContent = sameDate(selectedDate, today)
    ? "Your schedule for today"
    : "Schedule for " + shortDateFormatter.format(selectedDate);

  const numberOfClasses = classes.filter(item => !item.break).length;
  classCount.textContent = `${numberOfClasses} ${numberOfClasses === 1 ? "class" : "classes"}`;

  timetable.innerHTML = "";

  if (classes.length === 0) {
    timetable.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">☕</div>
        <h4>No classes scheduled</h4>
        <p>Enjoy your day off!<br>
        Select another date to see your classes.</p>
      </div>
    `;
    return;
  }

  classes.forEach(item => {
    if (item.break) {
      const breakCard = document.createElement("div");
      breakCard.className = "break-card";
      breakCard.textContent = `${item.start} – ${item.end}  ·  ${item.break}`;
      timetable.appendChild(breakCard);
      return;
    }

    const card = document.createElement("article");
    card.className = "class-card";

    const time = document.createElement("div");
    time.className = "class-time";
    time.textContent = `${item.start} – ${item.end}`;

    const colorBar = document.createElement("div");
    colorBar.className = "class-color";
    colorBar.style.setProperty("--class-color", item.color);

    const details = document.createElement("div");
    details.className = "class-details";

    const subject = document.createElement("h4");
    subject.textContent = item.subject;

    const type = document.createElement("span");
    type.className = "class-type";
    type.textContent = item.type;

    const faculty = document.createElement("p");
    faculty.textContent = `👤 ${item.faculty}`;

    const room = document.createElement("p");
    room.textContent = `📍 ${item.room}`;

    details.append(subject, type, faculty, room);
    card.append(time, colorBar, details);
    timetable.appendChild(card);
  });
}

document.getElementById("prevMonth").addEventListener("click", () => {
  displayedMonth.setMonth(displayedMonth.getMonth() - 1);
  renderCalendar();
});

document.getElementById("nextMonth").addEventListener("click", () => {
  displayedMonth.setMonth(displayedMonth.getMonth() + 1);
  renderCalendar();
});

document.getElementById("todayBtn").addEventListener("click", () => {
  selectedDate = new Date(today);
  displayedMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  renderCalendar();
  renderTimetable();
});

// Initial display.
renderCalendar();
renderTimetable();
