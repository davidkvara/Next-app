import Link from "next/link";

const Header = () => (
  <header className="header">
    <nav>
      <Link prefetch href="/">
        <a className="nav-link">Home</a>
      </Link>
      <Link prefetch href="/about">
        <a className="nav-link">About</a>
      </Link>
    </nav>
    <style jsx>{`
      .header {
        background: hsl(210, 9%, 96%);
        padding: 1rem 1.5rem;
      }

      .nav-link {
        margin-right: 1.5rem;
        color: #222;
        border: 0;
        font-size: 0.95rem;
        font-weight: 600;
        transition: 0.3s ease;
      }

      .nav-link:hover {
        color: #555;
      }

      @media screen and (max-width: 48rem) {
        .header {
          padding: 0.8rem 1rem;
        }
      }
    `}</style>
  </header>
);

export default Header;
