import React from 'react';

import styles from './UserProfileCard.module.css';

function UserProfileCard({ user }) {
  const profileUrl = `/users/${user.handle}`;
  const imageAlt = `${user.avatarDescription} (user profile photo)`;

  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        alt={imageAlt}
        src={user.avatarSrc}
      />
      <a
        href={profileUrl}
        className={styles.userProfileLink}
      >
        {user.name}
      </a>
    </div>
  );
}

export default UserProfileCard;