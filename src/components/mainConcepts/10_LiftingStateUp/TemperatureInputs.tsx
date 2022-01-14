const scale = {
  c: 'c',
  k: 'k'
}

type IProps = {
  scale: string,
  temperature: number,
  onTemperatureChange: Function
}

function TemperatureInput(props: IProps) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value)
    props.onTemperatureChange(val)
  }
  return (
    <>
      <label> Enter temperature in {props.scale == 'c' ? 'celsius ' : 'kelvin '} son</label>
      <input type="number" value={props.temperature} name="temperature" onChange={handleChange}></input>
    </>
  )



}

export default TemperatureInput