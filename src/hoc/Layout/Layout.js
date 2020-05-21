import React, {Component} from "react";
import styles from './Layout.module.css';
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";

class Layout extends Component {
  state = {
    menu: false
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    })
  }

  render() {
    return (
      <div className={styles.Layout}>
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout;
