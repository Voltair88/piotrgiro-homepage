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
    height: 90vh;
    max-height: 70vh;
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
  a h1.dark-text {
    color: #000;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
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
/*   @media (min-width: 768px) {
    a:hover {
      transform: scale(1.01);
      transition: all 0.5s ease-in-out;
    }
  } */
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
    font-family: 'Source Sans Pro', sans-serif, serif;
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

export const ArchiveGrid = styled(Page)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  .archive-header {
    text-align: center;
    margin-bottom: 40px;
    width: 100%;
    
    h1 {
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 600;
      font-size: 2.5rem;
      letter-spacing: 2px;
      color: #333;
      text-shadow: 1px 1px 1px #fff;
      text-rendering: optimizeLegibility !important;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      margin-bottom: 20px;
    }
    
    p {
      font-size: 1.1rem;
      color: #666;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
  }

  .archive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    width: 100%;
    margin-bottom: 40px;
  }

  .archive-item {
    position: relative;
    aspect-ratio: 1;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    
    &:focus {
      outline: 3px solid #007aff;
      outline-offset: 2px;
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    &:hover img {
      transform: scale(1.05);
    }
  }

  .archive-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
    display: flex;
    align-items: flex-end;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    
    .view-text {
      color: white;
      font-size: 0.9rem;
      font-weight: 600;
      padding: 15px;
      text-align: center;
      letter-spacing: 1px;
    }
  }

  .archive-item:hover .archive-overlay {
    opacity: 1;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    animation: fadeIn 0.3s ease;
    
    &:focus {
      outline: none;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .modal-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;

    img {
      max-width: 90vw;
      max-height: 90vh;
      width: auto;
      height: auto;
      object-fit: contain;
      border-radius: 8px;
    }
  }

  .modal-close {
    position: absolute;
    top: -50px;
    right: 0;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #333;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &:hover {
      background: white;
      transform: scale(1.1);
    }
    
    &:focus {
      outline: 3px solid #007aff;
      outline-offset: 2px;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
    
    .archive-header h1 {
      font-size: 2rem;
    }
    
    .archive-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 15px;
    }
    
    .archive-overlay .view-text {
      font-size: 0.8rem;
      padding: 10px;
    }
    
    .modal-close {
      top: -40px;
      width: 35px;
      height: 35px;
      font-size: 24px;
    }
  }

  @media (max-width: 480px) {
    .archive-grid {
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
  }

  /* Lightbox Styles */
  .lightbox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.95);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease;
  }

  .lightbox-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    z-index: 2001;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
  }

  .image-counter {
    color: white;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  .lightbox-close {
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #333;
    font-size: 36px;
    font-weight: bold;
    cursor: pointer;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    padding: 0;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

    &:hover {
      background: white;
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .lightbox-zoom-controls {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 2001;
    background: rgba(0, 0, 0, 0.6);
    padding: 10px;
    border-radius: 30px;
    backdrop-filter: blur(10px);
  }

  .zoom-button {
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #333;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    padding: 0;
    transition: all 0.3s ease;

    &:hover {
      background: white;
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .lightbox-swiper {
    width: 100%;
    height: 100vh;

    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .swiper-zoom-container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 90vw;
        width: auto;
        height: auto;
        object-fit: contain;
        cursor: zoom-in;
      }
    }
  }

  @media (max-width: 768px) {
    .lightbox-header {
      padding: 15px;
    }

    .image-counter {
      font-size: 16px;
    }

    .lightbox-close {
      width: 40px;
      height: 40px;
      font-size: 30px;
    }

    .lightbox-zoom-controls {
      bottom: 20px;
    }

    .zoom-button {
      width: 40px;
      height: 40px;
      font-size: 20px;
    }

    .lightbox-swiper {
      .swiper-button-next,
      .swiper-button-prev {
        width: 40px;
        height: 40px;

        &::after {
          font-size: 20px;
        }
      }
    }
  }
`;
