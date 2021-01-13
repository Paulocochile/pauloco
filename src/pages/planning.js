import * as React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";

const Planning = () => {
  return (
    <main className="min-h-screen 3xl:px-80 xl:px-40 bg-gray-100">
      <title>Pauloco/Engineering</title>
      <Navbar />
      <Card cardNumber="2" />
      <Card cardNumber="3" />
      <Card cardNumber="5" />
      <Card cardNumber="6" />
    </main>
  );
};

export default Planning;
