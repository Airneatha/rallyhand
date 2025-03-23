document.addEventListener('DOMContentLoaded', function() {
    const addMilestoneForm = document.getElementById('addMilestoneForm');
    const milestoneList = document.getElementById('milestoneList');

    // Load milestones from local storage if available
    let milestones = JSON.parse(localStorage.getItem('milestones')) || [];

    // Function to render milestones
    function renderMilestones() {
        milestoneList.innerHTML = ''; // Clear the list

        milestones.forEach((milestone, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${milestone.title}</strong><br>
                Description: ${milestone.description}<br>
                Due Date: ${milestone.dueDate}<br>
                Priority: ${milestone.priority}<br>
                <button class="delete-milestone" data-index="${index}">Delete</button>
            `;
            milestoneList.appendChild(listItem);
        });

        // Add event listeners for delete buttons
        document.querySelectorAll('.delete-milestone').forEach(button => {
            button.addEventListener('click', function() {
                const indexToDelete = parseInt(this.dataset.index);
                milestones.splice(indexToDelete, 1);
                localStorage.setItem('milestones', JSON.stringify(milestones));
                renderMilestones();
            });
        });
    }

    // Initial render
    renderMilestones();

    // Form submission handler
    addMilestoneForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('milestoneTitle').value;
        const description = document.getElementById('milestoneDescription').value;
        const dueDate = document.getElementById('milestoneDueDate').value;
        const priority = document.getElementById('milestonePriority').value;

        const newMilestone = {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority
        };

        milestones.push(newMilestone);
        localStorage.setItem('milestones', JSON.stringify(milestones));

        // Clear the form
        addMilestoneForm.reset();

        // Re-render the list
        renderMilestones();
    });
});