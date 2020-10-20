import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';

class App extends Component {
  render() {
    return(
      <div className="">
        <Navbar dark color="info">
          <div className="container">
            <NavbarBrand href="/"> <h2>XPF Fooderia</h2> </NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
