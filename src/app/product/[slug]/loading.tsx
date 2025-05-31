"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen w-full justify-center">
      <div className="w-2/3">
        <Progress value={progress} />
      </div>
    </div>
  );
};

export default Loading;
