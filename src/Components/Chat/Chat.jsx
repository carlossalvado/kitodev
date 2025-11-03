import React, { useState, useRef, useEffect } from 'react';
import './Chat.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faMicrophone, faStop, faPlay } from '@fortawesome/free-solid-svg-icons';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Oi, sou o Kito Expert! Bora bater um papo que eu te ajudo com o que você precisa!', type: 'text', sender: 'bot' }
  ]);
  const [hasInitialMessage, setHasInitialMessage] = useState(true);
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const recordingIntervalRef = useRef(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [playingAudio, setPlayingAudio] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
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

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];
      setRecordingTime(0);

      recordingIntervalRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });

        // Adicionar mensagem do usuário (áudio enviado)
        const userAudioMessage = {
          id: Date.now(),
          text: '🎤 Áudio enviado',
          type: 'audio',
          audio: URL.createObjectURL(audioBlob),
          sender: 'user'
        };
        setMessages(prev => [...prev, userAudioMessage]);

        // Converter blob para base64 para enviar como JSON
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64Audio = reader.result.split(',')[1]; // Remove data:audio/wav;base64,

          try {
            const response = await fetch('https://isa.isadate.online/webhook/783bf1ed-386f-4861-81fe-25e911af70f2', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                audioData: base64Audio,
                filename: 'audio.wav',
                mimeType: 'audio/wav'
              }),
            });

            // O fluxo retorna áudio binário
            if (response.ok) {
              const audioBlob = await response.blob();
              const audioUrl = URL.createObjectURL(audioBlob);
              const botMessage = {
                id: Date.now() + 1,
                text: 'Resposta em áudio recebida',
                type: 'audio',
                audio: audioUrl,
                sender: 'bot'
              };
              setMessages(prev => [...prev, botMessage]);
            } else {
              // Se não for resposta binária, tentar texto
              try {
                const textResponse = await response.text();
                console.log('Resposta de áudio (texto):', textResponse);
                const botMessage = { id: Date.now() + 1, text: textResponse || 'Resposta recebida', type: 'text', sender: 'bot' };
                setMessages(prev => [...prev, botMessage]);
              } catch (textError) {
                console.error('Erro ao processar resposta de áudio:', textError);
                const errorMessage = { id: Date.now() + 1, text: 'Erro ao processar resposta de áudio.', type: 'text', sender: 'bot' };
                setMessages(prev => [...prev, errorMessage]);
              }
            }
          } catch (error) {
            console.error('Error sending audio:', error);
            const errorMessage = { id: Date.now() + 1, text: 'Desculpe, houve um erro ao processar seu áudio.', type: 'text', sender: 'bot' };
            setMessages(prev => [...prev, errorMessage]);
          }
        };

        reader.readAsDataURL(audioBlob);

        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
        recordingIntervalRef.current = null;
      }
      setRecordingTime(0);
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
        <button type="button" onClick={(e) => { e.preventDefault(); isRecording ? stopRecording() : startRecording(); }} title={isRecording ? 'Parar gravação' : 'Gravar áudio'} className={isRecording ? 'recording' : ''}>
          <FontAwesomeIcon icon={isRecording ? faStop : faMicrophone} />
          {isRecording && <span style={{position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', fontSize: '12px', color: '#dc3545', fontWeight: 'bold'}}>{recordingTime}s</span>}
        </button>
      </div>
    </div>
  );
};

export default Chat;
