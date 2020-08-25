import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { YES_NO_MESSAGE_PROPS } from '../constants/shared-props';
import { ARROW_LEFT, ARROW_RIGHT } from '../../../constants/key-codes';

import './yes-no-question.css';

export default function YesNoQuestion({
  message,
  onValueChange,
  onValueSubmit,
}) {
  const [selectedValue, setSelectedValue] = useState('yes');

  useEffect(() => {
    onValueChange(selectedValue);
    const onKeyEvent = (event) => {
      if (event.keyCode === ARROW_LEFT && selectedValue !== 'yes') {
        setSelectedValue('yes');
      }
      if (event.keyCode === ARROW_RIGHT && selectedValue !== 'no') {
        setSelectedValue('no');
      }
    };
    document.addEventListener('keydown', onKeyEvent);

    return () => document.removeEventListener('keydown', onKeyEvent);
  }, [selectedValue, onValueChange]);

  return (
    <div className="TerminalYesNoQuestion">
      <div className="TerminalYesNoQuestion__Label">{message.label}</div>
      <div className="TerminalYesNoQuestion__Actions">
        <button
          className={classNames('TerminalYesNoQuestion__YesButton', {
            'TerminalYesNoQuestion__YesButton--selected':
              selectedValue === 'yes',
          })}
          type="button"
          onClick={() => onValueSubmit('yes')}
        >
          Yes
        </button>
        <button
          className={classNames('TerminalYesNoQuestion__NoButton', {
            'TerminalYesNoQuestion__NoButton--selected': selectedValue === 'no',
          })}
          type="button"
          onClick={() => onValueSubmit('no')}
        >
          No
        </button>
      </div>
    </div>
  );
}

YesNoQuestion.propTypes = {
  message: YES_NO_MESSAGE_PROPS.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onValueSubmit: PropTypes.func.isRequired,
};
