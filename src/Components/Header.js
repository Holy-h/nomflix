import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 40px;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  background-color: rgba(20, 20, 20, 0.7);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  /* &:not(:last-child) {
    margin-right: 16px;
  } */
  width: 80px;
  text-align: center;
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

export default () => (
  <Header>
    <List>
      <Item>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
);
