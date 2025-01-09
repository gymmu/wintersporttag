import GymLogo from "./GymLogo.jsx";
import "./header.css";
export default function Header() {
  return (
    <header>
      <h1>Wintersport Tag</h1>
      <span>
        <span>22. Januar 2025</span>
        <span style={{ fontSize: "1rem" }}>
          Verschiebedatum: 5. Februar 2025
        </span>
      </span>
      <GymLogo style={{ height: "50px" }} />
    </header>
  );
}
