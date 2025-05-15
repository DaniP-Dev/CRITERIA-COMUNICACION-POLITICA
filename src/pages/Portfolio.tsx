import React from "react";

const Portfolio = () => {
  return (
    <div>
      <div className="w-full overflow-x-auto">
        <div className="flex space-x-4 p-4 min-w-max">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="w-64 h-40 bg-blue-500 text-white flex items-center justify-center rounded-lg shrink-0"
            >
              Item {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
