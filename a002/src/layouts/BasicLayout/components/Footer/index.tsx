import { LegacyRef } from 'react';
import styles from './index.module.scss';

const Footer = ({ forwardedRef }: { forwardedRef?: LegacyRef<HTMLElement> }) => {
  return (
    <footer className={styles.footer} ref={forwardedRef}>
      <div className={styles.box}>
        <div className={styles.info}>
          <p>加盟热线：0371-88888888</p>
          <p>店址：河南省开封县祥符区</p>
          <p>版权所有：河南省开封县祥符区</p>
          <small>Copyright © 2002-2021 某某拉面加盟有限公司 版权所有 网站地图</small>
        </div>
        <div className={styles.qr}>
          <img src="/images/qrcode.png" alt="QR code" />
          <small>扫一扫了解加盟</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
