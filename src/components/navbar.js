import React from "react";

export default function Navbar() {
  return (
    <nav className="rounded-b-lg font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-2 px-1 sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a
          href="/"
          className="text-4xl text-blue-600 no-underline hover:text-blue-dark"
        >
          <b>Pablo's</b> Website
        </a>
      </div>
      <div>
      <a
          href="/mountains"
          className="text-2xl text-blue-600 no-underline hover:text-blue-dark md:ml-2"
        >
           Mountains
        </a> -
        <a
          href="/engineering"
          className="text-2xl text-blue-600 no-underline hover:text-blue-dark md:ml-2"
        >
           Engineering
        </a> -
        <a
          href="/strategy"
          className="text-2xl text-blue-600 no-underline hover:text-blue-dark ml-2"
        >
          Strategy
           
        </a> -
        <a
          href="/design"
          className="text-2xl text-blue-600 no-underline hover:text-blue-dark ml-2"
        >
          Design
        </a>
      </div>
    </nav>
  );
}
