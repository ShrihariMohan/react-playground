import React from "react";

type IProps = {
  words: string[]
}

type IState = {
  words: string[]
}

class ListOfWords extends React.PureComponent<IProps> {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

export class WordAdder extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This section is bad style and causes a bug
    const words = this.state.words;
    words.push('marklar');
    this.setState({ words: words });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} />
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}