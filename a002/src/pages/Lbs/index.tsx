// import { useExternal } from 'ahooks';
import styles from './index.module.scss';

const Lbs = () => {
  // useExternal('https://api.map.baidu.com/api?v=3.0&ak=ps2IZMqQvwtEgvqqC3bmmiG5Cf9WG7RP', { type: 'js' });
  return (
    <>
      <dl className={styles.info}>
        <dt>公司地址：</dt>
        <dd>河南省开封县祥符区</dd>
        <dt>&ensp;</dt>
        <dd>&ensp;</dd>
      </dl>
      <div>地图显示</div>
    </>
  );
};

Lbs.pageConfig = {
  title: '地图导航',
};

export default Lbs;
