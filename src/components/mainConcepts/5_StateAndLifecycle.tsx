import React from 'react'

type IProps = {
  increment: number
}
type IState = {
  counter: number
}

export class TickingClock extends React.Component<IProps, IState> {
  timerId: any;
  counter: number = 0
  constructor(props: IProps) {
    super(props)
    this.state = { counter: this.counter }
    // The only place where you can assign ('=' use equal) this.state is the constructor.

  }
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick() {
    if (this.props.increment == 1)
      this.setState({ counter: ++this.counter })
    else {
      this.setState((previousState, props) => ({
        counter: previousState.counter + props.increment
      }))
    }
  }

  render(): React.ReactNode {
    return (
      <>
        <p> this timer is now active {this.state.counter}, rendered using class components</p>
      </>
    )
  }
}

/*
Neither parent nor child components can know if a certain component is stateful or stateless, 
and they shouldn’t care whether it is defined as a function or a class.

This is why state is often called local or encapsulated. 
It is not accessible to any component other than the one that owns and sets it.

This is commonly called a “top-down” or “unidirectional” data flow. 
Any state is always owned by some specific component, 
and any data or UI derived from that state can only affect components “below” them in the tree.
*/