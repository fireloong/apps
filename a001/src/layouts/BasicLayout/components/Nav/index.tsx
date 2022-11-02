import { useEffect, useState, LegacyRef } from 'react';
import { Link } from 'ice';
import classNames from 'classnames';
import { useBoolean } from 'ahooks';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import styles from './index.module.scss';

const Nav = ({
  slide,
  closeSlide,
  forwardedRef,
}: {
  slide: boolean;
  closeSlide: () => void;
  forwardedRef?: LegacyRef<HTMLElement>;
}) => {
  const [isStart, setIsStart] = useState(false);
  const [isSub, setIsSub] = useState(false);
  const [isActive, { toggle }] = useBoolean(false);

  const variants = {
    op: {
      open: { opacity: 1 },
      closed: { opacity: 0 },
    },
    r: {
      in: { right: 0 },
      out: { right: '-70%' },
    },
    sub: {
      show: { height: 36 },
      hidden: { height: 0 },
    },
  };

  useEffect(() => {
    if (slide) {
      setIsStart(true);
    }
  }, [slide]);

  const handleClick = () => {
    setIsStart(false);
    setTimeout(closeSlide, 300);
  };

  const handleSub = () => {
    if (isActive) {
      setIsSub(false);
      setTimeout(toggle, 300);
    } else {
      setIsSub(true);
      toggle();
    }
  };

  return (
    <>
      <nav className={classNames(styles.nav, { slide })} ref={forwardedRef}>
        <motion.div
          className={styles.close}
          onClick={handleClick}
          initial={{ opacity: 0 }}
          animate={isStart ? 'open' : 'closed'}
          variants={variants.op}
          transition={{ duration: 0.3 }}
        >
          <Icon icon="ic:outline-cancel" width="48" />
        </motion.div>
        <motion.ul
          initial={{ right: '-70%' }}
          animate={isStart ? 'in' : 'out'}
          variants={variants.r}
          transition={{ duration: 0.3 }}
        >
          <li>
            <Link to="/">网站首页</Link>
          </li>
          <li>
            <Link to="/about">关于我们</Link>
          </li>
          <li>
            <Link to="/pro">关于美食</Link>
          </li>
          <li>
            <Link to="/stores" className={styles.children}>
              店面展示
            </Link>
            <span className={styles.subBtn} onClick={handleSub}>
              <Icon icon="ic:baseline-arrow-forward-ios" rotate={1} height="24" />
            </span>
            <motion.ul
              className={classNames({ [styles.active]: isActive })}
              initial={{ height: 0 }}
              animate={isSub ? 'show' : 'hidden'}
              variants={variants.sub}
              transition={{ duration: 0.3 }}
            >
              <li>
                <Link to="/stores/joins">加盟店面展示</Link>
              </li>
            </motion.ul>
          </li>
          <li>
            <Link to="/advantage">加盟优势</Link>
          </li>
          <li>
            <Link to="/article">加盟动态</Link>
          </li>
          <li>
            <Link to="/contact">联系我们</Link>
          </li>
          <li>
            <Link to="/lbs">地图导航</Link>
          </li>
          <li>
            <Link to="/">留言反馈</Link>
          </li>
        </motion.ul>
      </nav>
    </>
  );
};

export default Nav;
