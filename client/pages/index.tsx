import Head from "next/head";
import styled from "styled-components";

// components
import Button from "components/General/Button";
import Link from "components/General/Link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Alex King | Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styles id="page">
        <div className="content">
          <h1>
            Alex King <span>Software Developer</span>
          </h1>
          <h4>
            I&apos;m a Seattle based software engineer with a love for coffee,
            pleasant user experience, and intentionality. Currently developing
            and solving problems for a{" "}
            <Link href="https://brainsquall.co" openInNewTab>
              Seattle startup.
            </Link>{" "}
            Take a look at my <Link href="/projects">projects</Link> or{" "}
            <Link href="/writing">writing.</Link> If you&apos;d like to work
            with me <Link href="/contact">reach out.</Link>
          </h4>

          <h4 className="extra-top-margin">
            <Link href="/contact">Looking for mentorship?</Link>
          </h4>

          {["projects", "writing", "about", "now", "contact"].map((button) => {
            return (
              <Button key={button} text={button} redirect={`/${button}`} />
            );
          })}
        </div>
      </Styles>
    </>
  );
};

const Styles = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    margin-right: 10%;
  }

  h1 span {
    font-weight: 300;
    font-size: 2.8rem;

    :before {
      content: "| ";
      font-size: 2.8rem;
    }
  }

  button {
    margin: 10px 10px 0 0;
  }

  h4:nth-child(3) {
    margin: 15px 0;
  }
`;

export default Home;
