import { Link } from 'ice';
import styles from './index.module.scss';

const Crumbs = () => {
  return (
    <div className={styles.crumbs}>
      <strong>您当前的位置：</strong>
      <span>主页</span>
      <span>&gt;</span>
      <Link to="/">关于我们</Link>
    </div>
  );
};

export default Crumbs;
