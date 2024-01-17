import GymLogo from "./GymLogo.jsx";
import "./header.css"
export default function Header() {
    return (
        <header>
            <h1>Wintersport Tag
            </h1>
            <span>
                <span>24. Januar 2024</span>
                <span style={{ fontSize: "1rem" }}>Verschiebedatum: 31. Januar 2024</span>
            </span>
            <GymLogo style={{ height: "50px" }} />
        </header>
    );
}
