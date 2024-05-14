import styles from "./Sidenote.module.css";

function Sidenote({ type, title, children }) {
  return (
    // added wrapper class & style of note
    <aside className={`${styles.wrapper}  ${styles[type]}`}>
      <h3 className={`${styles.title}`}>{title}</h3>
      <p>{children}</p>
    </aside>
  );
}

export default Sidenote;
