import Header from "./Header";
import Head from "next/head";

const Layout = props => (
  <div className="app">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* just to gain lighthouse score */}
      <meta name="description" content="server rendered react app example" />
      <link rel="shortcut icon" href="../static/favicon.ico" />
      <title>React App</title>
    </Head>
    <Header />
    <main className="main">{props.children}</main>
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        background: #f9f9f9;
        line-height: 1.5;
      }

      a {
        text-decoration: none;
        border-bottom: 1px solid #999;
      }

      a:focus {
        outline: 2px solid gold;
      }
    `}</style>
    <style jsx>{`
      .app {
        max-width: 800px;
        background: #fff;
        margin: 2rem auto 1rem;
        padding: 0 0 1.5rem;
        border: 1px solid #eaeaea;
        border-radius: 5px;
        box-shadow: 1px 3px 8px rgba(39, 44, 49, 0.03);
        overflow: hidden;
      }

      .main {
        padding: 1rem 1.5rem;
      }

      @media screen and (max-width: 48rem) {
        .app {
          margin: 0;
          min-height: 100vh;
          box-shadow: none;
          border-radius: 0;
        }

        .main {
          padding: 0 1rem;
        }
      }
    `}</style>
  </div>
);

export default Layout;
