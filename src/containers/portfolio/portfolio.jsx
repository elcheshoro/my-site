import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';

import Chart from '../../icons/chart';
import Piano from '../../icons/piano';
import Pint from '../../icons/pint';
import Smile from '../../icons/smile';
import Ellipsis from '../../icons/ellipsis';
import Page from '../../components/page/page';
import DefaultContent from './components/default-content';
import PianoContent from './components/piano-content';
import PeaziContent from './components/peazi-content';
import MySiteContent from './components/my-site-content';
import PeakContent from './components/peak-content';
import OtherContent from './components/other-content';

import './portfolio.css';

export default function Portfolio() {
  const history = useHistory();
  const [currentContent, setCurrentContent] = useState(null);
  const contentRef = useRef();
  const contentWrapperRef = useRef();

  useEffect(() => {
    if (contentRef && contentWrapperRef) {
      const content = contentRef.current;
      const wrapper = contentWrapperRef.current;

      const totalScroll = content.clientHeight - wrapper.clientHeight + 10;

      if (totalScroll < 0) return () => null;

      let scrollPosition = 0;
      const interval = setInterval(() => {
        scrollPosition += 1;
        wrapper.scrollTo(0, scrollPosition);
        if (totalScroll === scrollPosition) {
          clearInterval(interval);
        }
      }, 70);
      const stopAutoScroll = () => clearInterval(interval);
      wrapper.addEventListener('mousewheel', stopAutoScroll);
      wrapper.addEventListener('touchmove', stopAutoScroll);

      return () => {
        stopAutoScroll();
        wrapper.removeEventListener('mousewheel', stopAutoScroll);
        wrapper.removeEventListener('touchmove', stopAutoScroll);
      };
    }

    return () => null;
  }, [currentContent, contentRef, contentWrapperRef]);

  const renderContent = () => {
    switch (currentContent) {
      case 'piano':
        return <PianoContent />;
      case 'peazi':
        return <PeaziContent />;
      case 'mySite':
        return <MySiteContent />;
      case 'peak':
        return <PeakContent />;
      case 'other':
        return <OtherContent />;
      default:
        return <DefaultContent />;
    }
  };

  return (
    <Page backgroundColor="60B2E5" onBack={() => history.push('/')}>
      <Helmet>
        <title>Alex Cheshire - Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Alex Cheshire freelance software engineer and website developer."
        />
      </Helmet>
      <div className="Portfolio">
        <div className="Portfolio__IconButtons">
          <button
            className="Portfolio__IconButton"
            type="button"
            onClick={() => setCurrentContent('piano')}
          >
            <Piano />
          </button>
          <button
            className="Portfolio__IconButton"
            type="button"
            onClick={() => setCurrentContent('peazi')}
          >
            <Pint />
          </button>
          <button
            className="Portfolio__IconButton"
            type="button"
            onClick={() => setCurrentContent('mySite')}
          >
            <Smile />
          </button>
          <button
            className="Portfolio__IconButton"
            type="button"
            onClick={() => setCurrentContent('peak')}
          >
            <Chart />
          </button>
          <button
            className="Portfolio__IconButton"
            type="button"
            onClick={() => setCurrentContent('other')}
          >
            <Ellipsis />
          </button>
        </div>
        <div className="Portfolio__Content">
          <div className="Portfolio__ContentInner" ref={contentWrapperRef}>
            <div ref={contentRef}>{renderContent()}</div>
          </div>
        </div>
      </div>
    </Page>
  );
}
