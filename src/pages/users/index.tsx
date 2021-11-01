import Head from "next/head";
import { useMemo } from "react";
import styles from "common/styles/grid.module.scss";
import { NextPage, GetServerSideProps } from "next";
import { User, UserObj } from "modules/users/model/user";
import { getUsers } from "modules/users/services/userService";
import { UserItem } from "modules/users/components/UserItem/UserItem";

interface Props {
  users: UserObj[];
}

const UsersHome: NextPage<Props> = ({ users }) => {
  const _users = useMemo(() => users.map((user) => new User(user)), [users]);
  const renderUsers = () => _users.map((user) => <UserItem key={user.id} {...user} />);

  return (
    <section>
      <Head>
        <title>Users</title>
      </Head>

      <h1>Users</h1>

      {/* <pre>
        <code>{JSON.stringify(users, null, 2)}</code>
      </pre> */}

      <div className={styles.grid}>{renderUsers()}</div>
    </section>
  );
};

export async function getServerSideProps(context: GetServerSideProps) {
  const users = await getUsers();

  return { props: { users } };
}

export default UsersHome;
