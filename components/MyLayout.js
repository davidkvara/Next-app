import Header from "./Header";

const layoutStyle = {
  maxWidth: 900,
  background: "#fafafa",
  margin: "20px auto",
  padding: "1.5rem",
  border: "1px solid #eaeaea"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <style jsx global>{`
      body {
        font-family: "segoe ui", sans-serif;
        line-height: 1.6;
      }
    `}</style>
  </div>
);

export default Layout;
