import { Link } from 'ice';
import styles from './index.module.scss';

const Side = () => {
  return (
    <div className={styles.side}>
      <div className={styles.nav}>
        <h4>美食展示</h4>
        <ul>
          <li>
            <Link to="/">美食展示</Link>
          </li>
          <li>
            <Link to="/">美食展示</Link>
          </li>
          <li>
            <Link to="/">美食展示</Link>
          </li>
        </ul>
      </div>
      <div className={styles.list}>
        <h4>美食展示</h4>
        <ul>
          <li>
            <Link to="/">中国的牛肉拉面,自己的品牌</Link>
          </li>
          <li>
            <Link to="/">餐饮众筹,有苦有甜</Link>
          </li>
          <li>
            <Link to="/">牛肉面加盟，创业就是趁现在，拉面品牌</Link>
          </li>
          <li>
            <Link to="/">面向世界,爱传天下,牛肉面祝福大家七夕</Link>
          </li>
          <li className="text-center">
            <Link className={styles.more} to="/">
              查看更多
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Side;
