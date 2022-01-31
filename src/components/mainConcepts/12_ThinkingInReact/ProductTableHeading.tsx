import styled from "styled-components"

type IProps = {
  heading: string
}

const Heading = styled.h1`
  font-size: larger;
  font-weight: 600;
  margin-top: 4px;
`

function ProductTableHeading(props: IProps) {
  return (
    <Heading> {props.heading}</Heading>
  )
}

export default ProductTableHeading