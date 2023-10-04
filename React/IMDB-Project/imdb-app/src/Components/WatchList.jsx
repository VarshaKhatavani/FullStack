export default function WatchList() {
  return (
    <>
      <div>I am WatchList</div>
      <div className="mb-5 flex justify-center">
        <div className=" w-[18rem] text-center bg-sky-100 text-sky-600 rounded-md p-3 m-2">
          All
        </div>
        <div className=" w-[18rem] text-center bg-slate-100 text-slate-500 rounded-md p-3 m-2">
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
                Ratings
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
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">
                <button
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </button>
              </td>
            </tr>
        </table>
      </div>
    </>
  );
}
