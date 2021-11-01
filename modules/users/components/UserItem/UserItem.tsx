import { Card } from "antd";
import { User } from "modules/users/model/user";
import styles from "./UserItem.module.scss";
import Image from "next/image";

export function UserItem({ fullName, picture }: User) {
  return (
    <Card className={styles.user}>
      <div className={styles.avatar}>
        <Image width="50" height="50" alt={fullName} src={picture} />
      </div>
      <Card.Meta className={styles.name} title={fullName}></Card.Meta>
    </Card>
  );
}
