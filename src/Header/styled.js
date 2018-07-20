// @flow
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import searchbarIcon from '../Ui/searchbar-icon.svg';

export const Wrap = styled.header`
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 30;
  min-height: 45px;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 394px;
  margin-top: 13px;
  margin-bottom: 13px;
`;

export const NavLinkBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const NavIcon = styled.img`
  margin-right: 5px;
  cursor: pointer;
`;

export const MainIcon = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  cursor: pointer;
`;

export const SearchBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  width: 220px;
  background: #f5f8fa;
  border: 1px solid #e6ecf0;
  border-radius: 100px;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #687b8a;
  padding-left: 11px;
  padding-top: 9px;
  padding-bottom: 8px;
  background-image: url(${searchbarIcon});
  background-repeat: no-repeat;
  background-position: 193px 9px;
  margin-right: 12px;
  margin-top: 6px;
  margin-bottom: 7px;
`;

export const Avatar = styled.img`
  cursor: pointer;
  width: 32px;
  height: 32px;
  margin-top: 6px;
  margin-bottom: 7px;
  margin-right: 16px;
`;

export const TweetButton = styled.button`
  text-align: center;
  line-height: 14px;
  font-size: 14px;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  color: #ffffff;
  background: #1da1f2;
  border-radius: 100px;
  border: none;
  margin-top: 6px;
  margin-bottom: 7px;
  padding-left: 16px;
  padding-right: 15px;
  cursor: pointer;
  &:hover {
    background: #1da1f2;
  }
`;
