import React from "react";

export default function Navbar() {
  return (
    <nav className="rounded-b-lg font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a
          href="/"
          className="text-3xl text-blue-600 no-underline hover:text-blue-dark"
        >
          <b>Pablo Ayala Raineri</b> Projects
        </a>
      </div>
      <div>
        <a
          href="/engineering"
          className="text-xl text-blue-600 no-underline hover:text-blue-dark ml-2"
        >
           Engineering
        </a> -
        <a
          href="/planning"
          className="text-xl text-blue-600 no-underline hover:text-blue-dark ml-2"
        >
          Management
           
        </a> -
        <a
          href="/designing"
          className="text-xl text-blue-600 no-underline hover:text-blue-dark ml-2"
        >
          Design
        </a> -
        <a
          href="/designing"
          className="text-xl text-blue-600 no-underline hover:text-blue-dark ml-2"
        >
         Economics
        </a>
      </div>
    </nav>
  );
}
