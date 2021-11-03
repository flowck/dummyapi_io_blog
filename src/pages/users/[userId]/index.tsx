import Head from "next/head";
import { UserObj } from "modules/users/model/user";
import { NextPage, GetServerSideProps } from "next";
import { getUser } from "modules/users/services/userService";

interface Props {
  userId: string;
  user: UserObj;
}

const UserDetails: NextPage<Props> = ({ user, userId }) => {
  return (
    <section>
      <Head>
        <title>{userId}</title>
      </Head>

      <h1>User {userId}</h1>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { userId } = params as Record<string, string>;
  const user = await getUser(userId);
  return { props: { user, userId } };
};

export default UserDetails;
