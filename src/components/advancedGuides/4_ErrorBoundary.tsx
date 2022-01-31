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

  componentDidCatch(err: Error, errInfo: ErrorInfo) {
    console.log("🚀 ~ file: 4_ErrorBoundary.tsx ~ line 6 ~ ErrorBoundaries ~ componentDidCatch ~ errInfo", errInfo)
    console.log("🚀 ~ file: 4_ErrorBoundary.tsx ~ line 6 ~ ErrorBoundaries ~ componentDidCatch ~ err", err)
  }

  static getDerivedStateFromError(_: Error) {
    // Update state so the next render will show the fallback UI.
    return ({ hasError: true })
  }

  render(): React.ReactNode {
    const hasError = this.state.hasError
    return (
      <>
        {hasError ? ' This is an error component' : 'no error '}
      </>
    )
  }

}

export default ErrorBoundaries