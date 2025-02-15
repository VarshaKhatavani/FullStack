import React from "react";
import "./09-profileCard.css";

// GOAL:
// Render an unordered list with the class
// “badge-list” when the user has at least
// 1 badge.
//
// Each badge is an object with this shape:
// { slug: string, label: string }
//
// STRETCH:
// If the user has 3+ badges, the “golden”
// class should be added to the unordered
// list (in addition to “badge-list”).

const ProfileCard = ({ profile }) => {
  return (
    <article className="profile-card">
      <header>
        <img alt={profile.imageAlt} src={profile.imageSrc} />
        <h2>{profile.name}</h2>
        <p className="joined">Joined {profile.joinDate}</p>
        {profile.badges.length > 0 && (
          <ul
            className={
              profile.badges.length >= 3 ? "badge-list golden" : "badge-list"
            }
          >
            {profile.badges.map((badge, index) => (
              <li key={badge.slug}>{badge.label}</li>
            ))}
          </ul>
        )}
      </header>
    </article>
  );
};

export default ProfileCard;
