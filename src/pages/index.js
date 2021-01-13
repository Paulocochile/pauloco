import * as React from "react";
import Navbar from "../components/navbar";
import Profile from "../images/profile.jpg"

const IndexPage = () => {
  return (
    <main className="min-h-screen 3xl:px-80 xl:px-40 bg-gray-100">
      <title>Pauloco</title>
      <Navbar />
      <div class="rounded-lg grid grid-cols-2 gap-4 my-14 p-10 content-center">
        <div><img src={Profile} alt="A dog smiling in a party hat" /></div>
        <div className="ml-6">
          <div className="flex content-center mt-10">
            <div className="text-2xl">
              Hi there, I'm <b>Pablo</b>  &nbsp;
            </div>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
              />
            </svg>{" "}
          </div>
          
          <br />
          <h1 className="text-lg">
            <br />
            Check out my projects in:
            <br />
            
            <a
          href="/engineering"
          className="text-2xl text-blue-600 no-underline hover:text-blue-dark"
        >
           Engineering
        </a> -&nbsp;
        <a
          href="/planning"
          className="text-2xl text-blue-600 no-underline hover:text-blue-dark"
        >
          Management
           
        </a> -&nbsp;
        <a
          href="/designing"
          className="text-2xl text-blue-600 no-underline hover:text-blue-dark"
        >
          Design
        </a>
            
            <br />
            <br />
            Contact:
            <br />
            pabloa99@gmail.com
            
            <br />
            <br />
            <br />
          </h1>
          <br />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
