import { Link } from 'ice';
import styles from './index.module.scss';

const Advantage = () => {
  return (
    <>
      <ul className={styles.list}>
        <li>
          <Link to="/">加盟优势</Link>
          <span>2021-08-20</span>
        </li>
        <li>
          <Link to="/">加盟流程</Link>
          <span>2021-08-20</span>
        </li>
      </ul>
      <div className={styles.total}>
        <span>共1页2条记录</span>
      </div>
    </>
  );
};

Advantage.pageConfig = {
  title: '加盟优势',
};

export default Advantage;
