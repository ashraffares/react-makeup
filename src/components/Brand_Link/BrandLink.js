import React from 'react';
import PropTypes from 'prop-types';

const BrandLink = ({ classes }) => <a className={`text-2xl font-krona ${classes}`} href="/">BeautyPink</a>;

BrandLink.propTypes = {
  classes: PropTypes.string,
};

BrandLink.defaultProps = {
  classes: '',
};

export default BrandLink;
