import React from 'react';
import PropTypes from 'prop-types';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './page.css';

export default function Page({ children, backgroundColor, onBack }) {
  return (
    <div className="Page" style={{ backgroundColor }}>
      <div className="Page__Header">
        <ArrowBackIcon
          style={{
            height: '50px',
            width: '50px',
          }}
          onClick={onBack}
        />
      </div>
      <div className="Page__Content">{children}</div>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  onBack: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};
