import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Button = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0 25px;
  margin: 0 15px 15px 0;
  outline: none;
  border: 1px solid #fff;
  border-radius: 50px;
  height: 46px;
  line-height: 46px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #444;
  background-color: #fff;
  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;
  vertical-align: top;
  transition: box-shadow 0.2s;

  &:focus-visible {
    border: 1px solid #4c51f9;
    outline: none;
  }

  &:hover {
    transition: all 0.2s;
    box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
  }

  &:active {
    background-color: #808080;
  }

  &:disabled {
    background-color: #eee;
    border-color: #eee;
    color: #444;
    cursor: not-allowed;
  }
`;

export const Img = styled.img`
  width: 250px;
  height: 350px;
`;

export const H3 = styled.h3`
  font-size: 25px;
`;

export const P = styled.p`
  font-size: 20px;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
`;

export const Navigation = styled(NavLink)`
  &.active {
    color: tomato;
  }

  display: inline-block;
  box-sizing: border-box;
  padding: 0 25px;
  margin: 0 15px 15px 0;
  outline: none;
  border: 1px solid #fff;
  border-radius: 50px;
  height: 46px;
  line-height: 46px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #444;
  background-color: #fff;
  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;
  vertical-align: top;
  transition: box-shadow 0.2s;

  &:focus-visible {
    border: 1px solid #4c51f9;
    outline: none;
  }

  &:hover {
    transition: all 0.2s;
    box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
  }

  &:active {
    background-color: #808080;
  }

  &:disabled {
    background-color: #eee;
    border-color: #eee;
    color: #444;
    cursor: not-allowed;
  }
`;

export const Div = styled.div`
  margin: 40px;
`;
