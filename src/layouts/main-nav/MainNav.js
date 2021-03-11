import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserTable from "../../components/UserTable";
import AddUserForm from "../../components/AddUserForm";
import './style.css';
import logo from './brand.svg';

export default function MainNav() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <a className="navbar-brand" href="./index.html">
              <img src={logo} className="navbar-brand-img" alt="..." />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarLandings" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Landings
        </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarPages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Pages
        </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarAccount" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Account
        </a>
                <ul className="dropdown-menu" aria-labelledby="navbarAccount">
                  <li className="dropdown-item dropright">
                    <a className="dropdown-link dropdown-toggle" data-toggle="dropdown">
                      Settings
            </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="./account-general.html">
                        General
              </a>
                      <a className="dropdown-item" href="./account-security.html">
                        Security
              </a>
                      <a className="dropdown-item" href="./account-notifications.html">
                        Notifications
              </a>
                      <a className="dropdown-item" href="./billing-plans-and-payment.html">
                        Plans &amp; Payment
              </a>
                      <a className="dropdown-item" href="./billing-users.html">
                        Users
              </a>
                    </div>
                  </li>
                  <li className="dropdown-item dropright">
                    <a className="dropdown-link dropdown-toggle" data-toggle="dropdown">
                      Sign In
            </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="./signin-cover.html">
                        Side Cover
              </a>
                      <a className="dropdown-item" href="./signin-illustration.html">
                        Illustration
              </a>
                      <a className="dropdown-item" href="./signin.html">
                        Basic
              </a>
                      <a className="dropdown-item" data-toggle="modal" href="#modalSigninHorizontal">
                        Modal Horizontal
              </a>
                      <a className="dropdown-item" data-toggle="modal" href="#modalSigninVertical">
                        Modal Vertical
              </a>
                    </div>
                  </li>
                  <li className="dropdown-item dropright">
                    <a className="dropdown-link dropdown-toggle" data-toggle="dropdown">
                      Sign Up
            </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="./signup-cover.html">
                        Side Cover
              </a>
                      <a className="dropdown-item" href="./signup-illustration.html">
                        Illustration
              </a>
                      <a className="dropdown-item" href="./signup.html">
                        Basic
              </a>
                      <a className="dropdown-item" data-toggle="modal" href="#modalSignupHorizontal">
                        Modal Horizontal
              </a>
                      <a className="dropdown-item" data-toggle="modal" href="#modalSignupVertical">
                        Modal Vertical
              </a>
                    </div>
                  </li>
                  <li className="dropdown-item dropright">
                    <a className="dropdown-link dropdown-toggle" data-toggle="dropdown">
                      Password Reset
            </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="./password-reset-cover.html">
                        Side Cover
              </a>
                      <a className="dropdown-item" href="./password-reset-illustration.html">
                        Illustration
              </a>
                      <a className="dropdown-item" href="./password-reset.html">
                        Basic
              </a>
                    </div>
                  </li>
                  <li className="dropdown-item dropright">
                    <a className="dropdown-link dropdown-toggle" data-toggle="dropdown">
                      Error
            </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="./error-cover.html">
                        Side Cover
              </a>
                      <a className="dropdown-item" href="./error-illustration.html">
                        Illustration
              </a>
                      <a className="dropdown-item" href="./error.html">
                        Basic
              </a>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDocumentation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Documentation
        </a>
              </li>
            </ul>

            <a className="navbar-btn btn btn-sm btn-primary lift ml-auto" target="_blank">
              Buy now
    </a>


          </div>
        </nav>



        <hr />
        <Switch>
          <Route exact path="/UserTable">
            <UserTable />
          </Route>
          <Route path="/AddUserForm">
            <AddUserForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

