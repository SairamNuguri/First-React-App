import React, { Component } from 'react';
import NavBar from './component/navbar';
import './App.css';
//import NavBar from './component/navbar';
import Counters from './component/counters';


class App extends Component {

  state = { 
    counters : [
        {id : 1, value : 0},
        {id : 2, value : 0},
        {id : 3, value : 0},
        {id : 4, value : 0}
    ],
    s:0
 };

 handleIncrement = counter =>{
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({counters});
    this.totalCounters();
 };

 handleDelete = counterId =>{
     //console.log('Event Handler called',counterId);
     const counters = this.state.counters.filter(c => c.id !== counterId);
     this.setState({counters});
 };

 handleReset = () =>{
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
 };

  totalCounters = () => {
    
   this.setState({s:this.state.s+1})
   //console.log(this.state.s)
   //return this.state.s
 }

 

  render(){
    return (
      <React.Fragment>
      <NavBar totalCounters = {this.state.s} /> 
      
      <main className = 'container'>
      <Counters 
      counters = {this.state.counters}
      onReset = {this.handleReset}
      onIncrement = {this.handleIncrement}
      onDelete = {this.handleDelete}
      />
      </main>
      </React.Fragment>
    )
  }
}

export default App;
