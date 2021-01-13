import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Card = (props) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allPaulocoDataCsv {
        nodes {
          cards {
            field1
            field3
            field4
            field2
            field5
            field6
            field7
            field8
          }
        }
      }
    }
  `);

  return (
    <div class="bg-white shadow overflow-hidden sm:rounded-lg min-w-full my-10">
      <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt>
          <h3 class="text-2xl leading-6 font-medium text-gray-900">
            {data.allPaulocoDataCsv.nodes[0].cards[props.cardNumber].field1}
          </h3>
          <p class="mt-1 max-w-2xl text-md text-gray-500">
            {data.allPaulocoDataCsv.nodes[0].cards[props.cardNumber].field3}
          </p>
        </dt>
        <dd>
          <img src="" alt="A dog smiling in a party hat" />
        </dd>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-md font-medium text-gray-500">What Happened</dt>
            <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
            {data.allPaulocoDataCsv.nodes[0].cards[props.cardNumber].field4}
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-md font-medium text-gray-500">Context</dt>
            <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
            {data.allPaulocoDataCsv.nodes[0].cards[props.cardNumber].field5}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-md font-medium text-gray-500">Outcome</dt>
            <dd class="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
            {data.allPaulocoDataCsv.nodes[0].cards[props.cardNumber].field6}
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Links:</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul class="border border-gray-200 rounded-md divide-y divide-gray-200">

                <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div class="ml-4 flex-shrink-0">
                    <a
                      href="www.google.com"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {data.allPaulocoDataCsv.nodes[0].cards[props.cardNumber].field7}
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Card;
