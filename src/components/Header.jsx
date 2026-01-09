import GymLogo from "./GymLogo.jsx";
import "./header.css";

export default function Header() {
    return (
        <header>
            <h1>Wintersport Tag</h1>
            <span>
                <span>21. Januar 2026</span>
                <span style={{ fontSize: "1rem" }}>
                    Verschiebedatum: 4. Februar 2026
                </span>
            </span>
            <GymLogo style={{ height: "50px" }} />
        </header>
    );
}
