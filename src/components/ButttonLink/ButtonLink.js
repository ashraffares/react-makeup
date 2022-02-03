import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonLink = ({ path, text, color }) => <Link to={path} className={`${color} px-6 py-2 rounded-full font-krona text-sm`}>{ text }</Link>;

ButtonLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ButtonLink;
