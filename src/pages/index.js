import React from 'react';
import { Box, Paragraph, Heading } from 'grommet';

import Anchor from '../components/anchor';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading margin="none">Hi people</Heading>
    <Paragraph margin="none">Welcome to your new Gatsby site.</Paragraph>
    <Paragraph margin="none">Now go build something great.</Paragraph>
    <Box width="medium">
      <Image />
    </Box>
    <Anchor to="/page-2/">Go to page 2</Anchor>
    <Anchor to="/using-typescript/">Go to "Using TypeScript"</Anchor>
  </Layout>
);

export default IndexPage;
