import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ text }) => (
  <h3 className="font-krona">
    { text }
  </h3>
);

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionTitle;
