import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    console.log(email);
    return (
      <div>
        <p>Despesa: 0 </p>
        <p data-testid="email-field">
          Usuario:
          { email }
        </p>
        <p data-testid="header-currency-field"> Cambio: </p>
      </div>
    );
  }
}
Header.propTypes = {
  email: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
