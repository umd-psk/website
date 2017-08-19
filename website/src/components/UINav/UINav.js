import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
import logo from './red-logo.svg'
import './UINav.css'

export default class UINav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
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
      <Navbar color='faded' light toggleable="sm" fixed={(this.props.fixed) && "bottom"}>
        <NavbarToggler right onClick={this.toggle} />
        <NavbarBrand className="abs">
          Phi Sig UMD
          <img src={logo} alt='ETA Chapter'/>
          ETA Chapter
        </NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/brothers'>Brothers</NavLink>
            </NavItem>
          </Nav>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink tag={Link} to='/social'>Social</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>Awards</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>Log In</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
