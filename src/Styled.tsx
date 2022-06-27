import styled from 'styled-components';

export const Nav = styled.nav`
  background: #333;
  padding: 10px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  & a {
    color: #fff;
    text-decoration: none;
    padding: 10px;
    display: inline-block;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: #fff;
      color: #333;
    }
  }
`;

export const Foot = styled.footer`
  background: #333;
  padding: 10px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;
