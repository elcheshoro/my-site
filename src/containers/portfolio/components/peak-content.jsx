import React from 'react';

import ContentTitle from './content-title';
import Content from './content';
import ContentLine from './content-line';

export default () => (
  <div className="PortfolioPeakContent">
    <Content>
      <ContentTitle>AI Data Analytics</ContentTitle>
      <ContentLine>
        I worked for a Manchester based startup who specialise in using AI and
        statistics to process sales data for retail companies.
      </ContentLine>
      <ContentLine>
        I spent most of my time creating dashboards with charts and other
        visualisations to display the result of the analytics to end users.
      </ContentLine>
      <ContentLine>
        I also used AWS to automate alot of the analytics processes and created
        an application which automatically uploaded relevant data from customer
        databases to our platform.
      </ContentLine>
    </Content>
  </div>
);
