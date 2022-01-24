import React from 'react'
function Login() {
  return (
    <>
      <p className='text-lg'> Click the below button to sign in as guest (😆)</p>
    </>
  )
}

function Welcome() {
  return (
    <p> Welcome Guest user 😉 <span className='text-sm font-semibold '>(Short circuit operators are widely used in react)</span></p>
  )
}

type IWarningProps = {
  isWarning: boolean
}
class Warning extends React.Component<IWarningProps> {

  constructor(props: IWarningProps) {
    super(props)
  }

  /*
    Returning null from a component’s render method does not affect the 
    firing of the component’s lifecycle methods. 
    For instance componentDidUpdate will still be called.
  */

  componentDidMount() {
    // console.log("🚀 ~ file: 7_ConditionalRendering.tsx ~ line 29 ~ Warning ~ componentDidMount ~ componentDidMount")

  }

  componentDidUpdate() {
    //  console.log("🚀 ~ file: 7_ConditionalRendering.tsx ~ line 28 ~ Warning ~ componentDidUpdate ~ componentDidUpdate")

  }

  render() {
    const isWarning = this.props.isWarning
    return <>
      {isWarning ? <p className='text-yellow-600 text-sm font-bold'> This is a warning man </p> : null}
    </>
  }
}

type IButtonProps = {
  handleClick: any
}

function LoginButton(props: IButtonProps) {
  return (
    <>
      <button onClick={props.handleClick} className='bg-blue-600 text-white rounded-xl px-4 py-3 m-2 w-32'>
        Log in
      </button>
    </>
  )
}

function LogoutButton(props: IButtonProps) {
  return (
    <>
      <button onClick={props.handleClick} className='bg-red-50 text-red-600  rounded-xl px-4 py-3 m-2 w-32' >
        Log out
      </button>
    </>
  )
}

type IPropsHomePage = {
  isLoggedIn: boolean
}

type IStateHomePage = {
  isLoggedIn: boolean
}

class HomePage extends React.Component<IPropsHomePage, IStateHomePage>{

  constructor(props: IPropsHomePage) {
    super(props)
    this.state = { isLoggedIn: this.props.isLoggedIn }
  }

  handleClickLogin = () => {
    this.setState({ isLoggedIn: true })
  }

  handleClickLogout = () => {
    this.setState({ isLoggedIn: false })
  }

  // render() {
  //   const isLoggedIn = this.state.isLoggedIn
  //   let button;
  //   if (isLoggedIn) button = <LogoutButton handleClick={this.handleClickLogout} />
  //   else button = <LoginButton handleClick={this.handleClickLogin} />
  //   if (isLoggedIn) return (
  //     <>
  //       <Welcome />
  //       {button}
  //     </>
  //   )
  //   else return (
  //     <>
  //       <Login />
  //       {button}
  //     </>
  //   )
  // }

  /*
    The above render() seprated html and javascript seperately. Like button is seperated from <Welcome/> and
    hence use the below syntax ( ? : ) for better readability. 
    Inline if else is ?: (conditonal operator)
    
    Here Below at line 99 it has 2 elements , 
    just make it as seperate component and use is here to reduce complexity
  */

  render(): React.ReactNode {
    const isLoggedIn = this.state.isLoggedIn
    return (
      <div className='my-4'>
        <p>
          {isLoggedIn && <p className='text-lg'>This example has <span className='font-semibold'>Conditionally Rendered </span> components and texts</p>}
        </p>

        {
          isLoggedIn ?
            <>
              <Welcome />
              <LogoutButton handleClick={this.handleClickLogout} />
            </> :
            <>
              <Login />
              <LoginButton handleClick={this.handleClickLogin} />
            </>
        }
        <Warning isWarning={isLoggedIn} />
      </div>
    )
  }

  /* The <p> here represent the inline if , 
  haha big suprise this just short circuit operators */

}

export default HomePage