import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Input from './Input';
import { API, fetchAPI } from '../actions';

class ExpensesForm extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      despesa: '',
      descricao: '',
      moeda: 'USD',
      metodo: 'Dinheiro',
      tag: '',
      todasMoedas: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => this.setState({ todasMoedas: Object.keys(data) }));
  }

  onSubmitForm() {
    const { dispatchDespesas } = this.props;
    const { id, despesa, descricao, moeda, metodo, tag } = this.state;
    dispatchDespesas({ id, despesa, descricao, moeda, metodo, tag });
    this.setState((prevState) => ({
      id: prevState.id + 1,
      despesa: '',
      descricao: '',
      moeda: 'USD',
      metodo: 'Dinheiro',
      tag: 'Alimentação',
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
    // const { listaDespesas } = this.props;
    const { despesa, descricao, moeda, metodo, tag, todasMoedas } = this.state;
    return (
      <div>
        <label htmlFor="despesa">
          Despesa
          <input
            type="text"
            onChange={ this.handleChange }
            value={ despesa }
            name="despesa"
            required
            data-testid="value-input"
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            onChange={ this.handleChange }
            value={ descricao }
            name="descricao"
            required
            data-testid="description-input"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            name="moeda"
            id="moeda"
            data-testid="currency-input"
            value={ moeda }
            onChange={ this.handleChange }
          >
            {' '}
            {todasMoedas
              && todasMoedas.map(
                (data, key) => data !== 'USDT'
                  && <option key={ key }>{data}</option>,
              )}
          </select>
        </label>

        <label htmlFor="metodo">
          Método de pagamento
          <select
            name="metodo"
            id="metodo"
            data-testid="method-input"
            value={ metodo }
            onChange={ this.handleChange }
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="cartaoCredito">Cartão de crédito</option>
            <option value="cartaoDebito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Categoria
          <select
            name="tag"
            id="tag"
            data-testid="tag-input"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
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
  // listaDespesas: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  listaDespesas: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDespesas: (obj) => dispatch(fetchAPI(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
