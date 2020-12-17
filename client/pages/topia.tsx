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

const Topia = ({ pageData }: Props) => {
  const { title, description, contentHtml } = pageData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
      </Head>

      <Styles id="page">
        <img
          src="assets/topia-avatar.png"
          alt="Topia Avatar"
          className="topia-avatar"
        />

        <div>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <h4>
            If you&apos;d like to connect further, you can reach me at{" "}
            <div className="arrow-container">
              <a href="mailto:hello@alex-ak.com">
                hello@alex-ak.com
                <img
                  src="icons/arrow.png"
                  alt="hand drawn arrow"
                  className="arrow"
                />
              </a>
              .
            </div>{" "}
            I&apos;m looking forward to connecting further.
          </h4>
        </div>
      </Styles>
    </>
  );
};

export default Topia;

const Styles = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 50px 0 5px 0;
  }

  h2 {
    a {
      font-size: inherit;
    }
  }

  h3 {
    margin-top: 20px;
  }

  h4 {
    margin-top: 80px;
  }

  p {
    margin-bottom: 15px;
  }

  span {
    font-size: 1.3rem;
    padding-top: 14px;
    float: right;
  }

  img {
    opacity: 0.6;
  }

  .topia-avatar {
    position: fixed;
    left: 3%;
    top: 5%;

    width: 250px;
    transition: 1s ease;

    @media (max-width: 1000px) {
      position: absolute;
      top: -20px;
      left: -30px;
      width: 150px;
    }
  }

  .arrow-container {
    position: relative;
    display: inline;

    .arrow {
      position: absolute;
      right: 40px;
      top: -55px;

      width: 40px;

      @media (max-width: 480px) {
        right: 0;
        top: -80px;
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getPageData("topia");

  return { props: { pageData } };
};
