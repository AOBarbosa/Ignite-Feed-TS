import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  const [applauseCount, setApplauseCount] = useState(0);

  function handleApplauseCount() {
    setApplauseCount((state) => {
      return state + 1;
    });
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="http://github.com/AOBarbosa.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>André Barbosa</strong>
              <time
                title="31 de Janeiro de 2023"
                dateTime="2023-01-31 14:52:15"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleApplauseCount}>
            <ThumbsUp size={20} />
            Aplaudir <span>{applauseCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
