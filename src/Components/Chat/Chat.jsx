import React, { useState, useRef, useEffect } from 'react';
import './Chat.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faStop, faPlay } from '@fortawesome/free-solid-svg-icons';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Oi, sou o Kito Expert! Bora bater um papo que eu te ajudo com o que você precisa!', type: 'text', sender: 'bot' }
  ]);
  const [hasInitialMessage, setHasInitialMessage] = useState(true);
  const [input, setInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [playingAudio, setPlayingAudio] = useState(null);
  const messagesEndRef = useRef(null);

  // Removed scroll functionality to prevent page scrolling issues

  const sendMessage = async (message, type = 'text') => {
    const newMessage = { id: Date.now(), text: message, type, sender: 'user' };
    setMessages(prev => hasInitialMessage ? [newMessage] : [...prev, newMessage]);
    setHasInitialMessage(false);

    try {
      // Preparar histórico da conversa
      const history = messages.filter(msg => msg.sender === 'user' || msg.sender === 'bot').slice(-10); // últimos 10 mensagens

      const response = await fetch('https://isa.isadate.online/webhook/c97f98a1-75ea-49f1-a6e9-ef7715fa3caa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          type: type,
          history: history
        }),
      });

      const data = await response.json();
      console.log('Resposta do n8n:', data); // Debug

      // O n8n retorna um array, então pegamos o primeiro item
      const responseData = Array.isArray(data) ? data[0] : data;
      console.log('Dados da resposta:', responseData);
      const botMessage = {
        id: Date.now() + 1,
        text: responseData.output || responseData.response || responseData.text || JSON.stringify(responseData),
        type: 'text',
        sender: 'bot'
      };
      console.log('Mensagem do bot:', botMessage);
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { id: Date.now() + 1, text: 'Desculpe, houve um erro ao processar sua mensagem.', type: 'text', sender: 'bot' };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const handleSendText = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendText();
    }
  };


  return (
    <div className="chat-container">
      <div className="chat-header">
        <h4>Eu Kito Expert! <span style={{fontSize: '24px'}}>👀</span></h4>
      </div>
      <div className="chat-messages">
        {messages.map(msg => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            <div className="message-content">
              {msg.type === 'text' ? (
                msg.text
              ) : msg.type === 'audio' && msg.audio ? (
                <div className="audio-message" onClick={() => {
                  const audio = document.querySelector(`audio[data-id="${msg.id}"]`);
                  if (audio) {
                    if (audio.paused) {
                      // Pausar outros áudios
                      document.querySelectorAll('audio').forEach(a => {
                        if (a !== audio) a.pause();
                      });
                      setPlayingAudio(msg.id);
                      audio.play();
                    } else {
                      setPlayingAudio(null);
                      audio.pause();
                    }
                  }
                }}>
                  <FontAwesomeIcon icon={playingAudio === msg.id ? faStop : faPlay} className="play-icon" />
                  <span>Áudio</span>
                  <audio
                    data-id={msg.id}
                    src={msg.audio}
                    onEnded={() => setPlayingAudio(null)}
                    onError={(e) => console.error('Erro no áudio:', e)}
                    style={{display: 'none'}}
                  />
                </div>
              ) : (
                'Conteúdo não disponível'
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua mensagem..."
        />
        <button type="button" onClick={(e) => { e.preventDefault(); handleSendText(); }} title="Enviar mensagem">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
