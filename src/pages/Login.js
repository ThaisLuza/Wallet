import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm() {
    const { history } = this.props;
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, senha, isDisabled } = this.state;
    return (
      <fieldset>
        <Input
          data-testid="email-input"
          label="email: "
          type="email"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          data-testid="password-input"
          minlength="6"
          label="senha: "
          type="password"
          onChange={ this.handleChange }
          value={ senha }
          name="senha"
          required
        />
        <Button
          type="submit"
          label="Entrar"
          disabled={ isDisabled }
          onClick={ this.onSubmitForm }
        />
      </fieldset>
    );
  }
}
export default Login;
