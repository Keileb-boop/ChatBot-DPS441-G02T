import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { createChatBotMessage } from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

// Configuración del chatbot
const config = {
  botName: "Asistente React",
  initialMessages: [createChatBotMessage("¡Hola! ¿En qué puedo ayudarte?")],
};

const ChatbotComponent = () => {
  return (
    <div className="chatbot-container">
      <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
    </div>
  );
};

export default ChatbotComponent;
