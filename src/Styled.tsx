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
    align-items: center!important;
    a {
      padding: 10px 10px !important;
    }
    .Logo a {
      height: 50px!important;
      margin: 0!important;
      padding: 0!important;
    }
     .Logo > a > p {
      height: 50px!important;
      font-size: 1.5rem!important;
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
  .swiper-container {
    padding-top: 2vh;
    margin: auto;
  }
  .swiper {
    width: 75%;
    max-width: 120vh;
    height: 90%;
    max-height: 80vh;
    display: flex;
    flex-direction: row;
    cursor: grab;
  }
  .swiper:active {
    cursor: grabbing;
  }
  .swiper-slide {
    width: 100%;
    object-fit: cover;
    text-align: center;
    font-size: 1rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-button-next {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath d='M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
    transition: all 0.5s ease;
    opacity: 0.1;
  }
  .swiper:hover > .swiper-button-prev,
  .swiper:hover > .swiper-button-next,
  .swiper:hover > .swiper-pagination {
    opacity: 1;
  }
  .swiper-button-next:after {
    content: '';
  }
  .swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath d='M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
    transition: all 0.5s ease;
    opacity: 0.1;
    
  }
  .swiper-button-prev:after {
    content: '';
  }
  .swiper-slide img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-pagination {
    z-index: 1 !important;
    opacity: 0.1;
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #fff;
    border: 1px solid #000;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    background: #007aff;
    opacity: 1;
  }
  .swiper-pagination:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    .swiper {
      width: 100%;
      height: 100%;
    }
    .swiper-container {
      width: 100% !important;
      margin: 0 !important;
    }
  }
`;

export const Hom = styled.div`
  display: flex;
  flex-direction: column;

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
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 30px auto;
    transition: all 0.5s ease-in-out;
  }
  a img {
    position: absolute;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  a h1 {
    display: flex;
    align-items: center;
    font-family: 'Source Sans Pro', sans-serif;
    height: 50px;
    font-size: 74px;
    text-shadow: 1px 1px 1px #333;
    padding: 0px 4vw;
  }
  a h1:not(.left) {
    justify-content: flex-end;
  }
  @media (max-width: 768px) {
    .par {
      transform: translateY(0) !important;
    }
    a {
      height: 300px;
      margin: 0;
    }
    a img {
      height: 300px;
      padding: 0;
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
    color: #bbbbbb;
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 75px;
    top: 0;
    left: 0;
    padding: 0;
    margin-left: 20px;
    position: absolute;
    :hover {
      background: none;
    }
  }
  .Logo > a > p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 75px;
    font-size: 2.2rem;
    font-family: 'Libre Caslon Display';
    font-weight: 600;
    letter-spacing: 4px;
    color: #ffffff;
    margin: 0;
    transition: all 0.3s ease-in-out;
  }
  .Logo > a > p:hover {
    filter: invert(70%);
  }
  @media (max-width: 1000px) {
    .Logo > a > p {
      font-size: 1.5rem;
      width: 150px;
      height: 60px;
    }
    .Logo > a {
      justify-content: flex-start;
      margin-top: 5px;
      margin-left: 10px;
      width: 150px;
      height: 50px;
    }
  }
  .flag {
    color: #fff;
    font-size: 1rem;
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
    margin: 0 0 0 20px;
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
  font-size: 1rem;
  line-height: 23px;
  color: #444;
  text-shadow: 1px 1px 1px #fff;
  text-rendering: optimizeLegibility !important;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  flex-direction: column;
`;

export const Bio = styled(Page)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .Swipercontainer {
    background-color: #c6c6c6;
  }
  .Text {
    white-space: pre-line;
  }
  h1 {
    font-family: 'Libre Caslon Display', sans-serif, serif;
    font-weight: 600;
    font-size: 2.5rem;
    letter-spacing: 2px;
    color: #333;
    text-shadow: 1px 1px 1px #fff;
    text-rendering: optimizeLegibility !important;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 60px;
    line-height: 40px;
  }
  p {
    font-size: 1rem;
    max-width: 800px;
    line-height: 22px;
  }
  .swiper {
    background-color: hsl(0, 0%, 70%, 0.5);
    margin-top: 20px;
    max-width: 80vw;
    max-height: 80vh;
    width: 100%;
    object-fit: cover;
  }
  .swiper-wrapper {
    align-items: center;
  }
  .swiper-slide {
    background-color: hsl(0, 0%, 70%, 0.5);
    max-width: 80vw;
    max-height: 80vh;
    object-fit: cover;
  }
  .swiper-slide img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    max-width: 80vw;
    max-height: 80vh;
    object-fit: cover;
  }
  ul {
    padding-left: 20px;
  }
  @media (max-width: 1000px) {
    .Swipercontainer {
      width: 100%;
    }
    .swiper {
      width: 100%;
      height: 90%;
      max-height: 80vh;
    }
    .swiper-slide img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const Show = styled(Page)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  figure {
    margin: auto;
    margin-inline: 20px;
    padding: 0;
  }
  iframe {
    margin: 5px auto;
    max-width: 100%;
    max-height: auto;
  }
  caption,
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 10px 0;
    width: 100%;
    max-width: 100%;
  }
`;

export const Form = styled(Page)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #333;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  label {
    display: flex;
    width: 80vw;
    max-width: 100%;
    margin: 10px 20px;
    font-size: 18px;
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
    display: block;
    max-width: 100%;
    margin: 10px 20px;
    width: 80vw;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    letter-spacing: 2px;
    line-height: 2;
    :focus {
      outline: none;
    }
  }
  button {
    display: block;
    margin: 10px auto;
    max-width: 900px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 2;
    :focus {
      outline: none;
    }
  }
`;

export const CeVe = styled(Page)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 10px 0 0 20%;
  .container {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 1000px) {
    margin: 10px auto;
  }
`;
