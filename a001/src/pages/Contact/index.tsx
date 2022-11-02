import { Link } from 'ice';
import styles from './index.module.scss';

const Contact = () => {
  const handleClick = () => {
    window.location.href = 'mailto:admin@91084.com';
  };

  return (
    <>
      <dl className={styles.contact}>
        <dt>经理：</dt>
        <dd>18637890085</dd>
        <dt>QQ：</dt>
        <dd>6364544</dd>
        <dt>加盟热线：</dt>
        <dd>0371-88888888</dd>
        <dt>网址：</dt>
        <dd>https://562.yingzicms.com</dd>
        <dt>地址：</dt>
        <dd>河南省开封县祥符区</dd>
        <dt>&emsp;</dt>
        <dd>
          <Link to="/">给我留言</Link>
          <a href="#" onClick={handleClick}>
            发送邮件
          </a>
        </dd>
      </dl>
    </>
  );
};

Contact.pageConfig = {
  title: '联系我们',
};

export default Contact;
