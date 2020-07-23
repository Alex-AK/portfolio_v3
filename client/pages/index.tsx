import Head from "next/head";
import styled from "styled-components";

// components
import Button from "components/General/Button";
import Link from "components/General/Link";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Alex King | Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styles>
        <h1>Alex King | Software Developer</h1>
        <h4>
          Currently developing and solving problems for a{" "}
          <a
            href="https://brainsquall.co"
            className="hyperlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seattle startup.
          </a>{" "}
          Take a look at my
          <Link href="/projects" className="hyperlink">
            projects
          </Link>
          or{" "}
          <Link href="/writing" className="hyperlink">
            writing.
          </Link>{" "}
          If youd like to work with me
          <Link href="/contact" className="hyperlink">
            reach out.
          </Link>
        </h4>

        <h4 className="extra-top-margin">
          <Link href="/contact" className="hyperlink no-left-margin">
            Looking for mentorship?
          </Link>
        </h4>

        {["projects", "writing", "about", "now", "contact"].map((button) => {
          return <Button key={button} text={button} redirect={`/${button}`} />;
        })}
      </Styles>
    </div>
  );
};

const Styles = styled.main`
  button {
    margin: 10px 10px 0 0;
  }
`;

export default Home;
