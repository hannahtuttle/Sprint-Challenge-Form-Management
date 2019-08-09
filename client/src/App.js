import React from 'react';
import './App.css';

import FormWithFormik from './components/form.js'

class App extends React.Component {
  constructor(){
    super()
  }

  render(){
  return (
    <div>
      <FormWithFormik/>
    </div>
  );}
}

export default App;
