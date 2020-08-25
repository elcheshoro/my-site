import React from 'react';
import PropTypes from 'prop-types';

import { TERMINAL_MESSAGE_PROPS } from '../constants/shared-props';

import './past-message.css';

export default function PastMessage({ answer, message }) {
  const renderMessage = () => {
    switch (message.type) {
      case 'text':
      case 'yes-no':
      case 'options':
        return (
          <div className="TerminalCurrentMessage__TextElement">
            {message.label}
          </div>
        );
      default:
        throw new Error('Invalid message type');
    }
  };

  const renderAnswer = () => (
    <div className="TerminalCurrentMessage__Answer">{`$ ${message.breadcrumbs} > ${answer.text}`}</div>
  );

  return (
    <div className="TerminalPastMessage">
      {renderMessage()}
      {renderAnswer()}
    </div>
  );
}

PastMessage.propTypes = {
  message: TERMINAL_MESSAGE_PROPS.isRequired,
  answer: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }),
};

PastMessage.defaultProps = {
  answer: null,
};
