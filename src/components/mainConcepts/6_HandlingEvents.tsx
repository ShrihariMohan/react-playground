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
      <div className='my-6 '>
        <p> The below button shows how a <span className='text-blue-600 font-semibold'>Primary</span>, <span className='text-green-600 font-semibold'>Secondary</span> and <span className='text-red-600 font-semibold'>Tertiary</span> can be. <span className='font-semibold'> Its not colors always</span></p>
        <div className='flex align-middle text-center'>
          <div className='flex flex-col mx-4'>
            <button onClick={this.handleTooggle} className='bg-gray-600 text-white rounded-xl px-4 py-3 m-2'>
              {this.state.isToggleOn ? 'Primary  On' : 'Primary Off'}
            </button>
            <small>Binded handleToggle()</small>
          </div>

          <div className='flex flex-col mx-4'>
            <button onClick={this.handleToggleWithoutBind} className='border border-gray-400  rounded-xl px-4 py-3 m-2'>
              {this.state.isToggleOnWithoutBind ? 'Secondary On' : 'Secondary Off'}
            </button>
            <small>Arrow function (no bind)</small>

          </div>

          <div className='flex flex-col align-middle mx-4'>
            <button className='font-semibold  px-4 py-3 m-2'> Tertiary </button>
            <small> No handleClick()</small>
          </div>

        </div>
      </div>
    )
  }

}

export default Toggle