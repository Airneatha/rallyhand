document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM content loaded"); // Check if DOM content is loaded

    // Sample data (replace with your actual data source)
    let playerData = {
        // ... (Your playerData object) ...
    };

    // Load playerData from local storage if available.
    if (localStorage.getItem('playerData')) {
        const storedPlayerData = JSON.parse(localStorage.getItem('playerData'));
        Object.assign(playerData, storedPlayerData);
    }

    // Function to update the DOM with playerData
    function updateDOM() {
        // ... (Your updateDOM function) ...
    }

    // Call updateDOM initially to populate the page
    updateDOM();

    // Form submission handler (add this)
    const statsForm = document.getElementById('stats-form');
    console.log("Stats form:", statsForm); // Debugging: check if form is found

    if (statsForm) {
        statsForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // ... (Your form submission code) ...
            statsForm.reset();
        });
    }

    // Clear Inputs button handler
    const clearInputsButton = document.getElementById('clear-inputs-button');
    console.log("Clear button:", clearInputsButton); // Debugging: check if button is found

    if (clearInputsButton) {
        clearInputsButton.addEventListener('click', function() {
            console.log("Clear button clicked"); // Debugging: check if click is registered
            if(statsForm){
                statsForm.reset();
                console.log("Form reset called"); // Debugging: check if reset is called
            } else {
                console.log("statsForm not found");
            }

        });
    }
});