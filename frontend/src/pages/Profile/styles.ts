import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  header {
    display: flex;
    align-items: center;
  }

  header > span {
    font-size: 20px;
    margin-left: 24px;
  }

  header > img {
    height: 64px;
  }

  header > a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }

  header > button {
    width: 60px;
    height: 60px;

    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;

    transition: border-color 0.2s;

    &hover {
      border-color: #999;
    }
  }

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;
  }

  ul > li {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;
  }

  li > button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;

    &:hover {
      opacity: 0.8;
    }
  }

  li > strong {
    display: block;
    margin-bottom: 16px;
    color: #41414d;
  }

  li > p + strong {
    margin-top: 32px;
  }

  li > p {
    color: #737380;
    line-height: 21px;
    font-size: 16px;
  }
`;
