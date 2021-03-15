import * as React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";

const Engineering = () => {
  return (
    <main className="min-h-screen 3xl:px-80 xl:px-40 bg-gray-100 pb-10">
      <title>Pablo/Engineering</title>
      <Navbar />
      <Card cardNumber="7" />
      <Card cardNumber="3" />
      <Card cardNumber="6" />
      <Card cardNumber="5" />
      <Card cardNumber="1" />
    </main>
  );
};

export default Engineering;
