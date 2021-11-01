import { NextPage } from "next";
import { useRouter } from "next/router";

const UserDetails: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <section>My details {id}</section>;
};

export default UserDetails;
