const calendarBody = document.getElementById('calendar-body');
const monthYear = document.getElementById('month-year');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentDate = new Date();

function renderCalendar(date) {
    calendarBody.innerHTML = '';
    const year = date.getFullYear();
    const month = date.getMonth();
    monthYear.textContent = date.toLocaleString('default', { month: 'long', year: 'numeric' });

    // First day of the month (0=Sunday, 1=Monday...)
    const firstDay = new Date(year, month, 1).getDay();
    // Total days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let dateCount = 1;
    for (let i = 0; i < 6; i++) { // weeks
        let row = document.createElement('tr');
        for (let j = 0; j < 7; j++) { // days
            let cell = document.createElement('td');
            if (i === 0 && j < firstDay) {
                cell.textContent = '';
            } else if (dateCount > daysInMonth) {
                cell.textContent = '';
            } else {
                cell.textContent = dateCount;
                // Example event highlight
                if ([5, 8, 10].includes(dateCount)) { 
                    cell.classList.add('event');
                    cell.title = 'Placement Event';
                }
                dateCount++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
        if (dateCount > daysInMonth) break;
    }
}

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

document.addEventListener('DOMContentLoaded', () => {
    renderCalendar(currentDate);
});
