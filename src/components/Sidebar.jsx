// src/components/Sidebar.jsx
export default function Sidebar() {
  return (
    <aside
      style={{
        position: "fixed",
        top: 100,
        right: 0,
        width: "50px",
        height: "100%",
        backgroundColor: "#f3f3f3",
        borderLeft: "1px solid #ccc",
        padding: "1rem",
        overflowY: "auto",
      }}
    >
      <div className="logo-entry">Notfall</div>
      <div className="logo-entry">Aktivitäten</div>
      <div className="logo-entry">Zeiten</div>
      <div className="logo-entry">Regeln</div>
      <div className="logo-entry">Links</div>
    </aside>
  );
}
