document.addEventListener('DOMContentLoaded', function() {
    // Calendar Logic
    const calendarGrid = document.getElementById('calendar-grid');
    const currentMonthSpan = document.getElementById('current-month');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    let currentDate = new Date();
    let events = [
        { name: "Massage", date: "2024-03-10", time: "10:00 AM" },
        { name: "Physio", date: "2024-03-15", time: "02:00 PM" }
    ];

    function generateCalendar(date) {
        calendarGrid.innerHTML = '';

        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const daysInMonth = lastDayOfMonth.getDate();
        const firstDayOfWeek = firstDayOfMonth.getDay();

        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        daysOfWeek.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.classList.add('day', 'header');
            dayHeader.textContent = day;
            calendarGrid.appendChild(dayHeader);
        });

        for (let i = 0; i < firstDayOfWeek; i++) {
            const emptyDay = document.createElement('div');
            calendarGrid.appendChild(emptyDay);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');
            dayDiv.textContent = day;

            const eventsForDay = getEventsForDate(date.getFullYear(), date.getMonth(), day);
            eventsForDay.forEach(event => {
                const eventDiv = document.createElement('div');
                eventDiv.classList.add('day', 'event');
                eventDiv.textContent = event.name;
                dayDiv.appendChild(eventDiv);
            });

            calendarGrid.appendChild(dayDiv);
        }

        currentMonthSpan.textContent = date.toLocaleString('default', { month: 'long', year: 'numeric' });
    }

    function getEventsForDate(year, month, day) {
        return events.filter(event => {
            const eventDate = new Date(event.date);
            return (
                eventDate.getFullYear() === year &&
                eventDate.getMonth() === month &&
                eventDate.getDate() === day
            );
        });
    }

    generateCalendar(currentDate);

    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate);
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate);
    });

    // Event List Logic
    const eventList = document.getElementById('event-list');

    function renderEventList(events) {
        eventList.innerHTML = '';
        events.forEach(event => {
            const listItem = document.createElement('li');
            listItem.textContent = `${event.name} - ${event.date} ${event.time}`;
            eventList.appendChild(listItem);
        });
    }

    renderEventList(events);

    // Event Form Logic
    const eventForm = document.getElementById('event-form');

    eventForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('event-name').value;
        const date = document.getElementById('event-date').value;
        const time = document.getElementById('event-time').value;

        const newEvent = { name, date, time };
        events.push(newEvent);

        renderEventList(events);
        generateCalendar(currentDate);
        eventForm.reset();
    });
});