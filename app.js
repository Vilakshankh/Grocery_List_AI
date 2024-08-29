document.getElementById('groceryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and the page refreshing


    try {
        const userInput = document.getElementById('userRequest').value;
        console.log('generating meal plan for: ' + userInput);

        setTimeout(() => {
            const mealPlan = "Meal Plan for " + userInput + "blahhhhh";
            console.log(mealPlan);
        }, 2000);
    } catch (error) {
        alert('Something went wrong: ' + error.message);
    }

});