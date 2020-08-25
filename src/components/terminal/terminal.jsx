import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import CurrentMessage from './components/current-message';
import PastMessage from './components/past-message';
import TerminalInput from './components/terminal-input';

import { TERMINAL_MESSAGE_PROPS } from './constants/shared-props';

import './terminal.css';

export default function Terminal({ messages, initialMessageId }) {
  const [currentMessage, setCurrentMessage] = useState(
    messages[initialMessageId],
  );
  const [pastMessages, setPastMessages] = useState([]);
  const [messageValue, setMessageValue] = useState('');

  const terminalEndRef = useRef(null);

  const renderPastMessages = () =>
    pastMessages.map(({ message, answer, time }) => (
      <div key={time} className="Terminal__PastMessage">
        <PastMessage message={message} answer={answer} />
      </div>
    ));

  const handleMessageValueChange = (value) => {
    setMessageValue(value);
  };

  const scrollToBottom = () => {
    terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (inputValue, nextMessage) => {
    setPastMessages([
      ...pastMessages,
      {
        message: currentMessage,
        answer: {
          text: inputValue,
        },
        time: new Date().getTime(),
      },
    ]);
    setCurrentMessage(nextMessage);
    setImmediate(() => {
      scrollToBottom();
    });
  };

  const handleInput = (inputValue) => {
    const value = inputValue || messageValue;
    const response = currentMessage.responses.find(({ matchingValues }) => {
      if (!matchingValues) return true;
      return matchingValues.includes(
        value.toLowerCase().replace(/[^0-9a-z]/gi, ''),
      );
    });

    if (response) {
      setMessageValue('');
      const nextMessage = messages[response.messageId];
      if (nextMessage) {
        addMessage(value, nextMessage);
      } else {
        addMessage(value, {
          ...currentMessage,
          label: "Sorry, I didn't get that please try again",
        });
      }
    } else {
      addMessage(value, {
        ...currentMessage,
        label: "Sorry, I didn't get that please try again",
      });
    }
  };

  return (
    <div className="Terminal">
      <div className="Terminal__PastMessages">{renderPastMessages()}</div>
      <CurrentMessage
        message={currentMessage}
        onValueChange={handleMessageValueChange}
        onValueSubmit={handleInput}
      />
      {currentMessage.responses.length !== 0 && (
        <TerminalInput
          onSubmit={handleInput}
          breadcrumbs={currentMessage.breadcrumbs}
        />
      )}
      <div ref={terminalEndRef} />
    </div>
  );
}

Terminal.propTypes = {
  initialMessageId: PropTypes.string.isRequired,
  messages: PropTypes.objectOf(TERMINAL_MESSAGE_PROPS).isRequired,
};
