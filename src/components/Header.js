import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/header.css';

class Header extends React.Component {
  render() {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, cur) => {
      const moeda = cur.exchangeRates[cur.currency].ask;
      const mult = (cur.value * moeda).toFixed(2);
      return acc + Number(mult);
    }, 0);
    const { email } = this.props;
    return (
      <div className="header">
        <div className="logo">
          <h1>TrybeWallet</h1>
          <img
            src="https://images.vexels.com/media/users/3/157107/isolated/preview/ccd65f02db5b04645112801d922cdffe-icones-de-viagens-do-icone-da-carteira.png"
            alt="carteira"
          />
        </div>
        <div className="email">
          {' '}
          <p data-testid="email-field">
            Email:
            {' '}
            {email}
          </p>
          <p data-testid="total-field">
            Despesas Totais:
            {' '}
            {total}
          </p>
          <p data-testid="header-currency-field"> BRL </p>
        </div>
      </div>
    );
  }
}
Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
