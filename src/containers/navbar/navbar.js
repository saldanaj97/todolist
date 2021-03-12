import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Brand from "react-bootstrap/NavbarBrand";
import "../navbar/navbar.css";

export default function AppNavbar() {
  return (
    <Container className="top-navbar">
      <Navbar class="sticky-top" bg="dark" variant="dark">
        <Navbar.Brand href="#home" class="navbar-text">
          To-do List
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
}
