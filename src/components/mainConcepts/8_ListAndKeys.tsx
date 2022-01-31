import styled from "styled-components"

function List(props: { list: number[] }) {

  const Item = styled.li`
    font-size: large;
    font-weight: bolder;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  `

  const listItems = props.list
  const doubledListItems = listItems.map((number) => number = number * 2)
  const doubledListItemsElements = doubledListItems.map((ele, ind) => <Item key={ind}> {ele} </Item>)
  return (
    <>
      <p className="text-lg"> Using map to fill the elements</p>
      <ul className="flex ">
        {doubledListItemsElements}
      </ul>
    </>
  )

}

export default List