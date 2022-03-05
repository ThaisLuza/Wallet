import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { login } from '../actions/index';
import '../styles/login.css';

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
      <div className="divLogin">
        <fieldset>
          <img
            src="https://images.vexels.com/media/users/3/157107/isolated/preview/ccd65f02db5b04645112801d922cdffe-icones-de-viagens-do-icone-da-carteira.png"
            alt="carteira"
          />
          <h1>TrybeWallet</h1>
          <Input
            label="Email: "
            type="email"
            onChange={ this.handleChange }
            value={ email }
            name="email"
            required
            datatestid="email-input"
          />
          <Input
            minLength="6"
            label="Senha: "
            type="password"
            onChange={ this.handleChange }
            value={ senha }
            name="senha"
            required
            datatestid="password-input"
          />

          <button
            className={ this.disableButton(email, senha) ? 'disabled' : 'enabled' }
            type="submit"
            disabled={ this.disableButton(email, senha) }
            onClick={ this.onSubmitForm }
          >
            Entrar
          </button>
        </fieldset>
      </div>
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
