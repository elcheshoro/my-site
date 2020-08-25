import React from 'react';

import ContentTitle from './content-title';
import Content from './content';
import ContentLine from './content-line';

export default () => (
  <div className="PortfolioPianoContent">
    <Content>
      <ContentTitle>Piano app</ContentTitle>
      <ContentLine>
        As part of an interview process I had to complete a hackathon type
        challenge and create a piano web application.
      </ContentLine>
      <ContentLine>It was a fun project and only took a few hours.</ContentLine>
      <ContentLine>Have a go and record a song!</ContentLine>
      <ContentLine>
        <a
          href="http://react-piano.s3-website.eu-west-2.amazonaws.com/"
          target="_blank"
          rel="noreferrer"
        >
          App
        </a>
      </ContentLine>
      <ContentLine>
        <a
          href="https://github.com/elcheshoro/react-piano"
          target="_blank"
          rel="noreferrer"
        >
          Code
        </a>
      </ContentLine>
    </Content>
  </div>
);
