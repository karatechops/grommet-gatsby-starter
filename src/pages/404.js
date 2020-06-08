import React from 'react';
import { Heading, Paragraph } from 'grommet';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading>NOT FOUND</Heading>
    <Paragraph margin="none">
      You just hit a route that doesn&#39;t exist... the sadness.
    </Paragraph>
  </Layout>
);

export default NotFoundPage;
