import { Link } from 'ice';
import styles from './index.module.scss';

const ListPagination = () => {
  return (
    <>
      <ul className={styles.list}>
        <li>
          <Link to="/">
            <img src="/images/defaultpic.gif" alt="拉面" />
            <p>拉面</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="/images/defaultpic.gif" alt="拉面" />
            <p>拉面</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="/images/defaultpic.gif" alt="拉面" />
            <p>拉面</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="/images/defaultpic.gif" alt="拉面" />
            <p>拉面</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="/images/defaultpic.gif" alt="拉面" />
            <p>拉面</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="/images/defaultpic.gif" alt="拉面" />
            <p>拉面</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="/images/defaultpic.gif" alt="拉面" />
            <p>拉面</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="/images/defaultpic.gif" alt="拉面" />
            <p>拉面</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="/images/defaultpic.gif" alt="拉面" />
            <p>拉面</p>
          </Link>
        </li>
      </ul>
      <div className={styles.pagination}>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/">上一页</Link>
          </li>
          <li className="active">
            <Link to="/">1</Link>
          </li>
          <li>
            <Link to="/">2</Link>
          </li>
          <li>
            <Link to="/">3</Link>
          </li>
          <li>
            <Link to="/">4</Link>
          </li>
          <li>
            <Link to="/">5</Link>
          </li>
          <li>
            <Link to="/">下一页</Link>
          </li>
          <li>
            <Link to="/">末页</Link>
          </li>
          <li>
            <span>共4页34条</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ListPagination;
