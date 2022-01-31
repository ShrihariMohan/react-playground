import React from "react";
import loggingProps from './LogginProps'
type ButtonProps = React.HTMLProps<HTMLButtonElement>

const FancyButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>

));

const ButtonWithoutRef = () => {
  return (
    <>
      Button with reference man!
    </>
  )
}

export default loggingProps({ WrappedComponent: ButtonWithoutRef })