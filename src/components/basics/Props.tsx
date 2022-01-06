type props = {
  name: string
}

function PropsExample(props: props) {
  return (
    <h1>{props.name}</h1>
  )
}

export default PropsExample