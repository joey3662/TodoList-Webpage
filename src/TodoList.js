import React, { Component, Fragment} from 'react';
import TodoItem from './TodoItem'
import './style.css';

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state= {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete= this.handleItemDelete.bind(this);
  }

  render(){
    return(
      <Fragment>
        {/*Create Comment*/}
          <div>
            <label htmlFor='insertArea'>Input Task </label>
            <input
              id= 'insertArea'
              className='input'
              value = {this.state.inputValue}
              onChange = {this.handleInputChange}
            / >
            <button onClick = {this.handleBtnClick}>Submit</button>
          </div>
          <ul>
              {this.getTodoItem()}
          </ul>
      </Fragment>
    )
  }
  getTodoItem(){
    return this.state.list.map((item, index) => {
      return (
// 
          <TodoItem
            key= {index}
            content = {item}
            index= {index}
            delteItem={this.handleItemDelete}
          />

      )
    })
  }
  handleInputChange(e){
    // console.log(this);
    // this.state.inputValue=e.target.value;
    // console.log(e.target.value)
    const value=e.target.value;
    this.setState(()=>({
      inputValue: value
    }));
    // this.setState({
    //   inputValue: e.target.value
    // })

  }
  handleBtnClick(){
    this.setState((prevState)=>({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }));
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }
  handleItemDelete(index){
    // React => state immutable
    // console.log(index)
    this.setState((prevState)=>{
      const list= [...prevState.list];
      list.splice(index, 1);
      return {list}
    });
    // const list= [...this.state.list];
    // list.splice(index,1);
    // this.setState({
    //   list: list
    // })
  }
}


export default TodoList;
