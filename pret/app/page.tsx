'use client';

import { useState } from 'react';
import "./food_quiz_UI.css";

// The main Home component
export default function Home() {
  // Define state variables to keep track of the user's message and the response from the AI
  const [message, setMessage] = useState('');   // User's message
  const [response, setResponse] = useState(''); // AI's response

  // This function will handle when the user clicks the "Send" button
  const handleSendMessage = async () => {
    // For now, just log the message
    console.log('User message:', message);

    // Temporary response for now, we'll replace it with AI functionality later
    setResponse(`You said: ${message}`);
  };

  return (
    <div className="container">
      <h1>What type of a foodie are you?</h1>
      
      <div>
        {/* Input field where the user types their message */}
        <input 
          type="text" 
          /*add border outline*/
          className = "inputBox"
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Type your message..." 
        />
        
        {/* Button to send the message */}
        <button  
        className="button:hover, button"
        onClick={handleSendMessage}>Send</button>
      </div>

      {/* Display the response */}
      {response && (
        <div style={{ marginTop: '20px' }}>
          <strong>AI Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
