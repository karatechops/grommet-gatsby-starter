import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { Anchor as GrommetAnchor } from 'grommet';

export const Anchor = ({ label, href, to, ...rest }) => (
  <GrommetAnchor
    label={label}
    href={href || to}
    {...rest}
    onClick={e => {
      if (to) e.preventDefault();
      navigate(to);
    }}
  />
);

Anchor.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
};

export default Anchor;
