// import { useExternal } from 'ahooks';
import { Map } from 'react-bmapgl';

const Lbs = () => {
  // useExternal('https://api.map.baidu.com/api?v=3.0&ak=ps2IZMqQvwtEgvqqC3bmmiG5Cf9WG7RP', { type: 'js' });
  return (
    <>
      <dl>
        <dt>公司地址：</dt>
        <dd>河南省开封县祥符区</dd>
        <dt>&ensp;</dt>
        <dd>&ensp;</dd>
      </dl>
      <Map
        style={{ height: 450 }}
        center={new BMapGL.Point(116.404449, 39.914889)}
        zoom={12}
        heading={0}
        tilt={40}
        onClick={(e) => console.log(e)}
        enableScrollWheelZoom
      />
    </>
  );
};

export default Lbs;
