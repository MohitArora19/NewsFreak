import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



export default class App extends Component {

  state = {
    progress:0
  }
  setProgress(progress){
    this.setState({progress: progress})
  }
  render() {
    return (
      <Router>
        <>
      <NavBar/>
      <Switch>
          <Route exact path="/"><News key='General' pageSize = '10' country='in' category = 'General'/></Route>
          <Route exact path="/Business"><News key = 'Buisness'pageSize = '10' country='in' category = 'Business'/></Route>
          <Route exact path="/Entertainment"><News key='Entertainment' pageSize = '10' country='in' category = 'Entertainment'/></Route>
          <Route exact path="/General"><News key = 'General'pageSize = '10' country='in' category = 'General'/></Route>
          <Route exact path="/Health"><News key = 'Health'pageSize = '10' country='in' category = 'Health'/></Route>
          <Route exact path="/Science"><News key='Science' pageSize = '10' country='in' category = 'Science'/></Route>
          <Route exact path="/Sports"><News key='Sports'pageSize = '10' country='in' category = 'Sports'/></Route>
          <Route exact path="/Technology"><News key ='Technology'pageSize = '10' country='in' category = 'Technology'/></Route>
        </Switch>
        </>
      </Router>
    )
  }
}

