import React from 'react';
import styled from 'styled-components';

const Background = styled.img`
  width: 100%;
  max-height: 380px;
`;

function BackgroundImage({ userData }) {
  return (
    <div>
      <Background src={userData.header} />
    </div>
  );
}

export default BackgroundImage;
