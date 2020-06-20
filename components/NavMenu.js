import React, { Component } from 'react';

class NavMenu extends Component {
  constructor(props){
    super(props)
    this.state = {
      logo: 'https://surrender.tk/img/logo-flag.png'
    }
    this.menu = {
      home: "Főoldal"
    }
  }


  render(){
    return (
      <nav>
        <img src={this.state.logo} alt="logo"/>
        <div className="right">
          <a href="">{this.menu.home}</a>
          <a href="">Pricing</a>
          <a href="">About us</a>
        </div>
      </nav>
    );
  }
}

export default NavMenu;