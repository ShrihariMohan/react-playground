type IProps = {
  temperature: number
}

function BoilingVerdict(props: IProps) {
  if (props.temperature > 99) return <> Boiling Water</>
  else return <> Not Boiling water</>
}

export default BoilingVerdict