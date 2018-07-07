import Layout from "../components/Layout.js";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <Layout>
    <Head>
      <title>Welcome to ssr React App</title>
    </Head>
    <h1 className="title">Batman TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id} style={{ marginBottom: 4 }}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      .title {
        font-size: 1.75rem;
      }
      @media screen and (max-width: 48rem) {
        .title {
          font-size: 1.5rem;
          line-height: 1.2;
        }
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  return { shows: data };
};

export default Index;
