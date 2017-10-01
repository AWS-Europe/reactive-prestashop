import React, {Component} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav} from 'reactstrap';
import {Link} from 'react-router-dom'

import CategoryNavTree from './category/CategoryNavTree'

import {images} from '../utils/images/'

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state  = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className="px-5" color="faded" light toggleable>
        <NavbarToggler right onClick={this.toggle}/>
        <Link to="/" className="navbar-brand">
          <img src={images.getLogo()} alt="logo"/>
        </Link>
        <NavbarBrand href="/">
        </NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
           <CategoryNavTree />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}