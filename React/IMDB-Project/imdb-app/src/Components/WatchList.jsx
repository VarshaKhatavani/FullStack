export default function WatchList() {
  let movies = [
    {
      adult: false,
      backdrop_path: "/ogFIG0fNXEYRQKrpnoRJcXQNX9n.jpg",
      id: 619930,
      title: "Narvik",
      original_language: "no",
      original_title: "Kampen om Narvik",
      overview:
        "April, 1940. The eyes of the world are on Narvik, a small town in northern Norway, a source of the iron ore needed for Hitler's war machine. Through two months of fierce winter warfare, the German leader is dealt with his first defeat.",
      poster_path: "/gU4mmINWUF294Wzi8mqRvi6peMe.jpg",
      media_type: "movie",
      genre_ids: [10752, 18, 36, 28],
      popularity: 321.063,
      release_date: "2022-12-25",
      video: true,
      vote_average: 7.406,
      vote_count: 53,
    },
    {
      adult: false,
      backdrop_path: "/6RCf9jzKxyjblYV4CseayK6bcJo.jpg",
      id: 804095,
      title: "The Fabelmans",
      original_language: "en",
      original_title: "The Fabelmans",
      overview:
        "Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.",
      poster_path: "/d2IywyOPS78vEnJvwVqkVRTiNC1.jpg",
      media_type: "movie",
      genre_ids: [18],
      popularity: 163.3,
      release_date: "2022-11-11",
      video: false,
      vote_average: 8.02,
      vote_count: 561,
    },
    {
      adult: false,
      backdrop_path: "/fTLMsF3IVLMcpNqIqJRweGvVwtX.jpg",
      id: 1035806,
      title: "Detective Knight: Independence",
      original_language: "en",
      original_title: "Detective Knight: Independence",
      overview:
        "Detective James Knight 's last-minute assignment to the Independence Day shift turns into a race to stop an unbalanced ambulance EMT from imperiling the city's festivities. The misguided vigilante, playing cop with a stolen gun and uniform, has a bank vault full of reasons to put on his own fireworks show... one that will strike dangerously close to Knight's home.",
      poster_path: "/jrPKVQGjc3YZXm07OYMriIB47HM.jpg",
      media_type: "movie",
      genre_ids: [28, 53, 80],
      popularity: 119.407,
      release_date: "2023-01-20",
      video: false,
      vote_average: 6.6,
      vote_count: 10,
    },
    {
      adult: false,
      backdrop_path: "/e782pDRAlu4BG0ahd777n8zfPzZ.jpg",
      id: 555604,
      title: "Guillermo del Toro's Pinocchio",
      original_language: "en",
      original_title: "Guillermo del Toro's Pinocchio",
      overview:
        "During the rise of fascism in Mussolini's Italy, a wooden boy brought magically to life struggles to live up to his father's expectations.",
      poster_path: "/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg",
      media_type: "movie",
      genre_ids: [16, 14, 18],
      popularity: 754.642,
      release_date: "2022-11-18",
      video: false,
      vote_average: 8.354,
      vote_count: 1694,
    },
  ];
  return (
    <>
      <div className="flex justify-center ">
        <div className=" w-[15rem] text-center bg-sky-100 text-sky-600 rounded-md p-3 m-2 justify-center items-center flex ">
          All
        </div>
        <div className=" w-[15rem] text-center bg-slate-100 text-slate-500 rounded-md p-3 m-2 justify-center items-center flex">
          All
        </div>
      </div>

      <div className="flex justify-center my-4 ">
        <input
          className=" relative w-[18rem] bg-slate-100
                 outline-none p-3 rounded-md  px-4 text-base"
          placeholder="Search Movies"
          type="text"
        />
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Movie Name
              </th>
              <th scope="col" class="px-6 py-3">
                <i class="fa-solid fa-up-long"></i> &nbsp;&nbsp;Ratings{" "}
                &nbsp;&nbsp;
                <i class="fa-solid fa-down-long"></i>
              </th>
              <th scope="col" class="px-6 py-3">
                Genre
              </th>
              <th scope="col" class="px-6 py-3">
                Release Date
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movieObj) => {
              return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="pl-3 pr-0 py-2 font-medium flex text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="h-[5rem] w-[6rem] rounded-md"
                      src={
                        "https://image.tmdb.org/t/p/original/" +
                        movieObj.poster_path
                      }
                      alt=""
                    />{" "}
                    &nbsp;&nbsp;&nbsp;
                    <div className="justify-items-center px-4 py-9">
                      {movieObj.title}
                    </div>
                  </th>
                  <td class="px-6 py-4">
                    <i class="fa-solid fa-star text-yellow-300"></i>{" "}
                    &nbsp;&nbsp;
                    {movieObj.vote_average}
                  </td>
                  <td class="px-6 py-4">
                    {" "}
                    <span class="py-2 px-4 shadow-md no-underline rounded-full bg-slate-100 text-grey font-sans font-semibold text-sm  focus:outline-none mr-2">
                      Action
                    </span>
                  </td>
                  <td class="px-6 py-4">{movieObj.release_date}</td>
                  <td class="px-6 py-4 text-red-500 items-center">
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
