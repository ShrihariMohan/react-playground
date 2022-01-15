import { IProduct, Product } from './Product'
import ProductTableHeading from './ProductTableHeading'
type IProps = {
  products: IProduct[],
  category: string
}

function ProductTable(props: IProps) {
  return (
    <>
      <ProductTableHeading heading={props.category} />
      {
        props.products.map((product, key) => {
          return <Product {...product} key={product.name} />
        })
      }
    </>
  )
}

export default ProductTable