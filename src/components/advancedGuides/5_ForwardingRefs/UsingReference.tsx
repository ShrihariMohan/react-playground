import React, { createRef } from "react";
import FancyButton from "./FancyButton";

const ref = React.createRef<HTMLButtonElement>()

function CreatingRef() {
  return (<>
  </>
    // <FancyButton ref={ref} > Click me!</FancyButton>
  )
}

export default CreatingRef
