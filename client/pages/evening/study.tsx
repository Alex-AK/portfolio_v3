import Head from "next/head";
import styled from "styled-components";

// util
import { getPageData } from "util/fetchMarkdown";

// types
import { GetStaticProps } from "next";
import { PageDataProps } from "types";
interface Props {
  pageData: PageDataProps;
}

const Study = ({ pageData }: Props) => {
  const { title, contentHtml } = pageData;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Styles id="page">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <form netlify-honeypot="true">
          <legend>Request an Invite</legend>
          <p>
            Newsletter signup coming soon - for now, please send me an email at{" "}
            <a href="mailto:hello@alex-ak.com">hello@alex-ak.com</a> to request
            an invite.
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

export default Study;

const Styles = styled.main`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getPageData("study");

  return { props: { pageData } };
};
