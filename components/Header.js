import Link from "next/link";

const linkStyle = {
  marginRight: "1.1rem",
  color: "#000",
  borderBottom: "3px solid #222",
  fontWeight: 500
};

const Header = () => (
  <header>
    <nav>
      <Link prefetch href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link prefetch href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </nav>
  </header>
);

export default Header;
