import React from 'react'
import { Heading } from '../../../uiComponents/Heading';
import { IProduct } from './Product';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const products = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football", image: '⚽️' },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball", image: '⚾️' },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball", image: '🏀' },
  { category: "Electronics", price: "$99.99", stocked: true, name: "Guitar", image: '🎸' },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5", image: '📱' },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Monitor", image: '🖥' }
];

type IProps = {

}

type IState = {
  query: string,
  inStock: boolean,
  group: {
    [name: string]: IProduct[]
  }
}

class FilterableProductTable extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { query: '', inStock: false, group: this.groupByCategory(products) }
  }

  filterByName() {
    const filteredList = products.filter(each => {
      return each.name.startsWith(this.state.query)
    })
    this.groupByCategory(filteredList)
  }

  groupByCategory(list: IProduct[]) {
    let group = list.reduce((acc: any, next) => {
      const key = next.category
      if (!acc[key]) acc[key] = []
      if (this.state?.inStock) { if (next.stocked) acc[key].push(next) }
      else acc[key].push(next)
      return acc
    }, {})
    this.setState({ group: group })
    return group
  }

  handleSearch = (query: string, inStock: boolean) => {
    this.setState({ query, inStock }, this.filterByName)
  }

  render(): React.ReactNode {
    const productsGroup = this.state.group
    return (
      <div className='bg-slate-100 rounded-2xl p-4 max-w-xl my-4 mx-auto'>
        <Heading> Stocks 🤣</Heading>
        <SearchBar products={products} handleSearch={this.handleSearch} />
        {
          Object.keys(productsGroup).map((key, ind) => {
            return <ProductTable category={key} products={productsGroup[key]} key={key} />
          })
        }
      </div>
    )
  }
}

export default FilterableProductTable