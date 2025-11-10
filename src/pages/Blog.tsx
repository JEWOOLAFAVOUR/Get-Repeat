import React, { useEffect } from "react";

const Blog: React.FC = () => {
  useEffect(() => {
    // Redirect to the external blog
    window.location.href =
      "https://blog.getrepeat.io/?_gl=1*eq7gxc*_ga*NzcxMzQzNTg2LjE3NjE4MjMyNzc.*_ga_RT32N17D8W*czE3NjI3NTcyMjQkbzIzJGcxJHQxNzYyNzU4NTM1JGoyMSRsMCRoMA..";
  }, []);

  return (
    <div className="min-h-screen bg-pale flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto mb-4"></div>
        <p className="text-[16px] font-light text-gray-600">
          Redirecting to blog...
        </p>
      </div>
    </div>
  );
};

export default Blog;
