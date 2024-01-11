import GymLogo from "./GymLogo.jsx";
import "./header.css"
export default function Header() {
    return (
        <header>
            <h1>Wintersport Tag
                <span>
                    <span>24. Januar 2024</span>
                    <span>Verschiebedatum</span>
                </span>
            </h1>
            <GymLogo style={{ height: "50px" }} />
        </header>
    );
}
