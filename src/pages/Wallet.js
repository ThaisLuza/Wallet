import React from 'react';
import ExpensesForm from '../components/ExpensesForm';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpensesForm />
        <Table />
      </div>
    );
  }
}
// Wallet.propTypes = {
//   email: PropTypes.objectOf(PropTypes.string).isRequired,
// };

// const mapStateToProps = (state) => ({
//   email: state.user.email,
// });

export default Wallet;
