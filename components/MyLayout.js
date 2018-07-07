import Header from "./Header";
import Head from "next/head";

const Layout = props => (
  <div className="app">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="../static/favicon.ico" />
      <title>React App</title>
    </Head>
    <Header />
    {props.children}
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: "segoe ui", sans-serif;
        background: #f9f9f9;
        line-height: 1.5;
      }

      a {
        text-decoration: none;
        border-bottom: 1px solid #999;
      }
    `}</style>
    <style jsx>{`
      .app {
        max-width: 800px;
        background: #fff;
        margin: 1rem auto;
        padding: 1rem 1.5rem 1.5rem;
        border: 1px solid #eaeaea;
      }

      @media screen and (max-width: 48rem) {
        .app {
          margin: 0;
          padding: 1rem;
        }
      }
    `}</style>
  </div>
);

export default Layout;
