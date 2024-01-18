import Header from "./Header";
import Home from "./Home";
import Times from "./Times";
import Sidebar from "./Sidebar";
import Jura from "./Jura";
import Rules from "./Rules"
import Emergency from "./Emergency";
import JuraTimes from "./JuraTimes";
import JuraEmergency from "./JuraEmergency"
import {useLayoutEffect} from "preact/hooks";
import { Router } from "preact-router";
import { useLocation } from "wouter-preact";

import "./main.css";

function Main({ children }) {
    return <main>{children}</main>;
}


function Wrapper({ children }) {
    const location = useLocation()
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [location])
    return (
        <>
            {children}
        </>
    )
}

export function App() {
    return (
        <>
            <Header />
            <Main>
                <Wrapper>
                    <Router>
                        <Home default path="/wintersporttag/" />
                        <Times path="/wintersporttag/times" />
                        <Rules path="/wintersporttag/rules" />
                        <Emergency path="/wintersporttag/emergency" />

                        <Jura path="/wintersporttag/jura" />
                        <JuraTimes path="/wintersporttag/jura/times" />
                        <JuraEmergency path="/wintersporttag/jura/emergency" />
                    </Router>
                </Wrapper>
            </Main>
            <Sidebar />
        </>
    );
}
