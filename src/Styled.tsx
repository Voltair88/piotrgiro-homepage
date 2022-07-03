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
  position: relative;
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
    & .Logo-img {
        width: 50%;
    }
    & a {
      padding: 0px 10px !important;
    }
  }
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
    text-align: center;
    font-size: 18px;
    background: #fff;
    width: 100%;
    height: 100%;
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
    content: "";
  }
  .swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath d='M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
    top: 40%;
  }
  .swiper-button-prev:after {
    content: "";
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
    .swiper-slide img {
      border-radius: 0 0 10px 10px;
    }
    .swiper-container {
      width: 100% !important;
      margin: 0 !important;
    }
  }

`;

export const Nav = styled.nav`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
  position: sticky;
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
  transition: all 0.1s ease-in-out;

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

  & p {
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: 2px;
    line-height: 2;
  }

  & a {
    margin: 0 90px;
    color: rgb(119, 119, 119);
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

export const Show = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px auto;

  & iframe {
    margin: 5px auto;
  }
`;
