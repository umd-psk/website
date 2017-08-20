import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
import logo from './red-logo.svg'
import wPhiSig from './whitePhiSig.svg'
import rPhiSig from './redPhiSig.svg'
import './UINav.css'

export default class UINav extends React.PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      title1: "Phi Sig UMD",
      title2: "ETA Chapter",
      phiSigSrc: rPhiSig
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  phiSigHover() {
    let updatedSrc = (this.state.phiSigSrc == wPhiSig) ? rPhiSig : wPhiSig;
    this.setState({ phiSigSrc: updatedSrc });
  }

  updateDimensions(first) {
    if (this.refs.navbar || first) { // https://stackoverflow.com/q/34544314/8327287
      if (window.innerWidth > 420 && !(window.innerWidth > 767 && window.innerWidth < 845)) {
        this.setState({title1: "Phi Sig UMD", title2: "ETA Chapter"});
      } else {
        this.setState({title1: "Phi Sig", title2: "ETA"});
      }
    }
  }

  componentWillMount() {
    this.updateDimensions(true);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this, false));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this, false));
  }

  render() {
    return (
      <div ref="navbar">
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
                <NavLink
                  href='https://myphisig.phisigmakappa.org/'
                  target='_blank'
                  onMouseEnter={this.phiSigHover.bind(this)}
                  onMouseLeave={this.phiSigHover.bind(this)}>
                    <img src={this.state.phiSigSrc} alt='My Phi Sig' />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
