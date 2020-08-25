import React from 'react';
import PropTypes from 'prop-types';

import './content-line.css';

const ContentLine = ({ children }) => (
  <div className="PortfolioContentLine">{children}</div>
);

ContentLine.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentLine;
