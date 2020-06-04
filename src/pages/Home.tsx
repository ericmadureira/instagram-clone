import React from 'react';
import styled from 'styled-components';

import StoriesBar from '../components/StoriesBar';

const Home = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Container = () => {
  return (
    <Home>
      <StoriesBar />
    </Home>
  );
};

export default Container;
