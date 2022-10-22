import styled from "styled-components";
import {
  ArrowLeft,
  Home,
  Search,
  Notifications,
  Email,
} from "../../styles/Icons";

export const Container = styled.div`
  height: auto;
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  display: flex;
  align-items: start;
  > button {
    padding: 8px;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;
    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
  background-color: black;
`;

export const PerfilWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
  /* background-color: red; */
`;

export const BackIcon = styled(ArrowLeft)`
  width: 26px;
  height: 26px;
  fill: var(--twitter);
  margin: 8px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4px;
  > strong {
    font-size: 19px;
  }
  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;
