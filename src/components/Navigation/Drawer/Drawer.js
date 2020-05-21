import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import styles from './Draver.module.css';
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
  {to: '/', label: 'List', exact: true},
  {to: '/auth', label: 'Log in', exact: false},
  {to: '/quiz-creator', label: 'Create quiz', exact: false},
];

class Drawer extends Component {

  clickHandler = () => {
    this.props.onClose();
  }

  renderLinks () {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={styles.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    const cls = [styles.Drawer];

    if (!this.props.isOpen) {
      cls.push(styles.close)
    }
    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            {this.renderLinks()}
          </ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </React.Fragment>

    )
  }

}

export default Drawer
