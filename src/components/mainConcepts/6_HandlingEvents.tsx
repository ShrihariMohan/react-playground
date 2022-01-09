import React from 'react'
type IProps = {

}

type IState = {
  isToggleOn: boolean,
  isToggleOnWithoutBind: boolean
}
class Toggle extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { isToggleOn: false, isToggleOnWithoutBind: false }
    this.handleTooggle = this.handleTooggle.bind(this)
    /*
      You have to be careful about the meaning of this in JSX callbacks. 
      In JavaScript, class methods are not bound by default. 
      If you forget to bind this.handleClick and pass it to onClick, 
      this will be undefined when the function is actually called.

      This is not React-specific behavior; 
      it is a part of how functions work in JavaScript. 
      Generally, if you refer to a method without () after it, 
      such as onClick={this.handleClick}, you should bind that method.
    */
  }

  handleTooggle() {
    this.setState({ isToggleOn: !this.state.isToggleOn })
    console.log("🚀 ~ file: 6_HandlingEvents.tsx ~ line 18 ~ Toggle ~ handleTooggle ~ this.state.isToggleOn", this.state.isToggleOn)
  }

  handleToggleWithoutBind = () => {
    this.setState({ isToggleOnWithoutBind: !this.state.isToggleOnWithoutBind })
    console.log("🚀 ~ file: 6_HandlingEvents.tsx ~ line 35 ~ Toggle ~ this.state.isToggleOnWithoutBind", this.state.isToggleOnWithoutBind)

  }

  render(): React.ReactNode {
    return (
      <>
        <button onClick={this.handleTooggle}>
          {this.state.isToggleOn ? 'On' : 'Off'}
        </button>

        <button onClick={this.handleToggleWithoutBind}>
          {this.state.isToggleOnWithoutBind ? 'On' : 'Off'}
        </button>
      </>
    )
  }

}

export default Toggle