import React from 'react';
import styled from 'styled-components';

import logoImage from '../assets/instagram-header-logo.png';

const Content = styled.div`
  overflow: hidden;
  width: 100%;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  width: 614px;
`;

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Container = () => {
  return (
    <Post>
      <Header>
        <div>
          <img src={logoImage} alt='post user' />
          <span>User</span>
        </div>
        <span>...</span>
      </Header>
      <Content>
        <img src='https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg' alt='Post' />
      </Content>
      <Social>
        <div>
          <span>A</span>
          <span>B</span>
          <span>C</span>
        </div>
        <span>D</span>
      </Social>
    </Post>
  );
};

export default Container;
