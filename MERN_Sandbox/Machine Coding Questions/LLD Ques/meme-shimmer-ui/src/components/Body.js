import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    try {
      setShowShimmer(true);
      const memesList = await fetch("https://meme-api.com/gimme/20");
      const data = await memesList.json();
      console.log(data);

      setMemes(data.memes);
      setShowShimmer(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-wrap  justify-center">
      {memes.map((meme, i) => {
        return <MemeCard data={meme} key={i} />;
      })}
      {showShimmer && <Shimmer />}
    </div>
  );
};

export default Body;
