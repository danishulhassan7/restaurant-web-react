import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="">
        <Navbar dark color="info">
          <div className="container">
            <NavbarBrand href="/"> <b>XPF Fooderia</b> </NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
