import * as React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";

const Designing = () => {
  return (
    <main className="min-h-screen 3xl:px-80 xl:px-40 bg-gray-100 pb-10">
      <title>Pauloco/Engineering</title>
      <Navbar />
      <Card cardNumber="8" />
      <Card cardNumber="2" />
      <Card cardNumber="3" />
      <Card cardNumber="4" />
      <Card cardNumber="9" />
      <Card cardNumber="1" />
    </main>
  );
};

export default Designing;
