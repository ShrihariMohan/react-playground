import styled from "styled-components"
const myName = 'shrihari'
const element = <h1> Hello man , {myName}</h1>
const anotherElement = 'Hello man! Using Styled Components'

const Title = styled.h1`
font-size : 4rem;
font-weight : 600;
`
function Helloworld() {

  return (
    <Title className="text-center text-gray-900">
      How I Learned React
    </Title>
  )
}

export default Helloworld