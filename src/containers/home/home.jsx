import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import avatar from '../../assets/avatar.png';

import './home.css';

export default function Home() {
  const [highlightedTab, setHighlightedTab] = useState(1);
  const [showHighlightedTab, setShowHighlightedTab] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setHighlightedTab((currentlyHighlightedTab) => {
        const unhighlightedTabs = [1, 2, 3, 4].filter(
          (tab) => tab !== currentlyHighlightedTab,
        );
        const newHighLightedTab =
          unhighlightedTabs[Math.floor(Math.random() * 3)];
        return newHighLightedTab;
      });
    }, 500);

    return () => clearInterval(id);
  }, []);

  const handleMouseEnter = () => {
    setShowHighlightedTab(false);
  };

  const handleMouseOut = () => {
    setShowHighlightedTab(true);
  };

  return (
    <div className="HomePage">
      <a
        className={classNames('HomePage__NavButton', {
          'HomePage__NavButton--highlighted':
            showHighlightedTab && highlightedTab === 1,
        })}
        type="button"
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        onBlur={handleMouseOut}
        href="/#/about"
      >
        About
      </a>
      <a
        className={classNames('HomePage__NavButton', {
          'HomePage__NavButton--highlighted':
            showHighlightedTab && highlightedTab === 2,
        })}
        type="button"
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        onBlur={handleMouseOut}
        href="/#/services"
      >
        Services
      </a>
      <a
        className={classNames('HomePage__NavButton', {
          'HomePage__NavButton--highlighted':
            showHighlightedTab && highlightedTab === 3,
        })}
        type="button"
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        onBlur={handleMouseOut}
        href="/#/portfolio"
      >
        Portfolio
      </a>
      <a
        className={classNames('HomePage__NavButton', {
          'HomePage__NavButton--highlighted':
            showHighlightedTab && highlightedTab === 4,
        })}
        type="button"
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        onBlur={handleMouseOut}
        href="/#/contact"
      >
        Contact
      </a>
      <div className="HomePage__Center">
        <img src={avatar} alt="" />
      </div>
    </div>
  );
}
