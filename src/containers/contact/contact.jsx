import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

import Page from '../../components/page/page';

import './contact.css';

export default function Contact() {
  const history = useHistory();
  const [selected, setSelected] = useState('email');

  return (
    <Page backgroundColor="F2D7EE" onBack={() => history.push('/')}>
      <div className="Contact">
        <div className="Contact__Content">
          <div className="Contact__LinkButtons">
            <button
              className={classNames('Contact__LinkButton', {
                'Contact__LinkButton--selected': selected === 'email',
              })}
              type="button"
              onClick={() => setSelected('email')}
            >
              Email
            </button>
            <button
              className={classNames('Contact__LinkButton', {
                'Contact__LinkButton--selected': selected === 'linkedIn',
              })}
              type="button"
              onClick={() => setSelected('linkedIn')}
            >
              LinkedIn
            </button>
          </div>
          <div className="Contact__Info">
            <a
              href="mailto:contact@alexcheshire.me"
              className={classNames('Contact__Link', {
                'Contact__Link--selected': selected === 'email',
              })}
            >
              contact@alexcheshire.me
            </a>
            <a
              className={classNames('Contact__Link', {
                'Contact__Link--selected': selected === 'linkedIn',
              })}
              href="https://www.linkedin.com/in/alexcheshire/"
            >
              www.linkedin.com/in/alexcheshire
            </a>
          </div>
        </div>
      </div>
    </Page>
  );
}
