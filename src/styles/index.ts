import styled from "styled-components";
import { motion } from "framer-motion";

import bg from "../img/bg.jpg";

export const Main = styled.main``;

export const Section = styled.div`
  position: relative;

  .first {
    background-color: none;
    overflow: hidden;

    .offset {
      width: 100%;
      height: 100%;
    }

    .inner-a {
      background: url(${bg});
      background-size: cover;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;
        color: white;
        background-color: #000000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        position: relative;
      }

      .logotipo {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 25%;
      }

      .banner {
        display: flex;
        flex-direction: column;
        margin-top: 50%;
        padding: 10%;
        gap: 25px;

        > h1 {
          font-size: 3rem;
          font-family: "Cairo", sans-serif;
        }

        > h3 {
          font-size: 2rem;
          font-family: "Lato", sans-serif;
          font-weight: 300;
        }
      }
      .right-side {
        width: 50%;
        height: 100%;
        display: flex;

        .right-image {
          background-color: transparent;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .inner-b {
      background-color: black;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      color: white;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 30px;
      font-weight: 300;
      font-family: "Lato", sans-serif;
      gap: 50px;

      img {
        height: 7rem;
        width: 7rem;
      }

      .container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
    }
    .inner-c {
      background-color: #191919;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        width: 80%;
        height: 100%;
      }
    }
  }

  .second {
    background-color: #191919;
  }

  .second-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    > img {
      width: 500px;
      height: 100px;
    }
  }

  .third {
    background-color: #cdf363;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 50px;
    padding: 5vw;

    .left-banner {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      gap: 10px;

      span {
        font-size: 26px;
      }

      .button {
        width: 50%;
      }
    }

    .right-banner {
      height: 100%;
      width: 60%;
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .fourth {
    display: none;
    background-color: blue;
  }

  @media screen and (max-width: 800px) {
    .left-side {
      width: 100%;
    }

    .right-side {
      display: none;
    }
  }
`;

export const Sticky = styled(motion.div)`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;
