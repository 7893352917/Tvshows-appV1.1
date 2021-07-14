import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
//Components
import { NavBar } from './components/NavBar';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import SingleShow from './pages/SingleShow';

function App() {
  return (
    <Router className="App">
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/singleshow/:id" component={SingleShow} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
