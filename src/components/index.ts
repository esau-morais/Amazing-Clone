import { Link } from 'react-router-dom'

import styled from 'styled-components'
// Inheritence

export const Container = styled.div`
  width: 100%;

  padding-left: 180px;

  @media screen and (max-width: 980px) {
    padding-left: 60px;
  }
`

export const RouteLink = styled(Link)`
  font-size: 14px;
  color: #f69a11;
`

export const Back = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 3rem;
    height: 3rem;

    margin-right: auto;
    padding: 2rem;

    background-color: #ffffff;
    color: #000;

    border-radius: 100%;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.4s ease-in-out;

    &:hover {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }
`

export const Divider = styled.hr`
    margin: 2rem 0 0.6rem 0;
    width: 100%;
    color: #f8f8f8;

    border: none;
    border-bottom: 2px solid #f8f8f8;
`

export const Button = styled.button`
    width: 100%;

    padding: 1.2rem 1rem;

    border: none;
    background-color: #e9a842;
    color: #1d1d1d;

    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;

    cursor: pointer;

    &:disabled {
      background-color: #e9a85a;
      color: #2f2f2f;

      cursor: not-allowed;
    }
`
