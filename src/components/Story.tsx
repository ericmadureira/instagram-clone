import React from 'react';
import styled from 'styled-components';

const Story = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Container = () => {
  return (
    <Story>
      <img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' alt='Story' />
      <span>Story 1</span>
    </Story>
  );
};

export default Container;
