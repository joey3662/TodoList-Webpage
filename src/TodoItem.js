import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const {content}=  this.props;
    return (
      <div onClick = {this.handleClick}>
        {content}
      </div>
    )
  }
  handleClick() {
    const {delteItem, index}= this.props;
    delteItem(index);
    // this.props.deleteItem(this.props.index);
    // alert(this.props.index);
  }
}
// limit the input values from superclass (TodoList.js)
TodoItem.propTypes= {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}
export default TodoItem;
