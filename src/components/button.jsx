import * as React from "react";

function Button({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) {
  // تحديد كلاسات حسب الـ variant
  let variantClasses = "";
  switch (variant) {
    case "destructive":
      variantClasses = "bg-red-600 text-white hover:bg-red-700";
      break;
    case "outline":
      variantClasses = "border border-gray-300 text-gray-700 hover:bg-gray-100";
      break;
    case "secondary":
      variantClasses = "bg-gray-200 text-gray-800 hover:bg-gray-300";
      break;
    case "ghost":
      variantClasses = "bg-transparent text-gray-700 hover:bg-gray-100";
      break;
    case "link":
      variantClasses = "text-blue-600 underline hover:text-blue-700";
      break;
    default:
      variantClasses = "bg-blue-600 text-white hover:bg-blue-700";
  }

  // تحديد الكلاسات حسب الحجم
  let sizeClasses = "";
  switch (size) {
    case "sm":
      sizeClasses = "h-8 px-3 text-sm";
      break;
    case "lg":
      sizeClasses = "h-12 px-6 text-lg";
      break;
    case "icon":
      sizeClasses = "h-10 w-10 p-2";
      break;
    default:
      sizeClasses = "h-10 px-4 text-base";
  }

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
