// app/not-found.tsx
import React from "react";
import { Link } from "@/i18n/navigation";
import ErrorLayout from "./errorLayout";

const NotFound = () => {
  return (
    <ErrorLayout params={params}>
      <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gradient-to-br from-blue-500 to-blue-900 text-white">
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-10 text-center w-full max-w-xl">
          <div className="text-8xl font-bold flex justify-center gap-3">
            <span className="animate-pulse">4</span>
            <span className="animate-pulse" style={{ animationDelay: "0.3s" }}>
              0
            </span>
            <span className="animate-pulse" style={{ animationDelay: "0.6s" }}>
              4
            </span>
          </div>
          <p className="text-lg my-5">
            Sorry, the page you are looking for was not found.
          </p>
          <Link
            href="/"
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white py-3 px-8 rounded-full transition duration-500 ease-in-out transform hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
        <footer className="mt-10 text-sm">
          © 2025 PT. MULSE CITRA NUSA. All rights reserved.
        </footer>
      </div>
    </ErrorLayout>
  );
};

export default NotFound;
