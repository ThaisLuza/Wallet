import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { API, fetchAPI } from '../actions';
import '../styles/expenses.css';

class ExpensesForm extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
      todascurrencys: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => this.setState({ todascurrencys: Object.keys(data) }));
  }

  onSubmitForm() {
    const { dispatchDespesas } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    dispatchDespesas({ id, value, description, currency, method, tag });
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
    }));
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      this.onSaveButton,
    );
  }

  render() {
    const { value, description, currency, method, tag, todascurrencys } = this.state;
    return (
      <div className="expenses">
        <label htmlFor="value">
          Despesa
          <input
            type="text"
            onChange={ this.handleChange }
            value={ value }
            name="value"
            required
            data-testid="value-input"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input
            type="text"
            id="description-input"
            onChange={ this.handleChange }
            value={ description }
            name="description"
            required
            data-testid="description-input"
          />
        </label>
        <label htmlFor="currency-input">
          Moeda
          <select
            name="currency"
            id="currency-input"
            data-testid="currency-input"
            value={ currency }
            onChange={ this.handleChange }
          >
            {' '}
            {todascurrencys
              && todascurrencys.map(
                (data, key) => data !== 'USDT'
                  && <option key={ key }>{data}</option>,
              )}
          </select>
        </label>

        <label htmlFor="method-input">
          Método de pagamento
          <select
            name="method"
            id="method-input"
            data-testid="method-input"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de Crédito">Cartão de crédito</option>
            <option value="Cartão de Débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Categoria
          <select
            name="tag"
            id="tag-input"
            data-testid="tag-input"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button onClick={ this.onSubmitForm } type="submit">
          Adicionar despesa
        </button>
      </div>
    );
  }
}

ExpensesForm.propTypes = {
  dispatchDespesas: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  listaDespesas: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDespesas: (obj) => dispatch(fetchAPI(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
