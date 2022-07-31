import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

html {
  width: 100%;
    margin: 0;
    scroll-behavior: smooth;
    overflow-x: hidden;
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
    a {
      padding: 10px 10px !important;
    }
    .Logo a {
      padding: 0!important;
    }
     .Logo-img {
        width: 50% !important;
    }
  }
  .notScrolled {
    align-items: center;
  }
  @media (max-width: 1000px) {
    .notScrolled {
      padding: 0!important;
    }
  }
  .skeleton {
  background-color: #c6c6c6;
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
    height: 1000px;
    display: flex;
    flex-direction: column;
    padding: 30px auto;
    transition: all 0.5s ease-in-out;
  }
  a img {
    position: absolute;
    width: 100%;
    height: 1000px;
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
    .par {
      transform: translateY(0) !important;
    }
    a {
      height: 300px;
      margin: 20px 0;
    }
    a img {
      height: 300px;
      padding: 10px;
    }
    a h1 {
      font-size: 8vw;
    }
  }
  @media (min-width: 768px) {
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
  font-size: 1rem;
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
    padding: 10px 0.5vw;
    margin: 0 2px;
    border-radius: 5px;
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
  @media (max-width: 1000px) {
    .Logo-img {
      width: 70%;
      height: auto;
    }
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
  @media (min-width: 1000px) {
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

  @media (max-width: 1000px) {
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

  p a {
    text-decoration: none;
    color: #fff;
    transition: all 0.3s ease-in-out;
    :hover {
      color: #7e804d;
    }
  }

  .insta {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 1vmax;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 3px solid #8a8a8a;
    color: rgb(119, 119, 119);
    text-decoration: none;
    transition: 0.5s;
    z-index: 1;
    overflow: hidden;
  }
  .insta:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: #3b5999;
    transition: 0.5s;
    z-index: 2;
  }
  .insta:hover:before {
    top: 0;
  }
  .insta:hover svg {
    color: #fff;
    transform: rotateY(360deg);
  }
  svg {
    position: relative;
    width: 70%;
    height: 70%;
    transition: 0.5s;
    z-index: 3;
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

export const Bio = styled.body`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  color: #444;
  text-shadow: 1px 1px 1px #fff;
  text-rendering: optimizeLegibility !important;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 60px;
    line-height: 40px;
  }
  .img {
    width: 100%;
    height: 350px;
    transition: all 0.3s ease-in-out;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  p {
    font-size: 22px;
    max-width: 1200px;
    line-height: 30px;
  }
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
