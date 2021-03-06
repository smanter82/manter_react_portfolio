import "./App.css";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
