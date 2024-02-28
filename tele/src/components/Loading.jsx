// Import React, which is necessary for using JSX syntax
import React from 'react';

// Define the Loading component
const Loading = () => {
 // The Loading component returns a JSX element that represents the loading indicator
 return (
    // A div element is used as a container for the loading indicator
    <div className="flex justify-center items-center h-screen">
      {/* The actual loading indicator is a div with a spinning animation */}
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
 );
};

// Export the Loading component
export default Loading;
