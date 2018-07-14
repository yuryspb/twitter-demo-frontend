// @flow
import React from 'react';
import styled from 'styled-components';

const Background = styled.img`
  width: 100%;
  max-height: 380px;
`;

type Props = {
  userData: Object,
};

function BackgroundImage({ userData }: Props) {
  return (
    <div>
      <Background src={userData.header} />
    </div>
  );
}

export default BackgroundImage;
