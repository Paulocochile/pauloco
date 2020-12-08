import * as React from "react";
import Navbar from "../components/navbar";

const IndexPage = () => {
  return (
    <main className="min-h-full md:px-20 lg:px-32">
      <title>Pauloco</title>
      <Navbar />
      <div class="grid grid-cols-2 gap-4 my-30">
        <div>Photo Collage</div>
        <div>
          Hi there{" "}
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
          </svg>
          {" "}<br />
          Contact info<br />
           CV, Projects &
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
