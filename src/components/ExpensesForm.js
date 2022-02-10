import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import { createExpense } from '../actions';

class ExpensesForm extends Component {
  constructor() {
    super();

    this.state = {
      despesa: 0,
      descricao: '',
      moeda: '',
      metodo: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  // handleChange({ target }) {
  //   const { name, value } = target;
  //   this.setState({ [name]: value });
  // }

  onSubmitForm() {
    const { dispatchDespesas } = this.props;
    const { despesa, descricao, moeda, metodo, tag } = this.state;
    dispatchDespesas({ despesa, descricao, moeda, metodo, tag });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.onSaveButton);
  }

  render() {
    const { despesa, descricao, moeda, metodo, tag } = this.state;
    return (
      <div>
        <Input
          label="Adicionar despesa: "
          type="text"
          onChange={ this.handleChange }
          value={ despesa }
          name="despesa"
          required
          data-testid="value-input"
        />
        <Input
          label="Descrição da despesa: "
          type="text"
          onChange={ this.handleChange }
          value={ descricao }
          name="descricao"
          required
          data-testid="description-input"
        />
        <Input
          label="Moeda: "
          type="text"
          onChange={ this.handleChange }
          value={ moeda }
          name="moeda"
          required
          data-testid="currency-input"
        />
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
        <button
          onClick={ this.onSubmitForm }
          type="submit"
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

ExpensesForm.propTypes = {
  dispatchDespesas: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchDespesas: (payload) => dispatch(createExpense(payload)),
});

export default connect(null, mapDispatchToProps)(ExpensesForm);
