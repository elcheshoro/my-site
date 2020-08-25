import React from 'react';

import ContentTitle from './content-title';
import Content from './content';
import ContentLine from './content-line';

import './other-content.css';

export default () => (
  <div className="PortfolioOtherContent">
    <Content>
      <ContentTitle>Other</ContentTitle>
      <ContentLine>
        I have worked on many other projects for various companies and sectors.
      </ContentLine>
      <ContentLine>
        Unfortunately many of these are behind paywalls and NDAs.
      </ContentLine>
      <ContentLine>
        They include ...
        <ul className="PortfolioOtherContent__List">
          <li>A taxi booking application</li>
          <li>A personal trainer booking mobile app</li>
          <li>An energy trading application</li>
        </ul>
      </ContentLine>
    </Content>
  </div>
);
