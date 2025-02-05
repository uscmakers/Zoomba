import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import _ from "lodash";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/user";

import Home from "./home";
import { LoginDoctor, LoginUser, Register, Logout } from "./auth";
import Dash from "./dash";
import Setup from "./setup";
import About from "./about";
import Splash from "./splash";

import { Navbar as BSNavbar, Nav } from "react-bootstrap";

function NavbarLink(props: any) {
  return (
    <li className="nav-item">
      <Link to={props.to} className="nav-link" onClick={props.onClick}>
        {props.children || ""}
      </Link>
    </li>
  );
}

function Navbar(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  /* function returnNavBar()
    {
        if(props.value.whichPage == 3)
        {
            return (
                <>
                    <Nav className="mr-auto">
                        <NavbarLink to="/about">About</NavbarLink>
                        <NavbarLink to={{ pathname: '/', hash: 'contact' }}>
                            Contact
                        </NavbarLink>
                    </Nav>
                    <Nav>
                        <NavbarLink to="/loginDoctor">Doctor Login</NavbarLink>
                    </Nav>
                    <Nav>
                        <NavbarLink to="/loginUser">User Login</NavbarLink>
                    </Nav>
                </>
            );
        }
        else
        {
            <>
                <Nav className="mr-auto">
                <NavbarLink to="/about">About</NavbarLink>
                <NavbarLink to={{ pathname: '/', hash: 'contact' }}>
                    Contact
                </NavbarLink>
                </Nav>
                <Nav>
                    <NavbarLink to="/logout">Logout</NavbarLink>
                </Nav>
            </>
        }
    } */
  return (
    <BSNavbar expand="lg">
      <Link to="/" className="navbar-brand">
        Zoomba
      </Link>
      <BSNavbar.Toggle aria-controls="navbar-nav" />

      <BSNavbar.Collapse id="navbar-nav">
        {_.isEmpty(user) === true ? (
          <>
            <Nav className="mr-auto">
              <NavbarLink to="/about">About</NavbarLink>
              <NavbarLink to={{ pathname: "/", hash: "contact" }}>
                Contact
              </NavbarLink>
            </Nav>
          </>
        ) : (
          <>
            <Nav className="mr-auto">
              <NavbarLink to="/">Dashboard</NavbarLink>
              <NavbarLink to="/learn">Learn</NavbarLink>
              <NavbarLink to="/profile">Profile</NavbarLink>
              <NavbarLink to="/setup">Setup Device</NavbarLink>
            </Nav>
            <Nav>
              <NavbarLink
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(logout());
                }}
              >
                Logout
              </NavbarLink>
            </Nav>
          </>
        )}
      </BSNavbar.Collapse>
    </BSNavbar>
  );
}

function App() {
  const [whichPage, setWhichPage] = useState(2);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(login({}));
  }, []);

  function changeWhichPageFromChild(newValue) {
    setWhichPage(newValue);
  }

  function conditionalRender() {
    console.log(whichPage);
    if (whichPage == 1) {
      //user
      return (
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      );
    } else if (whichPage == 2) {
      //
      return (
        <Switch>
          <Route exact path="/">
            <Dash />
          </Route>
          <Route exact path="/setup">
            <Setup />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      );
    } else if (whichPage == 3) {
      return (
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route exact path="/loginDoctor">
            <LoginDoctor
              value={whichPage}
              onChange={changeWhichPageFromChild}
            />
          </Route>
          <Route exact path="/loginUser">
            <LoginUser value={whichPage} onChange={changeWhichPageFromChild} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      );
    }
  }

  return (
    <Router>
      <Navbar value={whichPage} />
      {conditionalRender()}
    </Router>
  );
}

export default App;
