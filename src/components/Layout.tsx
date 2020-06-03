import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

const Layout = styled.div`
  align-items: center;
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
`;

type Props = {
  children: JSX.Element,
};

const Container = (
  { children }: Props,
) => {
  return (
    <Layout>
      <Header />
      {children}
    </Layout>
  );
};

export default Container;
