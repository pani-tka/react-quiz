import React, {Component} from "react";
import styles from './Draver.module.css';

const links = [1, 2, 3];

class Drawer extends Component {

  renderLinks () {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a>Link {link}</a>
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
      <nav className={cls.join(' ')}>
        <ul>
          {this.renderLinks()}
        </ul>
      </nav>

    )
  }

}

export default Drawer
