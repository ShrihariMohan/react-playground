
function Example() {
  return <AnotherSampleForReturn />
}

// internally Example will be converted to react.createElement( name , {props})
function AnotherSampleForReturn() {
  return (
    <>
      Example Functions
    </>
  )
}

const MyComponents = {
  DatePicker: function DatePicker(props: any) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

//since jsx use javascripts the above things are possible
//User-Defined Components Must Be Capitalized




export default Example