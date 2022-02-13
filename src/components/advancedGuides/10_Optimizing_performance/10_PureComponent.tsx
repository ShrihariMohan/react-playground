import React from "react"
type IProps = { color: string }
type IState = { color: string }


export class NotPureComponentExample extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { color: 'black' }

  }

  componentDidUpdate() {
    console.log("Hey i will update this component eventhough it does not need to be updated")

  }

  render(): React.ReactNode {
    return (
      <>
        This is a {this.props.color} text
      </>
    )
  }

}

export class ThisIsAPureComponent extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { color: 'black' }

  }

  componentDidUpdate() {
    console.log("Hey i will update this component eventhough it does not need to be updated")
  }

  render(): React.ReactNode {
    return (
      <>
        This is a {this.props.color} text
      </>
    )
  }
}

