import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
    state={
        value:"Luis Fonsi"
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        console.log(this.input.value, "submit");
    }
    setRef = element=>{
        this.input = element;
    }
    handleInputChange=e=>{
        this.setState(
            {
                value: e.target.value.replace(' ', '+')
            }
        )
    }
    render() {
    return (
      <Search 
      setRef ={this.setRef}
      handleSubmit={this.handleSubmit}
      handleChange={this.handleInputChange}
      value={this.state.value}
      />
    )
  }
}

export default SearchContainer;