import React from 'react';
import PropTypes from 'prop-types';

import './content.css';

const Content = ({ children }) => (
  <div className="PortfolioContent">{children}</div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
