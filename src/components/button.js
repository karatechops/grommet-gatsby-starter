import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { Button as GrommetButton } from 'grommet';

export const Button = ({ label, href, to, ...rest }) => (
  <GrommetButton
    label={label}
    href={href || to}
    {...rest}
    onClick={e => {
      if (to) e.preventDefault();
      navigate(to);
    }}
  />
);

Button.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
};

export default Button;
