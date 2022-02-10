import React, { Component } from 'react';
import Input from './Input';

class ExpensesForm extends Component {
  render() {
    return (
      <div>
        <Input
          label="Adicionar despesa: "
          type="text"
          // onChange={this.handleChange}
          // value={addDespesa}
          name="addDespesa"
          required
          data-testid="value-input"
        />
        <Input
          label="Descrição da despesa: "
          type="text"
          // onChange={this.handleChange}
          // value={descricaoDespesa}
          name="descricaoDespesa"
          required
          data-testid="description-input"
        />
        <Input
          label="Moeda: "
          type="text"
          // onChange={this.handleChange}
          // value={descricaoDespesa}
          name="moeda"
          required
          data-testid="currency-input"
        />
        <label htmlFor="metodoPag">
          Método de pagamento
          <select
            name="metodoPag"
            id="metodoPag"
            data-testid="method-input"
            // value={cardRare}
            // onChange={onInputChange}
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="cartaoCredito">Cartão de crédito</option>
            <option value="cartaoDebito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Categoria
          <select
            name="categoria"
            id="categoria"
            data-testid="tag-input"
            // value={cardRare}
            // onChange={onInputChange}
          >
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar despesa</button>
      </div>
    );
  }
}

export default ExpensesForm;
