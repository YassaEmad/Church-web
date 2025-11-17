import * as React from "react";

function Label({ className = "", children, ...props }) {
  return (
    <label
      className={`flex items-center gap-2 text-sm leading-none font-medium select-none disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}

export { Label };
