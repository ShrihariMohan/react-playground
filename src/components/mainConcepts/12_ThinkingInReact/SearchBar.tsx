import React from 'react'
import { IProduct } from './Product'
type IProps = {
  products: IProduct[],
  handleSearch: Function
}

type IState = {
  query: string,
  inStock: boolean
}

class SearchBar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { query: '', inStock: false }
  }

  handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    this.setState({ query }, this.handleSearch)

  }

  handleStockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inStock = event.target.checked
    this.setState({ inStock }, this.handleSearch)
  }

  handleSearch = () => {
    this.props.handleSearch(this.state.query, this.state.inStock)
  }

  render(): React.ReactNode {
    return (
      <div className='text-center'>
        <input type="text" className='p-3 rounded-lg w-64 border-transparent border hover:border-neutral-700'
          placeholder="🔎 Search the items by name"
          onChange={this.handleFilterChange} />
        <input type="checkbox" className='m-2' onChange={this.handleStockChange} /> In stock
      </div>
    )
  }
}

export default SearchBar