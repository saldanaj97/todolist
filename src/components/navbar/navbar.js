import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./navbar.css";

export default function AppNavbar() {
  return (
    <Container className="top-navbar">
      <Navbar className="sticky-top" bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="navbar-text">
          To-do List
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
}
