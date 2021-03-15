import * as React from "react";
import Navbar from "../components/navbar";

const IndexPage = () => {
  return (
    <main className="min-h-screen 3xl:px-80 xl:px-40 bg-gray-100">
      <title>Pablo</title>
      <Navbar />
      <div class="rounded-lg grid grid-cols-1 gap-4 content-center mt-6">
        
        <div className="text-center content-center my-0">
          <div className="text-center sm:inline-flex mx-auto h-auto content-center hidden"><img className="object-cover md:object-contain" src={`pabloinmountain.png`} alt="A dog smiling in a party hat" /></div>
          <div className="text-center inline-flex mx-auto h-auto content-center sm:hidden"><img className="object-cover md:object-contain" src={`pabloinmountainmobile.png`} alt="A dog smiling in a party hat" /></div>
          
          <h1 className="text-lg mt-1 md:text-3xl">
          Check out some&nbsp;

            <a
          href="/mountains"
          className=" text-blue-600 no-underline hover:text-blue-dark"
        >
           Mountains
        </a> I discovered and my work in&nbsp;
            <a
          href="/engineering"
          className=" text-blue-600 no-underline hover:text-blue-dark"
        >
           Engineering
        </a>,&nbsp;
        <a
          href="/strategy"
          className="text-blue-600 no-underline hover:text-blue-dark"
        >
          Strategy
           
        </a> &&nbsp;
        <a
          href="/design"
          className=" text-blue-600 no-underline hover:text-blue-dark"
        >
          Design
        </a>.

            <br/>
            <div className="text-md md:text-2xl mt-6">
            Email me at pabloa99@gmail.com
            </div>
            

          </h1>

          

        </div>
      </div>
    </main>
  );
};

export default IndexPage;
