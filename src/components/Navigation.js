import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  const history = useHistory();

  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            type="submit"
            onClick={() => {
              history.push("/home");
            }}
          >
            MY PORTFOLIO
          </Navbar.Brand>
          <Nav>
            <Nav.Link
              type="submit"
              onClick={() => {
                history.push("/projects");
              }}
            >
              {" "}
              Projects
            </Nav.Link>
            <Nav.Link
              type="submit"
              onClick={() => {
                history.push("/aboutMe");
              }}
            >
              {" "}
              About Me
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
