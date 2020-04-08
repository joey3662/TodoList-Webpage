import React, { Component, Fragment} from 'react';
import './style.css';

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state= {
      inputValue: '',
      list: []
    }
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
              onChange = {this.handleInputChange.bind(this)}
            / >
            <button onClick = {this.handleOnClick.bind(this)}>Submit</button>
          </div>
          <ul>
              {
                this.state.list.map((item, index) => {
                  return (
                    <li
                      key= {index}
                      onClick = {this.handleItemDelte.bind(this, index)}
                      dangerouslySetInnerHTML= {{__html: item}}
                    >
                    </li>
                  )
                })
              }
          </ul>
      </Fragment>
    )
  }
  handleInputChange(e){
    // console.log(this);
    // this.state.inputValue=e.target.value;
    // console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })

  }
  handleOnClick(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleItemDelte(index){
    // React => state immutable
    // console.log(index)
    const list= [...this.state.list];
    list.splice(index,1);
    this.setState({
      list: list
    })
  }
}


export default TodoList;
