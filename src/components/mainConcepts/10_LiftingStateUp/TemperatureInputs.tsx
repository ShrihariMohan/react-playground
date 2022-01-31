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
  const placeholder = props.scale === 'c' ? 'Temperature in Celsius ℃' : 'Temperature in Kelvin K'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value)
    props.onTemperatureChange(val)
  }
  return (
    <div className="flex text-center justify-center">
      <input type="number" className=" rounded-2xl w-1/2 p-3 m-2 border border-transparent  hover:border-neutral-600" value={props.temperature}
        name="temperature" onChange={handleChange} placeholder={placeholder} />
      <p className="self-center">
        In
        <span className="text-cyan-600"> {props.scale === 'c' ? '℃' : 'K'}</span>
      </p>
    </div>
  )



}

export default TemperatureInput