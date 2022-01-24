type props = {
  name: string
}

function PropsExample(props: props) {
  return (
    <h1 className="font-semibold text-4xl text-center my-4">{props.name}</h1>
  )
}

export default PropsExample