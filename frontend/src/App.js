import React from "react";
import ViewPatent from "./components/pages/viewPatent"; // viewpatent
import Home from "./components/pages/home"; // home
import Login from "./components/pages/login"; // login
import NavBar from "./components/component/navBar"; // navbar
import { Switch, Route } from "react-router-dom";
import "./styles/custom.scss"; 
import { useAuth0 } from '@auth0/auth0-react'
import Logout from "./components/pages/logout";

function App() {

  const { isAuthenticated, user } = useAuth0();

  console.log(user);

  return (
    <div>
      <NavBar loginStat={isAuthenticated} user={user}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Patents" component={ViewPatent} />
        <Route path="/Log" component={Login} />
        <Route path="/Logout" component={Logout} />
      </Switch>
    </div>
  );
}

export default App;

