const Loading = () => {
  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Image skeleton */}
      <div className="skeleton h-[380px] w-full" />

      {/* Product info skeleton */}
      <div className="flex flex-col gap-4 px-5">
        <div className="skeleton h-6 w-3/4" />
        <div className="skeleton h-8 w-1/3" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-5/6" />
        <div className="skeleton h-4 w-2/3" />
      </div>

      {/* Related products skeleton */}
      <div className="flex gap-4 overflow-hidden px-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="min-w-[156px]">
            <div className="skeleton h-[170px] w-full rounded-lg" />
            <div className="skeleton mt-4 h-4 w-3/4" />
            <div className="skeleton mt-2 h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
