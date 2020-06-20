import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

///Import the components
import NavMenu from './components/NavMenu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       <NavMenu/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
