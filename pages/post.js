import Layout from "../components/MyLayout.js";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

const Post = props => (
  <Layout>
    <Head>
      <title>{props.show.name}</title>
    </Head>
    <div className="wrapper">
      <img src={props.show.image.medium} />
      <div className="info">
        <h1 className="show-title">{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        display: flex;
        margin-top: 2rem;
      }

      .info {
        font-size: 0.94rem;
        margin-left: 2rem;
      }

      .show-title {
        margin: 0;
      }

      @media screen and (max-width: 48rem) {
        .wrapper {
          display: block;
        }

        .show-title {
          line-height: 1.2;
          margin-top: 1rem;
          font-size: 1.6rem;
        }

        .info {
          font-size: 0.92rem;
          margin: 0;
        }
      }
    `}</style>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show };
};

export default Post;
