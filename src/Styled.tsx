import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

html {
    margin: 0;
    scroll-behavior: smooth;

    @media (max-width: 768px) {
        scroll-behavior: auto;
    }
}

body {
    margin: 0;
    font-family: sans-serif;
}
`;

export const Nav = styled.nav`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
  display: flex;
  justify-content: flex-end;
  background: #333;
  padding: 10px 0;
  color: #fff;
  font-size: 20px;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 2px;
  top: 0;
  width: 100%;
  height: 60px;
  line-height: 40px;

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
  & .Logo > a {
    width: 65px;
    height: 65px;
    top: 0;
    left: 0;
    padding: 0;
    margin-top: 10px;
    margin-left: 10px;
    position: absolute;
    :hover {
      background: none;
    }
  }
  & .Logo-img {
    width: 100%;
    height: auto;
    margin: 0;
    filter: invert(100%);
    transition: all 0.3s ease-in-out;
  }
  & .Logo-img:hover {
    filter: invert(70%);
  }
  & .flag {
    color: #fff;
    font-size: 16px;
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: 2px;
    background: transparent;
    width: 40px;
    height: 40px;
    margin: 0 5px;
    padding: 0;
    border: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: #fff;
      color: #333;
    }
  }

  & .languageselector {
    display: flex;
    align-items: center;
    margin: 0 0 0 20px;
    & p {
      margin: auto 0;
      padding: 0;
      line-height: 40px;
    }
  }
`;

export const Foot = styled.footer`
  display: flex;
  justify-content: space-between;
  background: #333;
  color: #fff;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: fixed;
  bottom: 0;
  width: 100%;
  line-height: 2;
  height: 50px;

  & a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: #fff;
      color: #333;
    }
  }

  & svg {
    margin: 0;
    padding: 10px;
  }
`;

export const Page = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap');
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #444;
  text-shadow: 1px 1px 1px #fff;
  text-rendering: optimizeLegibility !important;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20% auto;
  width: 80%;
`;
