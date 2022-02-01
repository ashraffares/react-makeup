import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonLink = ({ path, text }) => <Link to={path} className="bg-yellow px-6 py-2 rounded-full font-krona text-sm">{ text }</Link>;

ButtonLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonLink;
