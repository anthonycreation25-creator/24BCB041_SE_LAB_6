
# CSBS Class Timetable

A simple weekly repeating timetable website for
Computer Science and Business Systems students.

## Requirements
- Visual Studio Code
- Any modern web browser

## How to run

1. Create a folder named `CSBS-Timetable`.
2. Create these files inside it:
   - index.html
   - style.css
   - script.js
   - README.md
3. Paste the corresponding code into each file.
4. Open index.html in your browser.

Optional: Install the Live Server extension in VS Code.
Right-click index.html and select "Open with Live Server".

## How to change the timetable

Open script.js and edit the timetableData object.

Weekday numbers:
- 0 = Sunday
- 1 = Monday
- 2 = Tuesday
- 3 = Wednesday
- 4 = Thursday
- 5 = Friday
- 6 = Saturday

Each class has a start time, end time, subject,
faculty, room, type, and display color.

Use an array of class objects for each weekday.
The timetable repeats automatically every week.

Note: The included timetable is sample data.
Replace subjects, timings, faculty names, and rooms
with your actual college timetable.
