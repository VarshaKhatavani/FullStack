export default function Pagination(props) {
  let current = props.currentPage;
  console.log(current);

  const pagesToShow = props.calculatePagesToShow();
  console.log(pagesToShow);
  const pageButtons = pagesToShow.map((page) => (
    <span
      key={page}
      onClick={() => props.onPageChanges(page)}
      className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      {page}
    </span>
    // <button
    //   key={page}
    //   onClick={() => props.onPageChanges(page)}
    //   className={page === props.currentPage ? "active" : ""}
    // >
    //   {page}
    // </button>
  ));

  return (
    <div className="flex justify-center m-4">
      <div className="p-2 hover:cursor-pointer">Prev</div>
      <span className="flex hover:cursor-pointer">{pageButtons}</span>
      <div className="p-2 hover:cursor-pointer">Next</div>
    </div>
  );
}
