import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import {Container, Nav, Navbar, NavbarBrand, NavItem, NavLink, Row} from 'reactstrap'
import './App.css'
import Icon from './icon/Icon'

function App() {
  return (
    <Router>
      <Navbar dark={true} fixed="top" color="dark" className="flex-md-nowrap p-0 shadow">
        <NavbarBrand className="col-sm-3 col-md-2 mr-0" href="#">Company name</NavbarBrand>
        <div className="w-100"/>
        <Nav navbar={true} className="px-3">
          <NavItem className="text-nowrap">
            <NavLink to="/logout" tag={Link}>Sign out</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <Container fluid={true}>
        <Row>
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <Nav vertical={true}>
                <NavItem>
                  <NavLink active={true} to="/" tag={Link}>
                    <Icon>home</Icon>
                    Dashboard
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </nav>
        </Row>
      </Container>

      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div
          className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Dashboard</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group mr-2">
              <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
              <span data-feather="calendar"></span>
              This week
            </button>
          </div>
        </div>
      </main>
    </Router>
  )
}

export default App
