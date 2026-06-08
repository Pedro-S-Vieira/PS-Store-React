const Loading = () => {
  return (
    <div className="flex flex-col gap-8 py-8">
      {/* Banner skeleton */}
      <div className="skeleton h-[150px] w-full" />

      {/* Categories skeleton */}
      <div className="flex gap-4 overflow-hidden px-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex shrink-0 flex-col items-center gap-2">
            <div className="skeleton h-[50px] w-[50px] rounded-full" />
            <div className="skeleton h-3 w-12" />
          </div>
        ))}
      </div>

      {/* Product sections skeleton */}
      {Array.from({ length: 2 }).map((_, section) => (
        <div key={section} className="flex flex-col gap-4">
          <div className="skeleton mx-5 h-5 w-24" />
          <div className="flex gap-4 overflow-hidden px-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="min-w-[156px]">
                <div className="skeleton h-[170px] w-full rounded-lg" />
                <div className="skeleton mt-4 h-4 w-3/4" />
                <div className="skeleton mt-2 h-4 w-1/2" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
