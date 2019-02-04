import React from "react";
import { Link } from "react-router-dom";
// import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends React.Component {
  // const responseFacebook = (response) => {
  //   console.log(response);
  // }

  // const responseGoogle = (response) => {
  //   console.log(response);
  // }

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
      <React.Fragment>
        <div className="menubar" >
          <div className="container py-3 width100">
            <div className="row flex-nowrap justify-content-between align-items-center">
              <div className="col-4 pt-1 d-none d-sm-block"></div>
              <div className="col-4 text-center">
                <Link to={"/home"} className="navbar-brand logo">
                  <img src={require('../../images/logo.png')} className="img-fluid" alt="logo" />
                </Link>
              </div>
              <div className="col-4 d-flex justify-content-end align-items-center">
                {/* <Link to="/login" className="btn btn-primary">Login</Link> */}
                {/* <FacebookLogin appId="" fields="name,email,picture" callback={responseFacebook} /> 
              <GoogleLogin clientId="173421738183-6hffoeklipiqfjlq8no6hsqclmv73dhq.apps.googleusercontent.com" buttonText="Login with G+" onSuccess={responseGoogle}
                onFailure={responseGoogle} />*/}
              </div>
            </div>
          </div>
        </div>

        <Navbar color="light" expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/collections">Collections</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/wishlist">Wishlist</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="/sale">Clearance Sale</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dashboard">Admin</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;