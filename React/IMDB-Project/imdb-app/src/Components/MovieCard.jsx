import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function MovieCard(props) {
  const [loading, setLoading] = useState(true);
  console.log(props);
  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }

  return (
    <>
      {loading ? (
        <Skeleton width={180} height={240} />
      ) : (
        <>
          <div
            className="h-[40vh] w-[180px] bg-cover rounded-2xl overflow-hidden hover:scale-110 duration-300 flex items-end"
            style={{
              backgroundImage: `url(http://image.tmdb.org/t/p/original/${props.poster_path})`,
            }}
          >
            <div className="bg-stone-900/60 w-full p-2 flex-row relative  text-white">
              <p className="w-40 break-words"> {props.title} </p>

              <span
                // onClick={() => props.handleAddToWatchList(props.id)}
                className="m-2 bottom-0 right-0  w-6 absolute   hover:cursor-pointer"
              >
                {" "}
                {console.log(props.watchList)}
                {props.watchList && props.watchList.includes(props.id) ? (
                  <svg
                    onClick={() => props.handleRemoveFromWatchList(props.id)}
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 14 20"
                  >
                    <path
                      stroke="currentColor"
                      d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"
                    />
                  </svg>
                ) : (
                  <svg
                    onClick={() => props.handleAddToWatchList(props.id)}
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 14 20"
                  >
                    <path
                      stroke="currentColor"
                      d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
