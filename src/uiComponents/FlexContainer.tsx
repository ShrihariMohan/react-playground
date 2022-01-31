import styled, { css } from "styled-components";

type props = {
  justifyCenter?: boolean,
  justifyBetween?: boolean

}

export const FlexContainer = styled.div<props>`
  display: flex;
   ${props =>
    !props.justifyCenter &&
    css`
       justify-content: center;
    `};
    ${props =>
    !props.justifyBetween &&
    css`
       justify-content: space-between;
    `};
`