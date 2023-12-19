import GymLogo from "./GymLogo.jsx";
export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "#fff",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
        zIndex: 1000,
      }}
    >
      <h1>Wintersport Tag</h1>
      <GymLogo style={{ height: "50px" }} />
    </header>
  );
}
