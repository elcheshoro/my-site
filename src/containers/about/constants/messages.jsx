import React from 'react';

import DevelopmentSkills from '../components/development-skills';
import DevOpsSkills from '../components/dev-ops-skills';
import ProjectManagementSkills from '../components/project-management-skills';
import ProgrammingHobby from '../components/programming-hobby';
import SportHobby from '../components/sport-hobby';
import MusicHobby from '../components/music-hobby';
import FreelanceExperience from '../components/freelance-experience';
import ConsultancyExperience from '../components/consultancy-experience';
import StartUpExperience from '../components/start-up-experience';

export default {
  intro: {
    type: 'yes-no',
    label:
      'Hello, my name is Alex Cheshire. I am a freelance software developer based in Manchester. Would you like to know more about me and the services that I offer? (Y/N)',
    breadcrumbs: '',
    responses: [
      {
        matchingValues: ['yes', 'y'],
        messageId: 'options',
      },
      {
        matchingValues: ['no', 'n'],
        messageId: 'thankYou',
      },
    ],
  },
  options: {
    type: 'options',
    label: 'What would you like to know about?',
    breadcrumbs: '/options',
    options: [
      {
        label: 'Skills',
        value: 'skills',
      },
      {
        label: 'Experience',
        value: 'experience',
      },
      {
        label: 'Hobbies',
        value: 'hobbies',
      },
    ],
    responses: [
      {
        messageId: 'skills',
        matchingValues: ['skills'],
      },
      {
        messageId: 'hobbies',
        matchingValues: ['hobbies'],
      },
      {
        messageId: 'experience',
        matchingValues: ['experience'],
      },
    ],
  },
  skills: {
    type: 'options',
    label: 'Which skill would you like to know about?',
    breadcrumbs: '/options/skills',
    options: [
      {
        label: 'Development',
        value: 'development',
      },
      {
        label: 'Dev Ops',
        value: 'devops',
      },
      {
        label: 'Project Management',
        value: 'projectmanagement',
      },
      {
        label: 'Back',
        value: 'back',
      },
    ],
    responses: [
      {
        messageId: 'options',
        matchingValues: ['back'],
      },
      {
        messageId: 'development',
        matchingValues: ['development'],
      },
      {
        messageId: 'devOps',
        matchingValues: ['devops'],
      },
      {
        messageId: 'projectManagment',
        matchingValues: ['projectmanagement'],
      },
    ],
  },
  development: {
    type: 'yes-no',
    label: <DevelopmentSkills />,
    breadcrumbs: '/options/skills/development',
    responses: [
      {
        matchingValues: ['yes', 'y'],
        messageId: 'skills',
      },
      {
        matchingValues: ['no', 'n'],
        messageId: 'options',
      },
    ],
  },
  devOps: {
    type: 'yes-no',
    label: <DevOpsSkills />,
    breadcrumbs: '/options/skills/devops',
    responses: [
      {
        matchingValues: ['yes', 'y'],
        messageId: 'skills',
      },
      {
        matchingValues: ['no', 'n'],
        messageId: 'options',
      },
    ],
  },
  projectManagment: {
    type: 'yes-no',
    label: <ProjectManagementSkills />,
    breadcrumbs: '/options/skills/projectmanagement',
    responses: [
      {
        matchingValues: ['yes', 'y'],
        messageId: 'skills',
      },
      {
        matchingValues: ['no', 'n'],
        messageId: 'options',
      },
    ],
  },
  thankYou: {
    type: 'text',
    label: 'Thank you for visting. Please get in touch for more information :)',
    breadcrumbs: '/',
    responses: [],
  },
  hobbies: {
    type: 'options',
    label: 'Which hobby would you like to know about?',
    breadcrumbs: '/options/hobbies',
    options: [
      {
        label: 'Music',
        value: 'music',
      },
      {
        label: 'Sport',
        value: 'sport',
      },
      {
        label: 'Programming',
        value: 'programming',
      },
      {
        label: 'Back',
        value: 'back',
      },
    ],
    responses: [
      {
        messageId: 'options',
        matchingValues: ['back'],
      },
      {
        messageId: 'music',
        matchingValues: ['music'],
      },
      {
        messageId: 'sport',
        matchingValues: ['sport'],
      },
      {
        messageId: 'programming',
        matchingValues: ['programming'],
      },
    ],
  },
  music: {
    type: 'yes-no',
    label: <MusicHobby />,
    breadcrumbs: '/options/hobbies/music',
    responses: [
      {
        matchingValues: ['yes', 'y'],
        messageId: 'hobbies',
      },
      {
        matchingValues: ['no', 'n'],
        messageId: 'options',
      },
    ],
  },
  sport: {
    type: 'yes-no',
    label: <SportHobby />,
    breadcrumbs: '/options/hobbies/sport',
    responses: [
      {
        matchingValues: ['yes', 'y'],
        messageId: 'hobbies',
      },
      {
        matchingValues: ['no', 'n'],
        messageId: 'options',
      },
    ],
  },
  programming: {
    type: 'yes-no',
    label: <ProgrammingHobby />,
    breadcrumbs: '/options/hobbies/programming',
    responses: [
      {
        matchingValues: ['yes', 'y'],
        messageId: 'hobbies',
      },
      {
        matchingValues: ['no', 'n'],
        messageId: 'options',
      },
    ],
  },
  experience: {
    type: 'options',
    label: 'Which experience would you like to know about?',
    breadcrumbs: '/options/experience',
    options: [
      {
        label: 'Consultancy',
        value: 'consultancy',
      },
      {
        label: 'Start ups',
        value: 'startups',
      },
      {
        label: 'Freelance',
        value: 'freelance',
      },
      {
        label: 'Back',
        value: 'back',
      },
    ],
    responses: [
      {
        messageId: 'options',
        matchingValues: ['back'],
      },
      {
        messageId: 'startUps',
        matchingValues: ['startups'],
      },
      {
        messageId: 'freelance',
        matchingValues: ['freelance'],
      },
      {
        messageId: 'consultancy',
        matchingValues: ['consultancy'],
      },
    ],
  },
  startUps: {
    type: 'yes-no',
    label: <StartUpExperience />,
    breadcrumbs: '/options/experience/startups',
    responses: [
      {
        matchingValues: ['yes', 'y'],
        messageId: 'experience',
      },
      {
        matchingValues: ['no', 'n'],
        messageId: 'options',
      },
    ],
  },
  consultancy: {
    type: 'yes-no',
    label: <ConsultancyExperience />,
    breadcrumbs: '/options/experience/consultancy',
    responses: [
      {
        matchingValues: ['yes', 'y'],
        messageId: 'experience',
      },
      {
        matchingValues: ['no', 'n'],
        messageId: 'options',
      },
    ],
  },
  freelance: {
    type: 'yes-no',
    label: <FreelanceExperience />,
    breadcrumbs: '/options/experience/freelance',
    responses: [
      {
        matchingValues: ['yes', 'y'],
        messageId: 'experience',
      },
      {
        matchingValues: ['no', 'n'],
        messageId: 'options',
      },
    ],
  },
};
