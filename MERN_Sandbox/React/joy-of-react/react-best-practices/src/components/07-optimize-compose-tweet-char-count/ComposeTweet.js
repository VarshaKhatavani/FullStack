import React from 'react';

import VisuallyHidden from './VisuallyHidden';
import styles from './ComposeTweet.module.css';

function ComposeTweet({ maxChars, handleSubmit }) {
  const [message, setMessage] = React.useState('');
  const [charsRemaining, setCharsRemaining] =
    React.useState(maxChars);

  const id = React.useId();

  React.useEffect(() => {
    setCharsRemaining(maxChars - message.length);
  }, [maxChars, message]);

  return (
    <form
      className={styles.wrapper}
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(message);
        setMessage('');
      }}
    >
      <div className={styles.header}>
        <label htmlFor={id}>Compose Tweet:</label>
        <span
          className={styles.count}
          style={{
            color: getCharacterColor(
              charsRemaining
            ),
          }}
        >
          <VisuallyHidden>
            Characters remaining:{' '}
          </VisuallyHidden>
          {charsRemaining}
        </span>
      </div>

      <textarea
        id={id}
        className={styles.textarea}
        placeholder="What's happening?"
        required={true}
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />

      <div className={styles.footer}>
        <button className={styles.tweetBtn}>
          Tweet
        </button>
      </div>
    </form>
  );
}

function getCharacterColor(charsRemaining) {
  if (charsRemaining < 0) {
    return 'hsl(0deg 100% 50%)';
  } else if (charsRemaining < 15) {
    return 'hsl(30deg 80% 40%)';
  } else {
    return 'black';
  }
}

export default ComposeTweet;