import PropTypes from 'prop-types';

export const RESPONSE_DEFINITION_PROPS = PropTypes.shape({
  matchingValues: PropTypes.arrayOf(PropTypes.string),
  messageId: PropTypes.string.isRequired,
});

const baseMessage = {
  label: PropTypes.node.isRequired,
  breadcrumbs: PropTypes.string.isRequired,
  responses: PropTypes.arrayOf(RESPONSE_DEFINITION_PROPS).isRequired,
};

export const TEXT_MESSAGE_PROPS = PropTypes.shape({
  type: PropTypes.oneOf(['text']).isRequired,
  ...baseMessage,
});

export const YES_NO_MESSAGE_PROPS = PropTypes.shape({
  type: PropTypes.oneOf(['yes-no']).isRequired,
  ...baseMessage,
});

export const OPTIONS_MESSAGE_PROPS = PropTypes.shape({
  type: PropTypes.oneOf(['options']).isRequired,
  ...baseMessage,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
});

export const TERMINAL_MESSAGE_PROPS = PropTypes.oneOfType([
  TEXT_MESSAGE_PROPS,
  YES_NO_MESSAGE_PROPS,
  OPTIONS_MESSAGE_PROPS,
]);
