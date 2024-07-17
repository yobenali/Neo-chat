import React, { useState } from 'react';
import './Styles/Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="chat">
      <h2 className="chat-heading">Start a Conversation</h2>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">{message}</div>
        ))}
      </div>
      <input 
        type="text" 
        placeholder="messaging" 
        className="chat-input" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="chat-button" onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chat;
