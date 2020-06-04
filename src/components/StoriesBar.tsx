import React from 'react';
import styled from 'styled-components';

import Story from './Story';

const StoriesBar = styled.section`
  background-color: #fff;
  border: 1px solid #FAFAFA;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  width: 935px;
`;

const Container = () => {
  return (
    <StoriesBar>
      <Story />
      <Story />
      <Story />
    </StoriesBar>
  );
};

export default Container;
