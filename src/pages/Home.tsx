import React from 'react';
import styled from 'styled-components';

import StoriesBar from '../components/StoriesBar';
import Feed from '../components/Feed';

const Home = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Container = () => {
  return (
    <Home>
      <StoriesBar />
      <Feed />
    </Home>
  );
};

export default Container;
