import "./sidebar.css";
import { Match } from "preact-router/match";

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
      <a href={href}>{children}</a>
    </li>
  );
}

function Logo({ src }) {
  return <img src={src} />;
}

function SidebarFlums() {
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
      <ul className="jura">
        <NavLink href="/wintersporttag/jura">
          <Logo src="/wintersporttag/logo-jura.svg" />
          Jura
        </NavLink>
      </ul>
    </aside>
  );
}

function SidebarJura() {
  return (
    <aside>
      <ul>
        <NavLink href="/wintersporttag/jura">
          <Logo src="/wintersporttag/logo-hiking.svg" />
          Wandern
        </NavLink>

        <NavLink href="/wintersporttag/jura/times">
          <Logo src="/wintersporttag/logo-clock.svg" />
          Zeiten
        </NavLink>

        <NavLink href="/wintersporttag/jura/rules">
          <Logo src="/wintersporttag/logo-law.svg" />
          Regeln
        </NavLink>
      </ul>
      <ul className="jura">
        <NavLink href="/wintersporttag">
          <Logo src="/wintersporttag/logo-flums.svg" />
          Flums
        </NavLink>
      </ul>
    </aside>
  );
}

export default function Sidebar() {
  return (
    <Match path="/wintersporttag/">
      {({ url }) => {
        if (url.indexOf("/wintersporttag/jura") > -1) {
          return <SidebarJura />;
        } else {
          return <SidebarFlums />;
        }
      }}
    </Match>
  );
}
