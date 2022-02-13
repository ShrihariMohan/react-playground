import React from "react";
import * as DataSource from '../../../service/DataSource'
type IProps = {
}

type IState = {
  comments: any
}


class CommentList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // "DataSource" is some global data source
      comments: DataSource.getComments()
    };
  }

  componentDidMount() {
    // Subscribe to changes
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // Clean up listener
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    // Update component state whenever the data source changes
    this.setState({
      comments: DataSource.getComments()
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment: any) => (
          <Comment comment={comment} key={comment} />
        ))}
      </div>
    );
  }
}

function Comment(props: any) {
  return (
    <>
      <p> {props.comment}</p>
    </>
  )
}

export default CommentList