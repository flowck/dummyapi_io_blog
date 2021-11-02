import Image from "next/image";
import { Card, Button } from "antd";
import styles from "./UserItem.module.scss";
import { User } from "modules/users/model/user";

export function UserItem({ fullName, picture, id }: User) {
  return (
    <Card className={styles.user} data-test-id="userItem">
      <div className={styles.avatar}>
        <Image width="50" height="50" alt={fullName} src={picture} />
      </div>
      <Card.Meta className={styles.name} title={fullName}></Card.Meta>
      <Button type="link" data-test-id="userItemProfileLink">
        <a href={`/users/${id}`}>Profile</a>
      </Button>
      <Button type="link" data-test-id="userItemPostsLink">
        <a href={`/users/${id}/posts`}>Posts</a>
      </Button>
    </Card>
  );
}
