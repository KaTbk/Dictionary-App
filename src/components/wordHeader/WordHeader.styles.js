import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  margin: 35px 0;
  h1 {
    color: ${({ theme }) => theme.font};
    font-size: 3.2rem;
    margin: 5px 0;
  }
  p {
    color: ${({ theme }) => theme.purple};
    font-size: 2rem;
    line-height: 2.4rem;
    margin: 0;
  }
`;

export const PlayBtnWrapper = styled.div`
  position: relative;
  width: 60px;
  aspect-ratio: 1;
  cursor: pointer;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${({ theme }) => theme.purple};
    border-radius: 50%;
    opacity: 25%;
    transition: opacity 0.2s ease-in-out;
  }
  svg {
    aspect-ratio: 1;
    fill: ${({ theme }) => theme.purple};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
    transition: fill 0.2s ease-in-out;
  }
  &:hover {
    &::before {
      opacity: 1;
    }
    svg {
      fill: #ffffff;
    }
  }
`;
