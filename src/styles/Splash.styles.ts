import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Card = styled.div`
  height: 30vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: #fdfffc;
  border-radius: 10px;
  -webkit-box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
  -moz-box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
  box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
  @media (max-width: 1400px) {
    width: 60%;
  }
  @media (max-width: 860px) {
    width: 95%;
  }
`;

export const Text = styled.p`
  color: #011627;
  font-size: 2rem;
  font-weight: 500;
`;

export const SplashButton = styled.button`
  height: 30px;
  width: 40%;
  background-color: #011627;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fdfffc;
  font-size: 1.1rem;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ff9f1c;
    -webkit-box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
    -moz-box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
    box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
  }
  @media (max-width: 860px) {
    width: 80%;
    height: 50px;
  }
  @media (max-width: 1400px) {
    width: 60%;
  }
`;

export const SplashLink = styled(NavLink)`
  height: 30px;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #011627;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fdfffc;
  font-size: 1.1rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ff9f1c;
    -webkit-box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
    -moz-box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
    box-shadow: 3px 5px 10px 0px rgba(1, 22, 39, 1);
  }
  @media (max-width: 860px) {
    width: 80%;
    height: 50px;
  }
  @media (max-width: 1400px) {
    width: 60%;
  }
`;
