import Head from "next/head";
import { UserObj } from "modules/users/model/user";
import { NextPage, GetServerSideProps } from "next";
import { getUser } from "modules/users/services/userService";

interface Props {
  id: string;
  user: UserObj;
}

const UserDetails: NextPage<Props> = ({ user, id }) => {
  return (
    <section>
      <Head>
        <title>{id}</title>
      </Head>

      <h1>User {id}</h1>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.userId as string;
  const user = await getUser(id as string);
  return { props: { user, id } };
};

export default UserDetails;
