import Header from "./Header";
import Home from "./Home";
import Times from "./Times";
import Sidebar from "./Sidebar";
import Jura from "./Jura";
import JuraTimes from "./JuraTimes";
import JuraRules from "./JuraRules";
import { Router } from "preact-router";
import { Match } from "preact-router/match";
import "./main.css";

function Main({ children }) {
  return <main>{children}</main>;
}

export function App() {
  return (
    <>
      <Header />
      <Main>
        <Router>
          <Home default path="/wintersporttag/" />
          <Times path="/wintersporttag/times" />

          <Jura path="/wintersporttag/jura" />
          <JuraTimes path="/wintersporttag/jura/times" />
          <JuraRules path="/wintersporttag/jura/rules" />
        </Router>
      </Main>
      <Sidebar />
    </>
  );
}
