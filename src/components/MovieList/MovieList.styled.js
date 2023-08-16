import styled from "styled-components";
import { Link } from "react-router-dom";

export const Ul = styled.ul`
  list-style-type: none;
  gap: 10px;
  display: grid;
`;

export const Li = styled(Link)`
  color: black;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  &:hover,
  &:focus {
    color: rgb(255, 178, 35);
`;
