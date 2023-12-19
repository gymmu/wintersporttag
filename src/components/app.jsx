import Header from "./Header";
import Sidebar from "./Sidebar";
import { Router } from "preact-router";

function Home() {
  return (
    <>
      <h2>Home</h2>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis error
      itaque exercitationem commodi consequatur hic reprehenderit odit fugit at
      quis ea doloribus facere quisquam aut, aperiam consectetur, in nemo
      temporibus. Illum placeat explicabo, eum natus nisi tenetur. Natus facilis
      rerum nisi ut. Eum odio inventore voluptatibus similique quibusdam
      recusandae culpa.
    </>
  );
}

function About() {
  return <h2>About</h2>;
}

function Main({ children }) {
  return <main>{children}</main>;
}

export function App() {
  return (
    <>
      <Header />
      <Main>
        <Router>
          <Home path="/" />
          <About path="/about" />
        </Router>
      </Main>
      <Sidebar />
    </>
  );
}
