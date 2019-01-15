import React, { Component } from 'react'
import './App.css';
import TaskForm from './components/TaskForm';

class App extends Component {
  
  render() {
    return (
      <div className='form__container'>
        <TaskForm></TaskForm>
      </div>
    )
  }
}
export default App