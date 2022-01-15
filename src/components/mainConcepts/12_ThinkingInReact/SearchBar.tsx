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
      <>
        <input type="text" placeholder="filter the items by name" onChange={this.handleFilterChange} />
        <input type="checkbox" onChange={this.handleStockChange} /> Only show items in stock
      </>
    )
  }
}

export default SearchBar