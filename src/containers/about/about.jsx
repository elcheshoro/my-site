import React from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Page from '../../components/page/page';

import Terminal from '../../components/terminal/terminal';

import MESSAGES from './constants/messages';

import './about.css';

export default function About() {
  const history = useHistory();

  return (
    <Page backgroundColor="F7B1AB" onBack={() => history.push('/')}>
      <Helmet>
        <title>Alex Cheshire - About Me</title>
        <meta
          name="description"
          content="Find out more about Alex Cheshire freelance software engineer and website developer."
        />
      </Helmet>
      <div className="About__Terminal">
        <Terminal messages={MESSAGES} initialMessageId="intro" />
      </div>
    </Page>
  );
}
