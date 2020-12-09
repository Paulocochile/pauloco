import React from "react";

export default function Card({ children }) {
  return (
    <div class="grid grid-cols-6 gap-0 my-32">
      <div class="col-span-4 bg-black text-white p-5">{children}</div>
      <div class="col-span-2 p-5 bg-white content-center">Logo</div>
      
      <div class="bg-black text-white p-5">Title</div>
      <div class="col-span-5 bg-white p-5">Content</div>
      <div class="bg-black text-white p-5">Title</div>
      <div class="col-span-5 bg-white p-5">Content</div>
      <div class="col-span-6 bg-black text-white p-5">Photos</div>
      

      
    </div>
  );
}
