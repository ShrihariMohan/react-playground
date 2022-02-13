import React, { ErrorInfo } from "react"

type IProps = {}
type IState = {
  hasError: boolean
}



class ErrorBoundaries extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error) {
    console.log("🚀 ~ file: 4_ErrorBoundary.tsx ~ line 23 ~ ErrorBoundaries ~ getDerivedStateFromError ~ _", _)
    // Update state so the next render will show the fallback UI.

    return ({ hasError: true })
  }


  componentDidCatch(err: Error, errInfo: ErrorInfo) {
    console.log("🚀 ~ file: 4_ErrorBoundary.tsx ~ line 6 ~ ErrorBoundaries ~ componentDidCatch ~ errInfo", errInfo)
  }

  componentDidUpdate() {
    console.log("🚀 ~ file: 4_ErrorBoundary.tsx ~ line 30 ~ ErrorBoundaries ~ componentDidUpdate ~ componentDidUpdate")

  }



  render(): React.ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }


}

export default ErrorBoundaries