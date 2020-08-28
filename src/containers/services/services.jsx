import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import Page from '../../components/page/page';

import './services.css';

export default function Services() {
  const [openSection, setOpenSection] = useState(null);
  const history = useHistory();

  const handleToggle = (sectionId) => {
    if (openSection === sectionId) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionId);
    }
  };

  return (
    <Page backgroundColor="ACBEA3" onBack={() => history.push('/')}>
      <div className="Services">
        <div
          className="Services__Section"
          role="button"
          tabIndex="0"
          onClick={() => handleToggle('development')}
          onKeyPress={() => handleToggle('development')}
        >
          <div
            className={classNames('Services__SectionTitle', {
              'Services__SectionTitle--open': openSection === 'development',
            })}
          >
            <div>Development</div>
            <KeyboardArrowRightIcon />
          </div>
          <div
            className={classNames('Services__SectionContent', {
              'Services__SectionContent--open': openSection === 'development',
            })}
          >
            <div className="Services__SectionText">
              I can work as a developer alongside your team to reduce the time
              it takes to get the product fully functional and to market.
            </div>
            <div className="Services__SectionText">
              My numerous years experience in making applications means that I
              can get tasks done efficiently and to a high standard.
            </div>
          </div>
        </div>
        <div
          className="Services__Section"
          role="button"
          tabIndex="0"
          onClick={() => handleToggle('consultancy')}
          onKeyPress={() => handleToggle('consultancy')}
        >
          <div
            className={classNames('Services__SectionTitle', {
              'Services__SectionTitle--open': openSection === 'consultancy',
            })}
          >
            <div>Consultancy</div>
            <KeyboardArrowRightIcon />
          </div>
          <div
            className={classNames('Services__SectionContent', {
              'Services__SectionContent--open': openSection === 'consultancy',
            })}
          >
            <div className="Services__SectionText">
              I offer guidance on startup project strategy and technical
              direction to optimise chances of success.
            </div>
            <div className="Services__SectionText">
              I have worked in numerous startups and have seen what works and
              what doesn&apos;t.
            </div>
            <div className="Services__SectionText">
              I can advise on both technical decisions and recommendations on
              efficient management of a development team and working practices.
            </div>
          </div>
        </div>
        <div
          className="Services__Section"
          role="button"
          tabIndex="0"
          onClick={() => handleToggle('mentoring')}
          onKeyPress={() => handleToggle('mentoring')}
        >
          <div
            className={classNames('Services__SectionTitle', {
              'Services__SectionTitle--open': openSection === 'mentoring',
            })}
          >
            <div>Mentoring</div>
            <KeyboardArrowRightIcon />
          </div>
          <div
            className={classNames('Services__SectionContent', {
              'Services__SectionContent--open': openSection === 'mentoring',
            })}
          >
            <div className="Services__SectionText">
              I am available for mentoring in both personal or professional
              settings.
            </div>
            <div className="Services__SectionText">
              Whether you are looking to learn a new skill or upskill your team,
              please get in touch to discuss prices and availability.
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
