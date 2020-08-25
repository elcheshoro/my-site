import React from 'react';
import PropTypes from 'prop-types';

import YesNoQuestion from './yes-no-question';
import OptionsQuestion from './options-question';

import { TERMINAL_MESSAGE_PROPS } from '../constants/shared-props';

export default function CurrentMessage({
  message,
  onValueChange,
  onValueSubmit,
}) {
  const renderMessage = () => {
    switch (message.type) {
      case 'text':
        return (
          <div className="TerminalCurrentMessage__TextElement">
            {message.label}
          </div>
        );
      case 'yes-no':
        return (
          <YesNoQuestion
            message={message}
            onValueChange={onValueChange}
            onValueSubmit={onValueSubmit}
          />
        );
      case 'options':
        return (
          <OptionsQuestion
            message={message}
            onValueChange={onValueChange}
            onValueSubmit={onValueSubmit}
          />
        );
      default:
        throw new Error('Invalid message type');
    }
  };

  return <div className="TerminalCurrentMessage">{renderMessage()}</div>;
}

CurrentMessage.propTypes = {
  message: TERMINAL_MESSAGE_PROPS.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onValueSubmit: PropTypes.func.isRequired,
};
