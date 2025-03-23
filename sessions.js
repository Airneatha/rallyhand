document.addEventListener('DOMContentLoaded', function() {
    // Initial sessions
    let sessions = JSON.parse(localStorage.getItem('sessions')) || [
        { date: "2024-03-10", time: "10:00 AM", duration: "1 hour", venue: "Tennis Court A" },
        // ... other sessions ...
    ];

    const sessionItems = document.getElementById('session-items');
    const sessionForm = document.getElementById('session-form');

    // Function to render sessions
    function renderSessions() {
        sessionItems.innerHTML = ''; // Clear existing list
        sessions.forEach(session => {
            const listItem = document.createElement('li');
            listItem.classList.add('session-item');
            listItem.innerHTML = `
                <div class="session-details">
                    <p><strong>Date:</strong> ${session.date}</p>
                    <p><strong>Time:</strong> ${session.time}</p>
                    <p><strong>Duration:</strong> ${session.duration}</p>
                    <p><strong>Venue:</strong> ${session.venue}</p>
                </div>
                <div class="session-actions">
                    <button class="complete">Complete</button>
                    <button class="delete">Delete</button>
                </div>
            `;
            sessionItems.appendChild(listItem);
        });
    }

    renderSessions(); // Initial render

    sessionForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const duration = document.getElementById('duration').value;
        const venue = document.getElementById('venue').value;

        const session = { date, time, duration, venue };
        sessions.push(session);

        localStorage.setItem('sessions', JSON.stringify(sessions));

        renderSessions(); // Re-render sessions

        sessionForm.reset();
    });
});

