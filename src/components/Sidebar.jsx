// src/components/Sidebar.jsx
function Link({ style, href, children }) {
  const mergeStyles = (styles) => {
    return {
      ...styles,
      ...style,
    };
  };

  return (
    <a style={mergeStyles({})} href={href}>
      {children}
    </a>
  );
}

function NavLink({ href, children }) {
  return (
    <li
      style={{
        height: "100px",
        width: "100px",
        borderRadius: "50%",
        backgroundColor: "#D5E9F6cc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textDecoration: "none",
          fontWeight: "bold",
          color: "black",
        }}
        href={href}
      >
        {children}
      </a>
    </li>
  );
}

function Logo({ src }) {
  return <img src={src} style={{ height: "50px" }} />;
}

export default function Sidebar() {
  return (
    <aside
      style={{
        position: "fixed",
        top: 120,
        right: 20,
        width: "100px",
        height: "100%",
        padding: "0",
        overflowY: "auto",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavLink href="/wintersporttag/">
          <Logo src="/wintersporttag/logo-activity.svg" />
          Aktivitäten
        </NavLink>

        <NavLink href="/wintersporttag/times">
          <Logo src="/wintersporttag/logo-clock.svg" />
          Zeiten
        </NavLink>

        <NavLink href="/wintersporttag/rules">
          <Logo src="/wintersporttag/logo-law.svg" />
          Regeln
        </NavLink>
      </ul>
    </aside>
  );
}
