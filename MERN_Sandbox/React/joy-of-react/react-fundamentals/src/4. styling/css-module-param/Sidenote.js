import styles from './Sidenote.module.css';

function Sidenote({ type, title, children }) {
  return (
    <aside>
      <h3 className={styles.title}>{title}</h3>
      <p>{children}</p>
    </aside>
  );
}

export default Sidenote;