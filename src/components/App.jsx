import Header from "./Header";
import Home from "./Home";
import Times from "./Times";
import Sidebar from "./Sidebar";
import Jura from "./Jura";
import Rules from "./Rules"
import Emergency from "./Emergency";
import JuraTimes from "./JuraTimes";
import JuraEmergency from "./JuraEmergency"
import { Router } from "preact-router";
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
          <Rules path="/wintersporttag/rules" />
          <Emergency path="/wintersporttag/emergency" />

          <Jura path="/wintersporttag/jura" />
          <JuraTimes path="/wintersporttag/jura/times" />
          <JuraEmergency path="/wintersporttag/jura/emergency" />
        </Router>
      </Main>
      <Sidebar />
    </>
  );
}
