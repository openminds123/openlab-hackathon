import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingPage from '../Composition/LandingPage';
import LoginToBank from '../Composition/LoginToBank';
import SelectAccountType from '../Composition/SelectAccountType';
import AccessDeclaration from '../Composition/AccessDeclaration';
import AccountSummary from '../Composition/AccountSummary';

export const AppRouter = () => {
  return (
    <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">LandingPage</Link>
                </li>
                <li>
                  <Link to="/LoginToBank/">LoginToBank</Link>
                </li>
                <li>
                  <Link to="/SelectAccountType/">SelectAccountType</Link>
                </li>
                <li>
                  <Link to="/AccessDeclaration/">AccessDeclaration</Link>
                </li>
                <li>
                  <Link to="/AccountSummary/">AccountSummary</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={LandingPage} />
            <Route path="/LoginToBank/" component={LoginToBank} />
            <Route path="/SelectAccountType/" component={SelectAccountType} />
            <Route path="/AccessDeclaration/" component={AccessDeclaration} />
            <Route path="/AccountSummary/" component={AccountSummary} />
          </div>
      </Router>
  );
};

export default AppRouter;