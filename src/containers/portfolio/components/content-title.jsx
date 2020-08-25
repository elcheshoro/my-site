import React from 'react';
import PropTypes from 'prop-types';

import './content-title.css';

const ContentTitle = ({ children }) => (
  <div className="PortfolioContentTitle">{children}</div>
);

ContentTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentTitle;
