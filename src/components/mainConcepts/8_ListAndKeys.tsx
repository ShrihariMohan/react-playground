function List(props: { list: number[] }) {
  const listItems = props.list
  const doubledListItems = listItems.map((number) => number = number * 2)
  const doubledListItemsElements = doubledListItems.map((ele, ind) => <li key={ind}> {ele} </li>)
  return (
    <ul>
      {doubledListItemsElements}
    </ul>
  )

}

export default List