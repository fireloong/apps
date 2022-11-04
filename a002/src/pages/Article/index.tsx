import { Link } from 'ice';
import styles from './index.module.scss';

const Article = () => {
  return (
    <>
      <div className={styles.actions}>
        <Link to="/article">全部</Link>
      </div>
      <ul className={styles.list}>
        <li>
          <Link to="/">
            <h3>中国的牛肉拉面，自己的品牌</h3>
            <span>2021-08-20</span>
            <p>牛肉面又叫做牛大，是西北人融入日常生活习惯的必要元素，银川拉面加盟认准筋的亨拉面</p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <h3>餐饮众筹,有苦有甜</h3>
            <span>2021-08-20</span>
            <p>
              如今，互联网创新融资模式中的众筹，正在反哺传统行业，为其注入了新的发展活力。在外地，一大波通过众筹发展起来的酒店、餐饮及各种新兴项目接踵落地，但其发展之路似乎并不顺畅。那
            </p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <h3>牛肉面加盟，创业就是趁现在，拉面品牌</h3>
            <span>2021-08-20</span>
            <p>
              筋的亨牛肉面加盟，创业就是要未来！ 筋的亨牛肉面加盟，创业就是要未来！
              兰州拉面加盟，筋的亨牛肉面加盟，胆量决定财富，想常人之不敢想，做常人之不敢做，有没有勇气走出第1步，往
            </p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <h3>面向世界,爱传天下,牛肉面祝福大家七夕快乐</h3>
            <span>2021-08-20</span>
            <p>
              在激流勇进的市场发展当中，筋的亨牛肉拉面不断进行创新。改变了传统餐饮行业发展中存在的种种弊端，开始以市场模式来将筋的亨牛肉拉面进行布局，从投资拉动的市场向消费拉动的市场的
            </p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <h3>牛肉面加盟哪家口碑好？</h3>
            <span>2021-08-20</span>
            <p>
              牛肉面在我国市场可谓是顺风顺水，老老少少基本上都会迷恋这个牛肉面，所以在这样的市场下，银川筋的亨牛肉拉面加盟因此是能够在市场上有地位的如果你想要选择一个加盟项目的话，那么
            </p>
          </Link>
        </li>
      </ul>
      <div className={styles.total}>
        <span>共1页5条记录</span>
      </div>
    </>
  );
};

Article.pageConfig = {
  title: '加盟动态',
};

export default Article;
