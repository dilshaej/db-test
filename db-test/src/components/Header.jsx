import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
       <h2 style={{ fontFamily: "'Kalam', cursive" }}>Education</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header