import React from "react";

// Define a type for the props that includes authorName and all other possible properties
type PlaceholderProps = {
  authorName?: string; // Explicitly define authorName as an optional prop
};

const Placeholder: React.FC<PlaceholderProps> = () => {

  return (
    <div className="hidden items-center justify-center h-screen text-2xl font-semibold text-gray-600">
      Coming Soon
    </div>
  );
};

export default Placeholder;