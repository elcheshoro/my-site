import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';

import './terminal-input.css';

export default function TerminalInput({ breadcrumbs, onSubmit }) {
  const textInput = useRef(null);
  const [currentInput, setCurrentInput] = useState('');

  const handleInputChange = (event) => {
    setCurrentInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSubmit(currentInput);
      setCurrentInput('');
    }
  };

  useEffect(() => {
    if (textInput != null && textInput.current != null) {
      textInput.current.focus();
    }
  }, [textInput]);

  const handleBlur = () => {
    if (textInput != null && textInput.current != null) {
      textInput.current.focus();
    }
  };

  return (
    <div className="TerminalInput">
      <div className="TerminalInput__Pointer">{`$ ${breadcrumbs} >`}</div>
      {!isMobile && (
        <div className="TerminalInput__InputWrapper">
          <input
            type="text"
            ref={textInput}
            onBlur={handleBlur}
            value={currentInput}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
      )}
    </div>
  );
}

TerminalInput.propTypes = {
  breadcrumbs: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
