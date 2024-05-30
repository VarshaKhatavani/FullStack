import React from "react";
import "../3. map/07-avatar.css";
import Avatar from "./07-Avatar";

const data = [
  {
    id: "001",
    src: "https://sandpack-bundler.vercel.app/img/avatars/001.png",
    alt: "person with curly hair and a black T-shirt",
  },
  {
    id: "002",
    src: "https://sandpack-bundler.vercel.app/img/avatars/002.png",
    alt: "person wearing a hijab and glasses",
  },
  {
    id: "003",
    src: "https://sandpack-bundler.vercel.app/img/avatars/003.png",
    alt: "person with short hair wearing a blue hoodie",
  },
  {
    id: "004",
    src: "https://sandpack-bundler.vercel.app/img/avatars/004.png",
    alt: "person with a pink mohawk and a raised eyebrow",
  },
];

const AvatarApp = () => {
  return (
    <div className="avatar-set">
      {data.map((profile) => {
        return <Avatar id={profile.id} src={profile.src} alt={profile.alt} />;
      })}
    </div>
  );
};

export default AvatarApp;
