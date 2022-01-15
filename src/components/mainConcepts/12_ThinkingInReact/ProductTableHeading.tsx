type IProps = {
  heading: string
}

function ProductTableHeading(props: IProps) {
  return (
    <h1> {props.heading}</h1>
  )
}

export default ProductTableHeading