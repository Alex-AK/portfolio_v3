import Head from "next/head";
import styled from "styled-components";

// components
// import Button from "components/General/Button";

// util
import { getPageData } from "util/fetchMarkdown";

// types
import { GetStaticProps } from "next";
import { PageDataProps } from "types";
interface Props {
  pageData: PageDataProps;
}

const Home = ({ pageData }: Props) => {
  const { title, contentHtml } = pageData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <script
          type="text/javascript"
          src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        />
      </Head>

      <Styles id="page">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <form netlify-honeypot>
          <legend>Request an Invite</legend>
          <p>
            Feel free to request an invite at{" "}
            <a href="mailto:hello@alex-ak.com">hello@alex-ak.com</a> and
            I&apos;ll add you to the mailing list for future event invitations.
          </p>
          {/* <label>
            Name:
            <input type="text" name="name" min="2" max="50" required />
          </label>
          <label>
            Email:
            <input type="text" name="email" min="3" max="50" required />
          </label>
          <p className="hidden">
            <label>
              Don’t fill this out if you&apos;re human:{" "}
              <input name="bot-field" />
            </label>
          </p> */}
          {/* <Button text="Send" type="submit" handleClick={submitForm} /> */}
        </form>
      </Styles>
    </>
  );
};

export default Home;

const Styles = styled.main`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getPageData("home");

  return { props: { pageData } };
};
