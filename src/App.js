import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Permissions, Permit} from './components/Permissions/index.jsx';
import AddRules from './Rules.js';

const [ADMIN, USER, GUEST] = [0,1,2]

class App extends Component {
  state = {
    role: USER,
    deal: { status: 'created' }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Permissions>
            <AddRules />
            <h3>Set Role</h3>
            <a onClick={(e) => this.setState({ role: ADMIN })}>Admin</a>
            <a onClick={(e) => this.setState({ role: USER })}>User</a>
            <a onClick={(e) => this.setState({ role: GUEST })}>Guest</a>
            <h3>Set Deal Status</h3>
            <a onClick={(e) => this.setState({ deal: {status: "created"}})}>Created</a>
            <a onClick={(e) => this.setState({ deal: {status: "paid_out"}})}>Paid Out</a>
            <h2>Deal</h2>
            <Permit name="canAddBorrower" render={() => (
              <h3>You can add borrower!</h3>
            )} />
            <Permit name="isGuest" render={() => (
              <h3>You are a guest!</h3>
            )} />

          </Permissions>
      </div>
    );
  }
}

export default App;
