import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { OPTIONS_MESSAGE_PROPS } from '../constants/shared-props';
import { ARROW_DOWN, ARROW_UP } from '../../../constants/key-codes';

import './options-question.css';

export default function OptionsQuestion({
  message,
  onValueChange,
  onValueSubmit,
}) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  useEffect(() => {
    const selectedOption =
      message.options[selectedOptionIndex] || message.options[0];
    onValueChange(selectedOption.value);
    const onKeyEvent = (event) => {
      if (event.keyCode === ARROW_UP && selectedOptionIndex !== 0) {
        setSelectedOptionIndex(selectedOptionIndex - 1);
      }
      if (
        event.keyCode === ARROW_DOWN &&
        selectedOptionIndex !== message.options.length - 1
      ) {
        setSelectedOptionIndex(selectedOptionIndex + 1);
      }
    };
    document.addEventListener('keydown', onKeyEvent);

    return () => document.removeEventListener('keydown', onKeyEvent);
  }, [selectedOptionIndex, onValueChange, message]);

  useEffect(() => {
    setSelectedOptionIndex(0);
  }, [message]);

  const handleValueSubmit = (index) => {
    const selectedOption = message.options[index];
    onValueSubmit(selectedOption.value);
  };

  const renderOptions = () => {
    return message.options.map((option, index) => (
      <button
        key={option.value}
        className={classNames('TerminalOptionsQuestion__Option', {
          'TerminalOptionsQuestion__Option--selected':
            selectedOptionIndex === index,
        })}
        type="button"
        onClick={() => handleValueSubmit(index)}
      >
        {option.label}
      </button>
    ));
  };

  return (
    <div className="TerminalOptionsQuestion">
      <div className="TerminalOptionsQuestion__Label">{message.label}</div>
      <div className="TerminalOptionsQuestion__Options">{renderOptions()}</div>
    </div>
  );
}

OptionsQuestion.propTypes = {
  message: OPTIONS_MESSAGE_PROPS.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onValueSubmit: PropTypes.func.isRequired,
};
