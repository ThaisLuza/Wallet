import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <p data-testid="email-field"> Aqui vai o email</p>
        <p> 0 </p>
        <p data-testid="header-currency-field"> Cambio: </p>
      </div>
    );
  }
}

export default Header;
