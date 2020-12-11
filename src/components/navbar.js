import React from "react";

export default function Navbar() {
  return (
    <nav className=" font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a
          href="/"
          className="text-2xl text-blue-600 no-underline hover:text-blue-dark"
        >
          About <b>P</b>ablo
        </a>
      </div>
      <div>
        <a
          href="/engineering"
          className="text-lg text-blue-600 no-underline hover:text-blue-dark ml-2"
        >
           Engineering
        </a> ,
        <a
          href="/planning"
          className="text-lg text-blue-600 no-underline hover:text-blue-dark ml-2"
        >
          Management
           
        </a> &
        <a
          href="/designing"
          className="text-lg text-blue-600 no-underline hover:text-blue-dark ml-2"
        >
          Design
        </a>
      </div>
    </nav>
  );
}
