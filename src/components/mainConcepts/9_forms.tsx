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
      <div className="my-4">
        < form onSubmit={this.handleSubmit} className="flex " >
          <input type="text" className="rounded-2xl p-3 m-1 hover:bg-neutral-100" value={this.state.value} onChange={this.handleChange} placeholder="Type something 😛" />
          <input type="submit" className=" m-1  text-blue-600  hover:font-bold" value="Submit" />
        </form >
      </div >
    )
  }
}

export default Forms

// Use formik