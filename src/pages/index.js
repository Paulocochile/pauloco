import * as React from "react";
import Navbar from "../components/navbar";

const IndexPage = () => {
  return (
    <main className="min-h-screen md:px-20 lg:px-32 bg-gray-100">
      <title>Pauloco</title>
      <Navbar />
      <div class="grid grid-cols-2 gap-4 my-14 p-10 content-center bg-white">
        <div>Photo Collage</div>
        <div>
          <div className="flex content-center my-2">
            <div className="text-4xl">Hi there, I'm <b>P</b>ablo &nbsp;</div>{" "}
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
          <div className="text-xl">
            You can call me: Pauloco,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pablo Ayala Raineri,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pablo Ayala Rolando.
          </div>
          <br />
          <h1 className="text-lg">
            I have studies and experience in Mechanical Engineering, Industrial
            Engineering, Design Thinking, User Experience, Product Design, IT,
            Project Management, Product Management, Innovation.
          </h1>
         
          <br />
          I organized my products & projects here. Check them out :) 
          <br />
          <br />
          CV - Design - Engineering - Management
          <br />
          <br />
          Contact
          <br />
          <br />
          <br />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
