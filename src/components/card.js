import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Card = (props) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allPaulocoDataCsv {
        nodes {
          cards {
            field1
            field2
          }
        }
      }
    }
  `);



  return (
    <div class="grid grid-cols-6 gap-0 my-8">
      <div class="col-span-4 bg-gray-800 text-white p-5">
      {data.allPaulocoDataCsv.nodes[0].cards[props.cardNumber].field2}
      </div>
  <div class="col-span-2 p-5 bg-white content-center">{data.allPaulocoDataCsv.nodes[0].cards[props.cardNumber].field1}</div>

      <div class="bg-gray-700 text-white p-5">Title</div>
      <div class="col-span-5 bg-white p-5">Content</div>
      <div class="bg-gray-800 text-white p-5">Title</div>
      <div class="col-span-5 bg-white p-5">Content</div>
      <div class="col-span-6 bg-gray-700 text-white p-5">Photos</div>
    </div>
  );
};

export default Card;
