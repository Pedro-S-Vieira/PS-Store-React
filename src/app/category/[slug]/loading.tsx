const Loading = () => {
  return (
    <div className="flex flex-col gap-8 p-5">
      {/* Badge skeleton */}
      <div className="skeleton h-8 w-40 rounded-full" />

      {/* Grid skeleton */}
      <div className="grid grid-cols-2 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="skeleton h-[170px] w-full rounded-lg" />
            <div className="skeleton h-4 w-3/4" />
            <div className="skeleton h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
