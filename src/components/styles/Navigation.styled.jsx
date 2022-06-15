import styled from "styled-components";

export const Navigation = styled.nav`
  ul {
    display: flex;
    align-items: center;
  }

  li {
    list-style: none;
    margin: 10px;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  nav {
    display: flex;
    background: #b3c5e4;
  }

  img {
    max-width: 100%;
  }

  nav img {
    border-radius: 10%;
    animation: anim-logo 5s infinite;
  }

  @keyframes anim-logo {
    0% {
      border-radius: 50%;
    }
    25% {
      border-radius: 25%;
    }
    50% {
      border-radius: 50%;
    }
    75% {
      border-radius: 75%;
    }
    100% {
      border-radius: 100%;
    }
  }
`;
