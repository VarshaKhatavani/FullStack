import { Loader } from 'react-feather';

import VisuallyHidden from './VisuallyHidden';
import styles from './Spinner.module.css';

function Spinner({ size = 32 }) {
  return (
    <span className={styles.spinner}>
      <Loader size={size} />
      <VisuallyHidden>Loading…</VisuallyHidden>
    </span>
  )
}

export default Spinner;