import Header from "./Header";
import { Global, css } from "@emotion/core";
import Head from "next";

const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --gray: #3d3d3d;
            --gray2: #6f6f6f;
            --orange: #da552f;
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }
          body {
            font-size: 1.6rem;
            line-height: 1.5;
          }
          h1,
          h2,
          h3 {
            margin: 0 02rem 0;
            line-height: 1.5;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          a {
            text-decoration: none;
          }
        `}
      />
      <Head>
        <html lang="es" />
        <title>PH</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
