import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./sass/styles.scss";

import Navigation from "./components/Navigation";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <main className="spaceTop back_g">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;