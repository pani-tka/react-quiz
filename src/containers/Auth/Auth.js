import React, {Component} from "react";
import styles from './Auth.module.css';
import Button from "../../components/UI/Button/Button";

export default class Auth extends Component {

  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className={styles.Auth}>
        <div>
          <h1>Auth</h1>
          <form onSubmit={this.submitHandler} className={styles.AuthForm}>
            <input type="text"/>
            <input type="text"/>
            <Button
              type="success"
              onClick={this.loginHandler}
            >
              Log in
            </Button>
            <Button
              type="primary"
              onClick={this.registerHandler}
            >
              Registration
            </Button>
          </form>
        </div>
      </div>
    )
  }

}
