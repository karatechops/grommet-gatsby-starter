import PropTypes from 'prop-types';
import React from 'react';
import { Box, Heading } from 'grommet';
import Anchor from './anchor';

const Header = ({ siteTitle }) => (
  <Box as="header" background="brand">
    <Box
      pad={{ horizontal: 'large', vertical: 'medium' }}
      width="xlarge"
      alignSelf="center"
    >
      <Heading margin="none">
        <Anchor
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Anchor>
      </Heading>
    </Box>
  </Box>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
