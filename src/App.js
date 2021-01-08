import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Search from "./components/Search/Search";
import EmailVerification from "./components/Shared/OAuth/EmailVerification/EmailVerification";
import { createContext, useState } from "react";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";
import OAuth from "./components/Shared/OAuth/OAuth";
import NotFound from "./components/NotFound/NotFound";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/destination/:place">
            <Booking />
          </Route>
          <PrivateRoute path="/resort/:place">
            <Search />
          </PrivateRoute>
          <Route path="/login">
            <OAuth />
          </Route>
          <Route path="/emailVerify">
            <EmailVerification />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
