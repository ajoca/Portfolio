import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaUser, FaPaperPlane, FaTimes } from 'react-icons/fa';
import OpenAI from 'openai'; 

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  
  const openai = new OpenAI({
    apiKey: "tu_api_key",
    dangerouslyAllowBrowser: true 
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');

    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: input }],
        model: 'gpt-3.5-turbo', 
      });
      const botMessage = { sender: 'bot', text: completion.choices[0].message.content };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error al comunicarse con OpenAI:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: 'Lo siento, no pude conectar con la IA. ¿Será que la clave no era tan mágica?' },
      ]);
    }
  };

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1.5 }}
      >
        {isOpen ? <FaTimes className="w-6 h-6" /> : <FaRobot className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-xl flex flex-col z-40 border border-gray-200"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <h3 className="font-bold text-lg">AJOCA-Bot</h3>
              <FaRobot className="w-5 h-5" />
            </div>
            <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
              {messages.length === 0 && (
                <div className="text-center text-gray-500 mt-8">
                  <FaRobot className="w-10 h-10 mx-auto mb-2 text-blue-400" />
                  <p>¡Hola! Pregúntame sobre Alan Canto o sobre IA.</p>
                </div>
              )}
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`flex items-start mb-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.sender === 'bot' && (
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2">
                      <FaRobot className="w-4 h-4" />
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-lg max-w-[75%] ${
                      msg.sender === 'user'
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === 'user' && (
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center ml-2">
                      <FaUser className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe un mensaje..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <motion.button
                type="submit"
                className="ml-2 bg-blue-500 text-white p-3 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;