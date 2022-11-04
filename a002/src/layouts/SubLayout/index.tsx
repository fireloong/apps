import Side from './components/Side';
import Crumbs from './components/Crumbs';
import styles from './index.module.scss';

const SubLayout = ({ children }) => {
  return (
    <section className={styles.sub}>
      <div className={styles.box}>
        <Side />
        <div className={styles.content}>
          <Crumbs />
          <div className={styles.details}>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default SubLayout;
