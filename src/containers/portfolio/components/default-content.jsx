import React from 'react';

import ContentTitle from './content-title';
import Content from './content';

export default () => (
  <div className="PortfolioDefaultContent">
    <Content>
      <ContentTitle>Portfolio</ContentTitle>
      <div className="PortfolioDefaultContent__Description">
        Click a project to find out more!
      </div>
    </Content>
  </div>
);
