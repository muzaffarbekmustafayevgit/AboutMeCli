import React from "react";

const  Loading = () => {
  return (
    <span className="absolute left-0 bottom-0 w-full h-[2px] overflow-hidden">
      <span className="block h-full w-full bg-current animate-line" />
      <style jsx>{`
        @keyframes line-move {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-line {
          animation: line-move 1.2s linear infinite;
        }
      `}</style>
    </span>
  );
};

export default Loading;
