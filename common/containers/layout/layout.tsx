import styles from "./layout.module.scss";
import { BaseProps } from "common/typings";
import { Header } from "common/components/header/Header";

export default function Layout({ children }: BaseProps) {
  return (
    <section className={styles.layout}>
      <Header></Header>
      {children}
    </section>
  );
}
