import * as React from "react";
import Navbar from "../components/navbar";

const Mountains = () => {
  return (
    <main className="min-h-screen 3xl:px-80 xl:px-40 bg-gray-100 pb-10">
      <title>Pablo/Mountains</title>
      <Navbar />
        <div className="text-center sm:inline-flex mx-auto h-auto content-center hidden"><img className="object-cover md:object-contain" src={`floresdelvalle.png`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center inline-flex mx-auto h-auto content-center sm:hidden"><img className="object-cover md:object-contain" src={`floresdelvallemobile.png`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center sm:inline-flex mx-auto h-auto content-center hidden"><img className="object-cover md:object-contain" src={`kerrybeach.png`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center inline-flex mx-auto h-auto content-center sm:hidden"><img className="object-cover md:object-contain" src={`kerrybeachmobile.png`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center sm:inline-flex mx-auto h-auto content-center hidden"><img className="object-cover md:object-contain" src={`glacier.png`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center inline-flex mx-auto h-auto content-center sm:hidden"><img className="object-cover md:object-contain" src={`glaciermobile.png`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center sm:inline-flex mx-auto h-auto content-center hidden"><img className="object-cover md:object-contain" src={`garda.png`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center inline-flex mx-auto h-auto content-center sm:hidden"><img className="object-cover md:object-contain" src={`gardamobile.png`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center sm:inline-flex mx-auto h-auto content-center hidden"><img className="object-cover md:object-contain" src={`killarney.png`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center inline-flex mx-auto h-auto content-center sm:hidden"><img className="object-cover md:object-contain" src={`killarneymobile.png`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center sm:inline-flex mx-auto h-auto content-center hidden"><img className="object-cover md:object-contain" src={`cementerio.png`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center inline-flex mx-auto h-auto content-center sm:hidden"><img className="object-cover md:object-contain" src={`cementeriomobile.png`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center sm:inline-flex mx-auto h-auto content-center hidden"><img className="object-cover md:object-contain" src={`australvalley.png`} alt="A dog smiling in a party hat" /></div>
        <div className="text-center inline-flex mx-auto h-auto content-center sm:hidden"><img className="object-cover md:object-contain" src={`australvalleymobile.png`} alt="A dog smiling in a party hat" /></div>
    </main>
  );
};

export default Mountains;

