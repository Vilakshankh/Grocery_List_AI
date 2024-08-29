document.getElementById('groceryForm').addEventListener('submit', function(event) {

    event.preventDefault(); // Prevent the form from submitting and the page refreshing
    const userInput = document.getElementById('userRequest').value;
    console.log('You entered: ' + userInput);
});