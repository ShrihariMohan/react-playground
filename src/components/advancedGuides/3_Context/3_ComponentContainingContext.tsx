import React from "react";
import { ThemeContext } from "./3_Context";

class ComponentContainingContext extends React.Component {
  static contextType = ThemeContext
  render() {
    throw new Error('hello')

    return (
      <div>
        Hello there {this.context}
      </div>
    )
  }
}

export default ComponentContainingContext