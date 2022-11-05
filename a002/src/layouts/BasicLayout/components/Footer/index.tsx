import { LegacyRef, useEffect } from 'react';
import store from '@/store';
import styles from './index.module.scss';

const Footer = ({ forwardedRef }: { forwardedRef?: LegacyRef<HTMLElement> }) => {
  const [infoState, infoDispatchers] = store.useModel('info');

  useEffect(() => {
    infoDispatchers.fetchInfo();
  }, [infoDispatchers]);

  return (
    <footer className={styles.footer} ref={forwardedRef}>
      <div className={styles.box}>
        <div className={styles.info}>
          <p>加盟热线：{infoState.joinNumber}</p>
          <p>店址：{infoState.address}</p>
          <p>版权所有：{infoState.copyright}</p>
          <small>{infoState.copyrightContent}</small>
        </div>
        <div className={styles.qr}>
          <img src={infoState.qr} alt="QR code" />
          <small>扫一扫了解加盟</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
