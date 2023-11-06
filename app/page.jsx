"use client";
import { useState, useEffect, useRef } from 'react';
import BubbleMessage from './components/bubble-message/BubbleMessage'
import styles from './page.module.scss'
import ToolMenu from './components/tool-menu/ToolMenu';

export default function Home() {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const screenRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const htmlmessages = document.querySelectorAll(`.${styles.bbmm}`);
    if (htmlmessages) {
      if (messages.length === 4) {
        htmlmessages[0]?.classList.add(styles.eliminateLast)
      }
    }
  }, [messages]);

  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === "Enter") {
        if (currentMessage.trim() === "") return;
        let temporalMessages = [
          ...messages,
          {
            text: currentMessage,
            last: false
          }
        ];
        const htmlmessages = document.querySelectorAll(`.${styles.bbmm}`);
        htmlmessages.forEach((el, index) => {
          el.classList.remove(styles.eliminateLast)
        });
        temporalMessages = temporalMessages.reverse().slice(0, 4);
        temporalMessages.reverse();
        setMessages(temporalMessages);
        setCurrentMessage("");
        window.scrollTo(0, document.body.scrollHeight);
        return;
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [currentMessage, messages, setMessages, setCurrentMessage]);

  return (
    <main className={styles.screen}
      style={{ height: '100vh' }}
      ref={screenRef}>
      <ToolMenu screenRef={screenRef} />

      <textarea
        ref={textareaRef}
        className={styles.messagesContainer}
        value={currentMessage}
        onInput={(e) => setCurrentMessage(e.target.value)}
        cols="30" rows="10"
      ></textarea>

      <div
        id="messages"
        className={styles.messages}>
        {messages.length > 0 && messages.map(({ text }, index) => (
          <BubbleMessage
            className={`${styles.bbmm} ${messages.length === 4 && index === 0 ? styles.eliminateLast : ''}`}
            text={text} />
        ))}
      </div>
      <div className={styles.message}>
        {currentMessage.trim().length > 0 && <BubbleMessage text={currentMessage} />}
      </div>
    </main >
  )
}
