import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../components/page/page';

import Terminal from '../../components/terminal/terminal';

import MESSAGES from './constants/messages';

import './about.css';

export default function About() {
  const history = useHistory();

  return (
    <Page backgroundColor="F7B1AB" onBack={() => history.push('/')}>
      <div className="About__Terminal">
        <Terminal messages={MESSAGES} initialMessageId="intro" />
      </div>
    </Page>
  );
}
