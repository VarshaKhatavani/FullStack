const Shimmer = () => {
  const shimmerCards = Array.from({ length: 8 }, (_, index) => (
    <div key={index} className="shimmer-card">
      <div className="shimmer-content">
        <div className="shimmer-text long"></div>
        <div className="shimmer-text"></div>
      </div>
    </div>
  ));

  return (
    <div className="shimmer-container flex flex-wrap items-center justify-between gap-3 p-12">
      {shimmerCards}
    </div>
  );
};

export default Shimmer;
