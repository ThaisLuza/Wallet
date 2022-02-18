import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { login } from '../actions/index';
import '../style/login.css';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm() {
    const { history, dispatchEmail } = this.props;
    const { email } = this.state;
    dispatchEmail(email);
    history.push('/carteira');
  }

  disableButton(email, senha) {
    const minLength = 6;
    const senhaValida = senha.length >= minLength;
    const codeValidar = /\S+@\S+\.\S+/;
    const emailValido = codeValidar.test(email);
    const habilitarBotao = !emailValido || !senhaValida;
    return habilitarBotao;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, senha } = this.state;
    return (
      <fieldset>
        <h1>TrybeWallet</h1>
        <Input
          label="email: "
          type="email"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
          datatestid="email-input"
        />
        <Input
          minLength="6"
          label="senha: "
          type="password"
          onChange={ this.handleChange }
          value={ senha }
          name="senha"
          required
          datatestid="password-input"
        />

        <button
          type="submit"
          disabled={ this.disableButton(email, senha) }
          onClick={ this.onSubmitForm }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

Login.propTypes = {
  dispatchEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(login(email)),
});

export default connect(null, mapDispatchToProps)(Login);
