document.addEventListener('DOMContentLoaded', function() {
    const updateAllButton = document.getElementById('update-all');
    const clearAllButton = document.getElementById('clear-all');

    // Function to update all input fields (for demonstration)
    function updateAll() {
        const inputFields = document.querySelectorAll('input[type="text"]');
        inputFields.forEach(input => {
            // In a real application, you would send this data to a server or store it
            // For now, we'll just log the values
            console.log(`Updated ${input.id}: ${input.value}`);
            // Add visual feedback (e.g., change background color)
            input.style.backgroundColor = '#e0f7fa';
            setTimeout(() => {
                input.style.backgroundColor = ''; // Reset background color
            }, 1000); // Reset after 1 second
        });
        alert('All fields updated (check console)');
    }

    // Function to clear all input fields
    function clearAll() {
        const inputFields = document.querySelectorAll('input[type="text"]');
        inputFields.forEach(input => {
            input.value = '';
        });
        alert('All fields cleared');
    }

    // Event listener for the "Update All" button
    updateAllButton.addEventListener('click', function() {
        updateAll();
    });

    // Event listener for the "Clear All" button
    clearAllButton.addEventListener('click', function() {
        clearAll();
    });
});