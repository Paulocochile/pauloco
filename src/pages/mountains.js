import * as React from "react";
import Navbar from "../components/navbar";

const Mountains = () => {
  return (
    <main className="min-h-screen 3xl:px-80 xl:px-40 bg-gray-100 pb-10">
      <title>Pablo/Mountains</title>
      <Navbar />
        <div className="mt-8"></div>
        <div className="text-center sm:inline-flex mx-auto h-auto content-center hidden"><img className="object-cover md:object-contain" src={`floresdelvalle.jpg`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center inline-flex mx-auto h-auto content-center sm:hidden"><img className="object-cover md:object-contain" src={`floresdelvallemobile.jpg`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center sm:inline-flex mx-auto h-auto content-center hidden"><img className="object-cover md:object-contain" src={`kerrybeach.jpg`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center inline-flex mx-auto h-auto content-center sm:hidden"><img className="object-cover md:object-contain" src={`kerrybeachmobile.jpg`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center sm:inline-flex mx-auto h-auto content-center hidden"><img className="object-cover md:object-contain" src={`glacier.jpg`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center inline-flex mx-auto h-auto content-center sm:hidden"><img className="object-cover md:object-contain" src={`glaciermobile.jpg`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center sm:inline-flex mx-auto h-auto content-center hidden"><img className="object-cover md:object-contain" src={`garda.jpg`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center inline-flex mx-auto h-auto content-center sm:hidden"><img className="object-cover md:object-contain" src={`gardamobile.jpg`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center sm:inline-flex mx-auto h-auto content-center hidden"><img className="object-cover md:object-contain" src={`killarney.jpg`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center inline-flex mx-auto h-auto content-center sm:hidden"><img className="object-cover md:object-contain" src={`killarneymobile.jpg`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center sm:inline-flex mx-auto h-auto content-center hidden"><img className="object-cover md:object-contain" src={`cementerio.jpg`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center inline-flex mx-auto h-auto content-center sm:hidden"><img className="object-cover md:object-contain" src={`cementeriomobile.jpg`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center sm:inline-flex mx-auto h-auto content-center hidden"><img className="object-cover md:object-contain" src={`australvalley.jpg`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center inline-flex mx-auto h-auto content-center sm:hidden"><img className="object-cover md:object-contain" src={`australvalleymobile.jpg`} alt="A dog smiling in a party hat" /></div>
    </main>
  );
};

export default Mountains;

