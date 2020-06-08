import React from 'react';
import { Heading, Paragraph } from 'grommet';

import Anchor from '../components/anchor';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Heading margin="none">Hi from the second page</Heading>
    <Paragraph margin="none">Welcome to page 2</Paragraph>
    <Anchor to="/">Go back to the homepage</Anchor>
  </Layout>
);

export default SecondPage;
