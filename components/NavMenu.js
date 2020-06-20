import React, { Component } from 'react';

class NavMenu extends Component {
  constructor(props){
    super(props)
    this.state = {
      logo: 'https://surrender.tk/img/logo-flag.png',
      logoName: 'Surrender.GG',
      home: 'Home'
    }

    this.menu = {
      home: 'home.php'
    }
  }


  render(){
    return (
      <nav>
        <div className="logoname">
          <img src={this.state.logo} alt="logo"/> <span className="name">{this.state.logoName}</span>
        </div>
        <div className="right">
          <a href={this.menu.home}>{this.state.home}</a>
          <a href="">Pricing</a>
          <a href="">About us</a>
        </div>
      </nav>
    );
  }
}

export default NavMenu;