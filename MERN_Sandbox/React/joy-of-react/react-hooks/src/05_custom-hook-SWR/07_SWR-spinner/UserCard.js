import React from 'react';

function UserCard({ name, email }) {
  return (
    <article className="user-card">
      <p className="name">{name}</p>
      <p className="email">{email}</p>
    </article>
  );
}

export default UserCard;