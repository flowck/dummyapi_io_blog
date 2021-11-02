import Head from "next/head";
import { NextPage, GetServerSideProps } from "next";

interface Props {
  id: string;
}

const PostPage: NextPage<Props> = ({ id }) => {
  return (
    <section>
      <Head>
        <title>Post {id}</title>
      </Head>

      <h1>Post {id}</h1>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const id = params?.id as string;

  return { props: { id } };
};

export default PostPage;
