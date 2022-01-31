import styled, { css } from "styled-components";

type props = {
  inStock: boolean
}

export const Box = styled.div<props>`
  background-color: white;
  border-radius: 2rem;
  padding: 1rem;

  &:hover {
      box-shadow: 0px 2px 5px rgba(0,0,0,0.2);

  }
    /* ${props =>
    !props.inStock &&
    css`
       background: #c8c8c8;
      color: white;#c3c2c2
    `}; */
`