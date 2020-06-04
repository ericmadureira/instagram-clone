import React from 'react';
import styled from 'styled-components';

import Post from './Post';

const Feed = styled.section`
  display: flex;
  flex-direction: column;
`;

const Container = () => {
  return (
    <Feed>
      <Post />
      <Post />
    </Feed>
  );
};

export default Container;
