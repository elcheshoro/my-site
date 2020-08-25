import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

import Page from '../../components/page/page';

import generateContent from './helpers/generateContent';

import './contact.css';

const randomCharacters = generateContent();
const emailIndex = Math.floor(Math.random() * 500);
const linkedInIndex = Math.floor(Math.random() * 500 + 500);

export default function Contact() {
  const history = useHistory();
  const [selected, setSelected] = useState(null);

  const renderContent = () => {
    return (
      <div>
        <span>{randomCharacters.substring(0, emailIndex)}</span>
        <a
          href="mailto:a.g.cheshire@email.com"
          className={classNames('Contact__Info', {
            'Contact__Info--selected': selected === 'email',
          })}
        >
          contact@alexcheshire.me
        </a>
        <span>{randomCharacters.substring(emailIndex, linkedInIndex)}</span>
        <a
          className={classNames('Contact__Info', {
            'Contact__Info--selected': selected === 'linkedIn',
          })}
          href="https://www.linkedin.com/in/alex-cheshire-6536641b2/"
        >
          https://www.linkedin.com/in/alex&#8209;cheshire&#8209;6536641b2/
        </a>
        <span>{randomCharacters.substring(linkedInIndex)}</span>
      </div>
    );
  };

  const handleButtonClick = (key) => {
    if (selected === key) {
      setSelected(null);
    } else {
      setSelected(key);
    }
  };

  return (
    <Page backgroundColor="F2D7EE" onBack={() => history.push('/')}>
      <div className="Contact">
        <div className="Contact__Content">
          <div className="Contact__LinkButtons">
            <button
              className="Contact__LinkButton"
              type="button"
              onClick={() => handleButtonClick('email')}
            >
              Email
            </button>
            <button
              className="Contact__LinkButton"
              type="button"
              onClick={() => handleButtonClick('linkedIn')}
            >
              LinkedIn
            </button>
          </div>
          <div className="Contact__WordSearch">{renderContent()}</div>
        </div>
      </div>
    </Page>
  );
}
