
function ChildrenAsProps() {
  return (
    <Parent>
      <div>
        <p> This is from children man</p>
        <p> this is another line from children</p>
      </div>
    </Parent>
  )
}

type IProps = {
  children: JSX.Element
}

function Parent(props: IProps) {

  /*
  if children is inside on div then it is a single element react element else that is an array
  */
  return (
    <>
      {props.children}
    </>
  )
}

export default ChildrenAsProps

/*
So What About Inheritance?
At Facebook, we use React in thousands of components, 
and we haven’t found any use cases where we would recommend 
creating component inheritance hierarchies.

Props and composition give you all the flexibility you need to customize 
a component’s look and behavior in an explicit and safe way. 
Remember that components may accept arbitrary props, including primitive values, 
React elements, or functions.

If you want to reuse non-UI functionality between components,
 we suggest extracting it into a separate JavaScript module. 
 The components may import it and use that function, object, or a class, 
 without extending it.
*/