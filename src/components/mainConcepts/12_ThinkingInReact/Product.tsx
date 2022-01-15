export type IProduct = {
  category: string,
  price: string,
  stocked: boolean,
  name: string
}

export function Product(product: IProduct) {
  return (
    <>
      <p>Name : {product.name} Price : {product.price} Stock : {product.stocked ? 'yes' : 'no'}</p>
    </>
  )
}