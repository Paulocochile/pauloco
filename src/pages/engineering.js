import * as React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card"

const Engineering = () => {
  return (
    <main className="min-h-screen md:px-20 lg:px-32 bg-gray-200">
      <title>Pauloco</title>
      <Navbar />
      <Card >
        <h1>Engineering Project
        </h1>
      </Card>
    </main>
  );
};

export default Engineering;
