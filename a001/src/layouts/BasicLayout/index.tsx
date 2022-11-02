import { useEffect, useRef, useState } from 'react';
import { useBoolean, useRafState, useSize } from 'ahooks';
import Header from './components/Header';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Footer from './components/Footer';

const BasicLayout = ({ children }) => {
  const [navSlide, { setTrue, setFalse }] = useBoolean(false);
  const [sizeWindow, setSizeWindow] = useRafState({ width: 0, height: 0 });
  const [minHeight, setMinHeight] = useState(0);
  const ref = {
    header: useRef(null),
    nav: useRef(null),
    footer: useRef(null),
  };
  const size = {
    header: useSize(ref.header),
    nav: useSize(ref.nav),
    footer: useSize(ref.footer),
  };

  useEffect(() => {
    const onResize = () => {
      setSizeWindow({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    };
    onResize();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [setSizeWindow]);

  useEffect(() => {
    if (size.nav?.height !== 0 && (size.nav?.height || 0) < sizeWindow.height) {
      setMinHeight(
        sizeWindow.height - (size.header?.height || 0) - (size.nav?.height || 0) - (size.footer?.height || 0),
      );
    } else {
      setMinHeight(sizeWindow.height - (size.header?.height || 0) - (size.footer?.height || 0));
    }
  }, [size.footer?.height, size.header?.height, size.nav?.height, sizeWindow]);

  return (
    <>
      <Header handleClick={setTrue} forwardedRef={ref.header} />
      <Nav slide={navSlide} closeSlide={setFalse} forwardedRef={ref.nav} />
      <main style={{ minHeight }}>
        <Banner />
        {children}
      </main>
      <Footer forwardedRef={ref.footer} />
    </>
  );
};

export default BasicLayout;
