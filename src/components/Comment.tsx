import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from './Avatar';
import styles from '../styles/components/Comment.module.css';

type CommentProps = {
  content: string;
  onRemoveComment(e: string): void;
};

function Comment({ content, onRemoveComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleRemoveComment() {
    onRemoveComment(content);
  }

  function handleLikeComment() {
    setLikeCount((prev) => prev + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/AndresdoSantos.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Andres doSantos</strong>

              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:11:36">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleRemoveComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export { Comment };
