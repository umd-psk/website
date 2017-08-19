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
      isOpen: false,
      title1: "Phi Sig UMD",
      title2: "ETA Chapter"
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  updateDimensions() {
    if (window.innerWidth > 420 && !(window.innerWidth > 767 && window.innerWidth < 845)) {
      this.setState({title1: "Phi Sig UMD", title2: "ETA Chapter"});
    } else {
      this.setState({title1: "Phi Sig", title2: "ETA"});
    }
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    return (
      <Navbar color='faded' light toggleable="sm" fixed={(this.props.fixed) && "bottom"}>
        <NavbarToggler right onClick={this.toggle} />
        <NavbarBrand className="abs">
          {this.state.title1}
          <img src={logo} alt='ETA Chapter'/>
          {this.state.title2}
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
              <NavLink tag={Link} to='/rush'>Rush</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/awards'>Awards</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/login'>Log In</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
