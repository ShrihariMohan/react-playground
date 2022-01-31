import { Box } from "../../../uiComponents/Box"

export type IProduct = {
  category: string,
  price: string,
  stocked: boolean,
  name: string,
  image: string
}

export function Product(product: IProduct) {
  return (
    <Box className="m-2" inStock={product.stocked}>
      <div className="flex">
        <p className="text-6xl">
          {product.image}
        </p>

        <p className="self-center font-bold text-cyan-600 ml-2">
          {product.price}
        </p>
      </div>
      <p className="text-neutral-700 mt-1 text-center">
        {product.name}
      </p>
      <p className="text-red-400 text-center text-sm font-bold">
        {!product.stocked ? '(out of stock)' : ''}
      </p>
    </Box>
  )
}