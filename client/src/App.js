import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import FormWithFormik from './components/form.js'
import NewUsers from './components/newUsers.js'
import LoginWithFormik from './loginForm.js'

class App extends React.Component {
  constructor(){
    super()
  }

  render(){
  return (
    <div className='App'>
      <FormWithFormik/>
       <NewUsers />
      {/* <Route exact path="/registration/" component={FormWithFormik} /> */}
      {/* <Route exact path="/login/" component={LoginWithFormik} />
      <Route exact path="/recipes/" component={NewUsers} /> */}
    </div>
  );}
}

export default App;
