import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, cur) => {
      const moeda = cur.exchangeRates[cur.moeda].ask;
      const mult = (cur.despesa * moeda).toFixed(2);
      return acc + Number(mult);
    }, 0);
    const { email } = this.props;
    return (
      <div>
        <p data-testid="total-field">{ total }</p>
        <p data-testid="email-field">
          Usuario:
          {email}
        </p>
        <p data-testid="header-currency-field"> BRL </p>
      </div>
    );
  }
}
Header.propTypes = {
  email: PropTypes.objectOf(PropTypes.string).isRequired,
  expenses: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
