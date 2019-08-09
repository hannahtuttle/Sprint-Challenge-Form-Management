import React from 'react';
import './App.css';

import FormWithFormik from './components/form.js'
import NewUsers from './components/newUsers.js'

class App extends React.Component {
  constructor(){
    super()
  }

  render(){
  return (
    <div>
      <FormWithFormik/>
      <NewUsers />
    </div>
  );}
}

export default App;
