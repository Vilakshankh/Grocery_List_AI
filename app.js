require('dotenv').config();

const apiKey = process.env.API_KEY;
document.getElementById('groceryForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting and the page refreshing


    try {
        const userInput = document.getElementById('userRequest').value;
        console.log('generating meal plan for: ' + userInput);

        

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ${apiKey}'
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a helpful assistant.'
                    },
                    {
                        role: 'user',
                        content: 'What is the best meal plan and required groceries for ' + userInput + '?'
                    }
                ],
                max_tokens: 150 // Adjust the token limit as needed
            })
        });
        
        const data = await response.json();
        console.log('GPT Response: ' + data.choices[0].message.content);

    } catch (error) {
        alert('Something went wrong: ' + error.message);
    }

});

//sk-n7fBNmKFdcSwDVqQaUquTFVlkXGbBqaLktx4YP_mpMT3BlbkFJwurr8JAAqGfjAFzJ8IhQ-ZOGu0zq-y0sIabhUrZQcA