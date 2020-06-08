/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Grommet, Text } from 'grommet';

import Anchor from './anchor';
import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Grommet>
      <Box height={{ min: '100vh' }} width={{ min: '100%' }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Box width="xlarge" alignSelf="center" pad="large">
          <Box as="main">{children}</Box>
          <Box as="footer" direction="row">
            <Text>
              © {new Date().getFullYear()}, Built with{' '}
              <Anchor href="https://www.gatsbyjs.org">Gatsby</Anchor> +{' '}
              <Anchor href="https://grommet.io">Grommet</Anchor>
            </Text>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
