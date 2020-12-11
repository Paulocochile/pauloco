import * as React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";

const Engineering = () => {
  return (
    <main className="min-h-screen md:px-20 lg:px-32 bg-gray-100">
      <title>Pauloco/Engineering</title>
      <Navbar />
      <Card cardNumber="1" />
      <Card cardNumber="2" />
      <Card cardNumber="3" />
      <Card cardNumber="4" />
      <Card cardNumber="5" />
      <Card cardNumber="6" />
      <Card cardNumber="7" />
    </main>
  );
};

export default Engineering;
