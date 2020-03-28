import React, { Component } from 'react'
import Person from './Person/Person'

import './App.css';
import './Person/Person.css'

class App extends Component {
  state = {
    persons :  [
      {name:'Aliou', age:'40', hobby:'travelling'},
      {name:'Titi', age:'37',  hobby:'reading'}
    ],
    count: 0
  }


  togglePersonHandler = () => {

    
  }
  switchNameHandler = () => {
    setTimeout(() => {
      this.setState({
        persons: [
        {name:'Damus', age:'41', hobby:'Music'},
        {name:'Ina', age:'37',  hobby:'travelling'}
      ]});
    }, 1000)

  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
      {name:'Damus', age:'41', hobby:'Music'},
      {name: event.target.value, age:'37',  hobby:'travelling'}
    ]});
  }

incrementCount = () => {
 this.setState({
   count: this.state.count + 1
 });

}
 getInitialSatet = () => {
   return {
     count: 0
   }
 }
  render() {

  const style = {
   backgroundColor: 'White',
   font: 'inherit',
   border: '1px solid blue',
   padding: '8px',
   cursor: 'pointer'
  };
    return (
      <div className="App">
        <header className="App-header">
          <h1 >Hi, I am a React App</h1>
          <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
          <div id="person">
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Alfordville')}
            changed={this.nameChangeHandler}>
            My hobbies: {this.state.persons[0].hobby}</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}>
            My hobbies: {this.state.persons[1].hobby}</Person>
          </div>

            <button onClick={this.incrementCount}>{this.state.count}</button>
        </header>
      </div>
    );
  }
}

export default App;
