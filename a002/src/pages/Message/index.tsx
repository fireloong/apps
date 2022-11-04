import styles from './index.module.scss';

const Message = () => {
  return (
    <form className={styles.form} action="#" method="post">
      <div className={styles.field}>
        <label htmlFor="title">
          <span className="text-red mr-1">*</span>
          <span className="text-gray-5">标题：</span>
        </label>
        <div className={styles.input}>
          <input id="title" type="text" name="title" />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="content">
          <span className="text-red mr-1">*</span>
          <span className="text-gray-5">留言内容：</span>
        </label>
        <div className={styles.input}>
          <textarea name="content" id="content" />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="name">
          <span className="text-red mr-1">*</span>
          <span className="text-gray-5">联系人：</span>
        </label>
        <div className={styles.input}>
          <input id="name" type="text" name="name" />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="phone">
          <span className="text-red mr-1">*</span>
          <span className="text-gray-5">联系电话：</span>
        </label>
        <div className={styles.input}>
          <input id="phone" type="text" name="phone" />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="email">
          <span className="text-gray-5">邮箱：</span>
        </label>
        <div className={styles.input}>
          <input id="email" type="email" name="email" />
        </div>
      </div>
      <div className={styles.field}>
        <label>&ensp;</label>
        <button className={styles.submit} type="submit">确认提交</button>
        <button className={styles.reset} type="reset">取消返回</button>
      </div>
    </form>
  );
};

Message.pageConfig = {
  title: '留言反馈',
};

export default Message;
