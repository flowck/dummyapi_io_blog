import Link from "next/link";
import { Typography } from "antd";

const { Title } = Typography;

export function Header() {
  return (
    <header>
      <div>
        <Title>
          <Link href="/">dummyapi.io</Link>
        </Title>
      </div>
    </header>
  );
}
