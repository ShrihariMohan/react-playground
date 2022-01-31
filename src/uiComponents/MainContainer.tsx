
type IProps = {
  children: JSX.Element
}

function MainContainer(props: IProps) {
  return (
    <div className="bg-slate-100 rounded-2xl p-4 max-w-xl my-4 mx-auto">
      {props.children}
    </div>
  )
}

export default MainContainer