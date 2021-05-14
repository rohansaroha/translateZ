import React, { useContext, useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../assets/scss/base/navbar.scss";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { OrderContext } from "../../hooks/OrderContext";

const NavbarComponent = () => {
  const qty = useContext(OrderContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = ():any => setIsOpen(!isOpen);
  return (
    <div className="custom-navbar">
      <Navbar color="#2c3e50" light expand="md" className='navbar-main' style={{ width: "100%", backgroundColor: "#ffff", zIndex: 100, height: "9%" }}>
        <div style={{ display: "flex",justifyContent: "space-between",alignItems: "center",width: "100%" }}>
          <div>
            <NavbarBrand color={"#FFF"} className='custom-navbar-brand'>
              <Link color={"#FFF"} to={"/"}>Acme</Link>
            </NavbarBrand>
          </div>
          <div>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem className='custom-navbar-item'>
                  <Link to="/">Books</Link>
                </NavItem>
                <NavItem className='custom-navbar-item'>
                  <Link to="/">Blog</Link>
                </NavItem>
                <NavItem className='custom-navbar-item'>
                  <Link to="/">Contact</Link>
                </NavItem>
                <NavItem className='custom-navbar-item'>
                  <Link to="/">Login</Link>
                </NavItem>
                <NavItem className='custom-navbar-item'>
                  <div className='basket-button-container'>
                    <div className='basket-button-main'>
                      <LocalMallOutlinedIcon fontSize={"small"} style={{ color: "#3560b9",marginRight: "0.25rem" }}/>
                      <span>Basket</span>
                    </div>
                    <div className='basket-button-qty'>
                      <span>{qty[0]}</span>
                    </div>
                  </div>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </div>
      </Navbar>
    </div>
  );
};
export default NavbarComponent;
