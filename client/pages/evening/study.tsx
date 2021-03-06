import Head from "next/head";
import styled from "styled-components";
import { colors } from "styles/theme";

// components
import Button from "components/General/Button";

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

        <form
          name="study"
          netlify-honeypot="true"
          data-netlify="true"
          action="/success"
          method="POST"
        >
          <legend>Request an Invite</legend>

          <div className="form-control">
            <input id="name" type="text" name="name" required />
            <label htmlFor="name">Name</label>
          </div>

          <div className="form-control">
            {/* TODO: add JS email validation ? */}
            <input id="email" type="text" name="email" required />
            <label htmlFor="email">Email</label>
          </div>

          <p className="hidden">
            <label>
              Don’t fill this out if you&apos;re human:{" "}
              <input name="bot-field" />
            </label>
          </p>
          <Button text="Send" type="submit" />

          <em>I will never share your data or send you unsolicited spam.</em>
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

  form {
    legend {
      margin-bottom: 15px;
    }

    .form-control {
      position: relative;
      margin-top: 20px;

      input {
        background: transparent;

        border-radius: 0;
        border: 0;
        border-bottom: 2px solid ${colors.darkGrey};

        display: block;

        width: 100%;
        padding: 15px 2px;

        :focus {
          outline: none;
          border-bottom: 2px solid ${colors.yellow};
        }

        :invalid {
          box-shadow: none;
          outline: none;
        }

        :focus + label,
        :valid + label {
          color: ${colors.darkGrey};

          transform: translateY(-30px);
        }
      }

      label {
        position: absolute;
        top: 0;
        left: 0;

        display: inline-block;
        min-width: 5px;

        transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    }

    em {
      margin-top: 5px;
      text-align: center;
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getPageData("study");

  return { props: { pageData } };
};
