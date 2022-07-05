import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

html {
  width: 100%;
    margin: 0;
    scroll-behavior: smooth;
    @media (max-width: 768px) {
        scroll-behavior: auto;
    }
}

body {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
}
body:after{
    content: "";
    display: block;
    height: 50px;
}
.scrolled {
    background: #333333e3 !important;
    padding: 0!important;
    height: 50px!important;
    align-items: center;
     .Logo-img {
        width: 50% !important;
    }
     a {
      padding: 0px 10px !important;
    }
  }
  .notScrolled {
    align-items: center;
  }

  .skeleton {
  background-color: #c6c6c6;
  background: linear-gradient(
  100deg,
  rgba(255, 255, 255, 0) 40%,
  rgba(255, 255, 255, .5) 50%,
  rgba(255, 255, 255, 0) 60%
  ) #c6c6c6;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
  }
  @keyframes loading {
  to {
    background-position-x: -20%;
  }
}
.Submitted {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 80%;
    margin: 20vh auto;
    font-size: 22px;
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: 2px;
    line-height: 23px;
    color: #444;
    text-shadow: 1px 1px 1px #fff;
    text-rendering: optimizeLegibility !important;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`;

export const Hom = styled.div`
  display: flex;
  flex-direction: column;
  .swiper-container {
    padding-top: 2vh;
    width: 70%;
    margin: auto;
  }
  .swiper {
    display: flex;
    flex-direction: row;
  }
  .swiper-slide {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    text-align: center;
    font-size: 18px;
    background: #fff;
    border-radius: 0 0 10px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-button-next {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath d='M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
    top: 40%;
  }
  .swiper-button-next:after {
    content: '';
  }
  .swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath d='M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
    top: 40%;
  }
  .swiper-button-prev:after {
    content: '';
  }
  .swiper-slide img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  .swiper-pagination {
    z-index: 1 !important;
  }
  @media (max-width: 768px) {
    .swiper-container {
      width: 100% !important;
      margin: 0 !important;
    }
  }
  .sections {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightgoldenrodyellow;
  }

  a {
    justify-content: center;
    text-decoration: none;
    color: #fff;
    height: auto;
    width: 100%;
    height: 750px;
    display: flex;
    flex-direction: column;
    padding: 30px auto;
    transition: all 0.5s ease-in-out;
  }
  a img {
    position: absolute;
    width: 100%;
    height: 750px;
    object-fit: cover;
  }
  a h1 {
    font-family: 'Source Sans Pro', sans-serif;
    height: 50px;
    font-size: 74px;
    text-shadow: 1px 1px 1px #333;
    padding-left: 4vw;
  }
  @media (max-width: 768px) {
    a {
      height: 300px;
      margin: 2vh auto;
    }
    a img {
      height: 300px;
    }
    a h1 {
      font-size: 8vw;
    }
  }
  @media (min-width: 768px) {
    a:first-of-type {
      padding-top: 10vh;
      margin-bottom: -20vh;
      clip-path: polygon(100% 0%, 100% 100%, 0 74%, 0 0);
    }
    a:nth-of-type(2n) {
      clip-path: polygon(100% 30%, 100% 100%, 0 70%, 0 0);
      margin-bottom: -20vh;
    }
    a:nth-of-type(2n) img {
      object-position: 0% 0%;
      transform: scaleX(-1);
      object-position: 0% 60%;
    }
    a:nth-of-type(3n) img {
      object-position: 0% 0%;
    }
    a:nth-of-type(3n) {
      clip-path: polygon(100% 30%, 100% 100%, 0 70%, 0 0);
      margin-bottom: -20vh;
    }
    a:nth-of-type(4n) {
      clip-path: polygon(100% 30%, 100% 100%, 0 100%, 0 0);
      margin-bottom: 10vh;
    }
    a:hover {
      transform: scale(1.01);
      transition: all 0.5s ease-in-out;
    }
  }
`;

export const Nav = styled.nav`
  position: sticky;
  display: flex;
  justify-content: flex-end;
  background: #333;
  padding: 10px 0;
  color: #fff;
  font-size: 2vmin;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 2px;
  top: 0;
  width: 100%;
  height: 60px;
  line-height: 40px;
  transition: all 0.1s ease-in-out;
  z-index: 999 !important;

  a {
    color: #fff;
    text-decoration: none;
    height: 20px;
    line-height: 20px;
    padding: 7px 0.5vw;
    margin: 0 2px;
    display: inline-block;
    transition: all 0.3s ease-in-out;
    :hover {
      background: #fff;
      color: #333;
    }
  }
  .active {
    background-color: #fff;
    color: #333;
  }
  .Logo > a {
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
  .Logo-img {
    width: 100%;
    height: auto;
    margin: 0;
    filter: invert(100%);
    transition: all 0.3s ease-in-out;
  }
  .Logo-img:hover {
    filter: invert(70%);
  }
  .flag {
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
    :hover {
      background: #fff;
      color: #333;
    }
  }

  .languageselector {
    display: flex;
    align-items: center;
    margin: 0 0 0 20px;
    p {
      margin: auto 0;
      padding: 0;
      line-height: 40px;
    }
  }
  @media (min-width: 900px) {
    .navlinks {
      display: flex;
      align-items: center;
      margin: 0 0 0 20px;
    }
    .hamburger-react {
      display: none;
    }
    .hammenu {
      display: none;
    }
  }

  @media (max-width: 900px) {
    .navlinks {
      display: none;
    }
    .hamburger-react {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      width: 40px;
      height: 40px;
    }
    .hammenu {
      padding-top: 60px;
      top: 0;
      display: flex;
      flex-direction: column;
      position: absolute;
      background: #333;
    }
  }
`;

export const Foot = styled.footer`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333;
  color: #fff;
  bottom: 0;
  font-size: 8px;
  letter-spacing: 2px;
  width: 100%;
  line-height: 2;
  height: 50px;

  p {
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: 2px;
    line-height: 2;
  }

  a {
    margin: 0 1vmax;
    color: rgb(119, 119, 119);
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    :hover {
      background: #fff;
      color: #333;
    }
  }

  svg {
    margin: 0;
    padding: 10px;
  }
`;

export const Page = styled.div`
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

export const Show = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px auto;

  iframe {
    margin: 5px auto;
    max-width: 100%;
    max-height: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  width: 80%;
  label {
    margin: 10px auto;
    font-size: 18px;
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: 2px;
    line-height: 23px;
    color: #444;
    text-shadow: 1px 1px 1px #fff;
    text-rendering: optimizeLegibility !important;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  input,
  textarea {
    margin: 10px auto;
    max-width: 900px;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: 2px;
    line-height: 2;
    :focus {
      outline: none;
    }
  }
  button {
    margin: 10px auto;
    max-width: 900px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: 2px;
    line-height: 2;
    :focus {
      outline: none;
    }
  }
`;
