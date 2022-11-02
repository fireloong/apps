import { useRef, useState } from 'react';
import { Link } from 'ice';
import { useInterval } from 'ahooks';
import { Icon } from '@iconify/react';
import classNames from 'classnames';
import styles from './index.module.scss';

const Home = () => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLUListElement>(null);

  useInterval(() => {
    const liNodes = ref.current?.querySelectorAll('li') || [];
    const countLi = liNodes.length;
    if (count > countLi - 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }, 1000);

  return (
    <>
      <section className={styles.reveal}>
        <div className={styles.box}>
          <div className={styles.slide}>
            <ul>
              <li>
                <h2>
                  <Icon icon="ic:round-grid-view" height={24} />
                  <span>美食展示</span>
                </h2>
              </li>
              <li>
                <Link to="/">美食展示</Link>
              </li>
              <li>
                <Link to="/">店面展示</Link>
              </li>
              <li>
                <Link to="/">加盟店展示</Link>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <div className={styles.head}>
              <h3>新品</h3>
              <Link to="/">+ MORE</Link>
            </div>
            <ul>
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
          </div>
        </div>
      </section>
      <section className={styles.notice}>
        <div className={styles.box}>
          <Icon icon="ic:baseline-campaign" height="32" />
          <ul ref={ref}>
            <li className={classNames({ 'list-item': true, hidden: false })}>
              <Link to="/">中国的牛肉拉面,自己的品牌</Link>
            </li>
            <li className={classNames({ 'list-item': false, hidden: true })}>
              <Link to="/">餐饮众筹,有苦有甜</Link>
            </li>
            <li className={classNames({ 'list-item': false, hidden: true })}>
              <Link to="/">拉面</Link>
            </li>
            <li className={classNames({ 'list-item': false, hidden: true })}>
              <Link to="/">干煸炒面</Link>
            </li>
            <li className={classNames({ 'list-item': false, hidden: true })}>
              <Link to="/">过油肉拌面</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.feature}>
        <img src="/images/feature.png" alt="特色菜" />
      </section>
      <section className={styles.reveal}>
        <div className={styles.box}>
          <div className={styles.slide}>
            <ul>
              <li>
                <h2>
                  <Icon icon="ic:round-grid-view" height={24} />
                  <span>美食展示</span>
                </h2>
              </li>
              <li>
                <Link to="/">美食展示</Link>
              </li>
              <li>
                <Link to="/">店面展示</Link>
              </li>
              <li>
                <Link to="/">加盟店展示</Link>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <div className={styles.head}>
              <h3>新品</h3>
              <Link to="/">+ MORE</Link>
            </div>
            <ul>
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
          </div>
        </div>
      </section>
      <section className={styles.advantage}>
        <Link to="/">
          <img src="/images/advantage.png" alt="优势" />
        </Link>
      </section>
      <section className={styles.join}>
        <div className={styles.box}>
          <h2 className={styles.title}>
            <span className={styles.adorn} />
            <span>加盟动态</span>
            <span className={styles.adorn} />
          </h2>
          <div className={styles.list}>
            <div className={styles.item}>
              <Link className={styles.top} to="/">
                <img src="/images/defaultpic.gif" alt="拉面" />
                <h4>中国的牛肉拉面,自己的品牌</h4>
              </Link>
              <p>牛肉面又叫做牛大，是西北人融入日常生活习惯的必要元素，银川拉面加盟认准...</p>
              <Link className={styles.details} to="/">
                查看详情
              </Link>
            </div>
            <div className={styles.item}>
              <Link className={styles.top} to="/">
                <img src="/images/defaultpic.gif" alt="拉面" />
                <h4>中国的牛肉拉面,自己的品牌</h4>
              </Link>
              <p>牛肉面又叫做牛大，是西北人融入日常生活习惯的必要元素，银川拉面加盟认准...</p>
              <Link className={styles.details} to="/">
                查看详情
              </Link>
            </div>
            <div className={styles.item}>
              <Link className={styles.top} to="/">
                <img src="/images/defaultpic.gif" alt="拉面" />
                <h4>中国的牛肉拉面,自己的品牌</h4>
              </Link>
              <p>牛肉面又叫做牛大，是西北人融入日常生活习惯的必要元素，银川拉面加盟认准...</p>
              <Link className={styles.details} to="/">
                查看详情
              </Link>
            </div>
            <div className={styles.item}>
              <Link className={styles.top} to="/">
                <img src="/images/defaultpic.gif" alt="拉面" />
                <h4>中国的牛肉拉面,自己的品牌</h4>
              </Link>
              <p>牛肉面又叫做牛大，是西北人融入日常生活习惯的必要元素，银川拉面加盟认准...</p>
              <Link className={styles.details} to="/">
                查看详情
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.info}>
        <div className={styles.box}>
          <div className={styles.joinUs}>
            <div className={styles.head}>
              <h3>加盟动态</h3>
              <Link to="/">+ MORE</Link>
            </div>
            <ul>
              <li>
                <Link to="/">中国的牛肉拉面,自己的品牌</Link>
                <span>2021-08-20</span>
              </li>
              <li>
                <Link to="/">餐饮众筹,有苦有甜</Link>
                <span>2021-08-20</span>
              </li>
              <li>
                <Link to="/">牛肉面加盟，创业就是趁现在，拉面品牌</Link>
                <span>2021-08-20</span>
              </li>
              <li>
                <Link to="/">面向世界,爱传天下,牛肉面祝福大家七夕</Link>
                <span>2021-08-20</span>
              </li>
            </ul>
          </div>
          <div className={styles.contact}>
            <div className={styles.head}>
              <h3>联系我们</h3>
              <Link to="/">+ MORE</Link>
            </div>
            <p>经理：18637890085</p>
            <p>QQ：6364544</p>
            <p>加盟热线：0371-88888888</p>
            <p>网址：https://www.xxx.com</p>
            <p>地址：河南省开封县祥符区</p>
          </div>
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.box}>
          <div className={styles.us}>
            <div className={styles.head}>
              <h3>关于我们</h3>
              <Link to="/">+ MORE</Link>
            </div>
            <div className={styles.content}>
              <div>
                <img src="/images/defaultpic.gif" alt="about" />
              </div>
              <p>
                &emsp;&emsp;餐饮管理服务有限公司
                是集牛肉拉面原料(调料及调味品)研发、统一采购配送、半成品生产、技术指导、人才输出、门店运营及互联网+为一体的大型加盟连锁企业。
                餐饮管理公司成立于2019年，秉承顾客满意是指标、食品安全是底线的理念，本公司是一家以牛肉拉面为主，及产品生产、研发、配送、销售和店面设计、装修、形象设计打造为一体的清真餐饮专业化的服务企业，目前...
              </p>
            </div>
          </div>
          <div className={styles.feedback}>
            <div className={styles.head}>
              <h3>留言反馈</h3>
            </div>
            <form action="/" method="post">
              <div className={styles.field}>
                <input type="text" placeholder="* 联系人" />
                <input type="text" placeholder="* 联系电话" />
                <input type="email" placeholder="* 邮箱" />
              </div>
              <textarea placeholder="留言内容" />
              <div className={styles.actions}>
                <button className={styles.submit} type="submit">
                  提交
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

Home.pageConfig = {
  title: '首页',
};

export default Home;
