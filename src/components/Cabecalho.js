import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

const Cabecalho = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Pagina Inicial</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/deputados">Deputados</Nav.Link>
            <Nav.Link href="/deputados">Detalhes</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho