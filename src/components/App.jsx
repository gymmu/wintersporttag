import Header from "./Header";
import Home from "./Home";
import Times from "./Times";
import Sidebar from "./Sidebar";
import Jura from "./Jura";
import { Router } from "preact-router";
import "./main.css"

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
                </Router>
            </Main>
            <Sidebar />
        </>
    );
}
