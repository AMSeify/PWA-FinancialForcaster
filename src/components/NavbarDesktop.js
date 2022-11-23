import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { isMobile } from "react-device-detect"
import { LinkContainer } from "react-router-bootstrap"
const NavbarDesktop = () => {
  return (
    <>
      {!isMobile && (
        <Navbar bg="warning" className="ps-3 mb-3">
          <LinkContainer to="/my" style={{ fontSize: "1.4rem" }}>
            <Navbar.Brand>خانه</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/user">
              <Nav.Link>کاربر</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/stats">
              <Nav.Link>امار</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/buy">
              <Nav.Link>خرید</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sell">
              <Nav.Link>فروش</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
      )}
    </>
  )
}

export default NavbarDesktop
