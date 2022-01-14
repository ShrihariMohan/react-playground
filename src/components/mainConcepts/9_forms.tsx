import React from "react"

type IProps = {

}

type IState = {
  value: string
}

class Forms extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = { value: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    console.log("🚀 ~ file: 9_forms.tsx ~ line 21 ~ Forms ~ handleSubmit ~ event")
    event.preventDefault()
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value })
    console.log("🚀 ~ file: 9_forms.tsx ~ line 26 ~ Forms ~ handleChange ~ event.target.value", event.target.value)

  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }
}

export default Forms

// Use formik