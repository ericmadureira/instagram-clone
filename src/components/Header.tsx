import React from 'react';
import styled from 'styled-components';

import logoImage from '../assets/instagram-header-logo.png';

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 935px;
`;

const Header = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  width: 100%;
`;

const Container = () => {
  return (
    <Header>
      <Content>
        <img src={logoImage} alt='instagram logo' />
      </Content>
    </Header>
  );
};

export default Container;
