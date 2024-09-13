'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import "./food_quiz_UI.css";

// Define a message type to differentiate between user and AI messages
type Message = {
  sender: 'user' | 'ai';
  text: string;
};

// The main Home component
export default function Home() {
  // Define state variables to keep track of the user's message and the conversation
  const [message, setMessage] = useState(''); // Current input message
  const [messages, setMessages] = useState<Message[]>([]); // Conversation history

  // This function will handle when the user clicks the "Send" button
  const handleSendMessage = async () => {
    if (message.trim() === '') return; // Prevent sending empty messages

    // Add the user's message to the conversation
    setMessages(prevMessages => [...prevMessages, { sender: 'user', text: message }]);

    // Clear the input field
    setMessage('');

    // TODO: Integrate AI functionality here. For now, we'll simulate a response.
    const aiResponse = `You said: ${message}`;
    
    // Simulate AI response delay
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { sender: 'ai', text: aiResponse }]);
    }, 500);
  };

  // Handle pressing Enter key to send message
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="container">
      {/* Header Section: Input and Send Button */}
      <header className="input-section">
        <h1>What type of a foodie are you?</h1>
        <div className="input-container">
          <Input 
            type="text"
            placeholder="Type your message..." 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </header>

      {/* Main Content Section: Display Messages */}
      <main className="messages-section">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`message ${msg.sender === 'ai' ? 'ai' : 'user'}`}
          >
            <strong>{msg.sender === 'ai' ? 'AI' : 'You'}:</strong> {msg.text}
          </div>
        ))}
      </main>
    </div>
  );
}

