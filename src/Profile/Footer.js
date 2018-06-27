import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = styled.div``;

const Copyright = styled.span`
  display: inline-block;
  font-size: 13px;
  line-height: 18px;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  color: #718290;
  margin-right: 10px;
`;

const Nav = styled(Link)`
  display: inline-block;
  font-size: 13px;
  line-height: 18px;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  color: #718290;
  text-decoration: none;
  margin-right: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <Footer>
    <Copyright>
© 2018 Twitter
    </Copyright>
    <Nav to="/about">
About
    </Nav>
    <Nav to="/support">
Help Center
    </Nav>
    <Nav to="/tos">
Terms
    </Nav>
    <Nav to="/privacy">
Privacy policy
      {' '}
    </Nav>
    <Nav to="/cookies">
Cookies
    </Nav>
    <Nav to="/ads">
Ads info
    </Nav>
  </Footer>
);
