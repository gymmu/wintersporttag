import "./sidebar.css"

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
    <li>
      <a href={href}>
        {children}
      </a>
    </li>
  );
}

function Logo({ src }) {
  return <img src={src} />;
}

export default function Sidebar() {
  return (
    <aside>
      <ul>
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
