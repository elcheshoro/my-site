import React from 'react';

import ContentTitle from './content-title';
import Content from './content';
import ContentLine from './content-line';

export default () => (
  <div className="PortfolioPeaziContent">
    <Content>
      <ContentTitle>Peazi</ContentTitle>
      <ContentLine>
        As my first freelance project I helped a small team create an app to
        help pubs and restaurants automate table service with a web app.
      </ContentLine>
      <ContentLine>
        This app gained a surge in popularity during the corona pandemic.
      </ContentLine>
      <ContentLine>
        I was hired to bring expertise to the team - Advising them on technical
        direction and best practices, as well as working on tasks to get the app
        to market quicker.
      </ContentLine>
      <ContentLine>
        <a href="https://peazi.app/" target="_blank" rel="noreferrer">
          App
        </a>
      </ContentLine>
    </Content>
  </div>
);
