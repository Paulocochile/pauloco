import * as React from "react";
import Navbar from "../components/navbar";

const IndexPage = () => {
  return (
    <main className="min-h-screen 3xl:px-80 xl:px-40 bg-gray-100">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <title>Pablo</title>
      <Navbar />
      <div class="rounded-lg grid grid-cols-1 gap-4 content-center mt-8">
        
        <div className="text-center content-center my-0">
          <div className="text-center sm:inline-flex mx-auto h-auto content-center hidden"><img className="object-cover md:object-contain" src={`pabloinmountain.jpg`} alt="A dog smiling in a party hat" /></div>
          <div className="text-center inline-flex mx-auto h-auto content-center sm:hidden"><img className="object-cover md:object-contain" src={`pabloinmountainmobile.jpg`} alt="A dog smiling in a party hat" /></div>
          
          <h1 className="text-lg mt-2 md:text-3xl">
          Check out some&nbsp;

            <a
          href="/mountains"
          className=" text-blue-600 no-underline hover:text-blue-dark"
        >
           Mountains
        </a> I visited and some of my projects in&nbsp;
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
            <div className="text-md md:text-xl mt-5">
            <a href="https://twitter.com/pauloco15" class="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a>
            <a href="https://github.com/Paulocochile" class="fa fa-github" target="_blank" rel="noopener noreferrer"></a>
            <a href="https://www.linkedin.com/in/pabloayalar/" class="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
            &nbsp;&nbsp;&nbsp;&nbsp;pabloa99@gmail.com
            </div>
            

          </h1>

          

        </div>
      </div>
    </main>
  );
};

export default IndexPage;
