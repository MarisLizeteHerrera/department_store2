import React from 'react';
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";


const Navbar = () => (
  <Menu>
    <Menu.Item>
     <NavLink exact activeStyle={styles.active} to="/">
     Home
     </NavLink>
    </Menu.Item>

    <Menu.Item>
     <NavLink exact activeStyle={styles.active} to="/about">About</NavLink>
    </Menu.Item>

    <Menu.Item>
      <NavLink exact activeStyle={styles.active} to="/departments">Departments</NavLink>
    </Menu.Item>
  </Menu>
)

const styles = {
  active: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
  }
};

export default Navbar

// const Navbar = () => (
//   <Menu>
//     <Menu.Item>
//      <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
//     </Menu.Item>

//     <Menu.Item>
//      <NavLink exact activeStyle={styles.active} to="/about">About</NavLink>
//     </Menu.Item>

//     <Menu.Item>
//       <NavLink exact activeStyle={styles.active} to="/departments">Departments</NavLink>
//     </Menu.Item>
//   </Menu>

//OTHER

{/* <nav>
<NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
{' '}
<NavLink exact activeStyle={styles.active} to="/about">About</NavLink>
{' '}
<NavLink exact activeStyle={styles.active} to="/departments">Departments</NavLink>
</nav> */}