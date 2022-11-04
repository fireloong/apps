import { LegacyRef } from 'react';
import { Link } from 'ice';
import { Icon } from '@iconify/react';
import styles from './index.module.scss';

const Header = ({
  handleClick,
  forwardedRef,
}: {
  handleClick: () => void;
  forwardedRef?: LegacyRef<HTMLElement>;
}) => {
  return (
    <header className={styles.header} ref={forwardedRef}>
      <div className={styles.box}>
        <Link to="/" className={styles.logo}>
          <img src="/images/logo.png" alt="logo" />
        </Link>
        <div className={styles.phone}>
          <Icon icon="ic:outline-phone-in-talk" className="text-neutral-5" width="48" />
          <div className={styles.text}>
            <p>服务热线：</p>
            <h2>18637890085</h2>
          </div>
        </div>
        <div className={styles.navBtn} onClick={handleClick}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
};

export default Header;
