import React from "react"

type IProps = {
  WrappedComponent: React.ElementType
}

function loggingProps(props: IProps) {
  console.log("🚀 ~ file: LogginProps.tsx ~ line 8 ~ loggingProps ~ props", props)
  class LogProps extends React.Component<IProps> {

    componentDidUpdate(prev: IProps) {
      console.log('old props:', prev);
      console.log('new props:', this.props);
    }

    render() {
      return <props.WrappedComponent {...this.props} />
    }

  }
  return LogProps
}

export default loggingProps

