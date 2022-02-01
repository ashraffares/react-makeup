import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BrandLink = ({ classes }) => <Link to="/" className={`text-2xl font-krona ${classes}`}>BeautyPink</Link>;

BrandLink.propTypes = {
  classes: PropTypes.string,
};

BrandLink.defaultProps = {
  classes: '',
};

export default BrandLink;
