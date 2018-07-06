import Layout from "../components/MyLayout.js";
import fetch from "isomorphic-unfetch";

const Post = props => {
  return (
    <Layout>
      <div className="wrapper">
        <img src={props.show.image.medium} />
        <div className="info">
          <h1 style={{ marginTop: 0 }}>{props.show.name}</h1>
          <p>{props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          margin-top: 2rem;
          font-size: 0.92rem;
        }

        .info {
          margin-left: 2rem;
        }
      `}</style>
    </Layout>
  );
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
