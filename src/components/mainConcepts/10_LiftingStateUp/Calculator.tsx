import React from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInputs'

type IProps = {}
type IState = {
  temperature: number,
  scale: string
}

class Calculator extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { temperature: 0, scale: 'c' } // this is a top level state and handleState passed to children
    // where children can call this methods in their component
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    this.setState({ temperature: value })
  }

  handleCelsiusChange = (temperature: number) => {
    this.setState({ scale: 'c', temperature })
  }

  handleKelvinChange = (temperature: number) => {
    this.setState({ scale: 'k', temperature })
  }

  calculateCelsiusValFromState = () => {
    return this.state.scale == 'c' ? this.state.temperature : this.state.temperature - 273
  }

  calculateKelvinValFromState = () => {
    return this.state.scale == 'k' ? this.state.temperature : this.state.temperature + 273
  }

  render(): React.ReactNode {
    const celsiusValue = this.calculateCelsiusValFromState()
    const kelvinValue = this.calculateKelvinValFromState()
    return (
      <>
        <TemperatureInput scale='c' temperature={celsiusValue} onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput scale='k' temperature={kelvinValue} onTemperatureChange={this.handleKelvinChange} />
        <BoilingVerdict temperature={celsiusValue} />
      </>
    )
  }

}

export default Calculator