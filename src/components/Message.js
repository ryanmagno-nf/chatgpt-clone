import bot from "../src/icons/bot.png";
import user from "../src/icons/user.png";

import styles from "./Message.module.css";

export default function Message({ role, content }) {
  return (
    <div className={styles.wrapper}>
      <div>
        <img
          src={role === "assistant" ? bot : user}
          className={styles.avatar}
          alt="profile avatar"
        />
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
}
