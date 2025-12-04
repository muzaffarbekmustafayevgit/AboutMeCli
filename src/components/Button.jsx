import React from "react";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  widthClass = "",
  className = "",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  onClick,
  ...props
}) => {

  const baseClasses =
    "relative inline-flex items-center justify-center font-medium rounded-md transition-all select-none";

  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className} group relative`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {/* Icon LEFT */}
      {!loading && icon && iconPosition === "left" && (
        <span className="mr-2 group-hover:translate-x-0.5 transition-transform">
          {icon}
        </span>
      )}

      {/* Button Text */}
      <span>{children}</span>

      {/* Icon RIGHT */}
      {!loading && icon && iconPosition === "right" && (
        <span className="ml-2 group-hover:translate-x-0.5 transition-transform">
          {icon}
        </span>
      )}

      {/* 🔥 Loading pastki chiziq */}
      {loading && (
        <span className="absolute left-0 bottom-0 w-full h-[2px] overflow-hidden">
          <span className="block h-full w-full bg-current animate-line" />
        </span>
      )}

      {/* CSS animations */}
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
    </button>
  );
};

export default Button;
