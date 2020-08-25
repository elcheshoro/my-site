import React from 'react';

import ContentTitle from './content-title';
import Content from './content';
import ContentLine from './content-line';

export default () => (
  <div className="PortfolioMySiteContent">
    <Content>
      <ContentTitle>My Site</ContentTitle>
      <ContentLine>You&apos;re here.</ContentLine>
      <ContentLine>
        I wanted to make a fun, engaging and unique website to express my
        creavitity and showcase my skills.
      </ContentLine>
      <ContentLine>Let me know what you think!</ContentLine>
      <ContentLine>
        <a href="https://alexcheshire.me" target="_blank" rel="noreferrer">
          App
        </a>
      </ContentLine>
      <ContentLine>
        <a
          href="https://github.com/elcheshoro/my-site"
          target="_blank"
          rel="noreferrer"
        >
          Code
        </a>
      </ContentLine>
    </Content>
  </div>
);
