import Head from "next/head";
import styled from "styled-components";

// components
import Button from "components/General/Button";

// util
import { getPageData } from "util/fetchMarkdown";

// types
import { GetStaticProps } from "next";
import { PageDataProps } from "types";

// theme
import { colors } from "styles/theme";

interface Props {
  pageData: PageDataProps;
}

const Home = ({ pageData }: Props) => {
  const { title, description, contentHtml } = pageData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
      </Head>

      <Styles id="page">
        <img src="assets/coffee-menu.jpg" alt="Coffee Menu" />

        <div>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

          {["projects", "about", "contact"].map((button) => {
            return (
              <Button
                key={button}
                text={button}
                redirect={`/${button}`}
                className="no-styles"
              />
            );
          })}
        </div>
      </Styles>
    </>
  );
};

export default Home;

const Styles = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: fixed;
    opacity: 0.1;
    left: 3%;
    top: 5%;
    width: 300px;

    @media (max-width: 1200px) {
      display: none;
    }
  }

  div {
    background: ${colors.background};
    z-index: 1;

    a {
      font-size: inherit;
    }

    h1 span {
      font-weight: 300;
      font-size: 2.8rem;
    }

    .no-styles {
      margin: 0 10px 10px 0;
    }

    h4:nth-child(3) {
      margin: 15px 0 25px 0;
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getPageData("index");

  return { props: { pageData } };
};
