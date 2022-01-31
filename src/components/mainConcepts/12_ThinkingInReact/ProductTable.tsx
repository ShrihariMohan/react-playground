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
      <div className='flex flex-wrap'>
        {
          props.products.map((product, key) => {
            return <Product {...product} key={product.name} />
          })
        }
      </div>
    </>
  )
}

export default ProductTable