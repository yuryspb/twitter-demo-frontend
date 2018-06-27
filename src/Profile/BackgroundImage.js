import React from 'react';
import styled from 'styled-components';

const avatar = `${process.env.PUBLIC_URL}/avatars/avatar.png`;
const backgroundImage = `${process.env.PUBLIC_URL}/media//background-image.jpg`;

const Background = styled.div`
  background: url(${backgroundImage}) no-repeat;
  width: 100%;
  min-height: 380px;
  background-size: cover;
`;

const Avatar = styled.img`
  position: relative;
  height: 210px;
  top: 260px;
`;

export default () => (
  <div>
    <Background src={backgroundImage}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Avatar src={avatar} />
          </div>
        </div>
      </div>
    </Background>
  </div>
);
