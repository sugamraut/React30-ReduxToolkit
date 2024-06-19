/* eslint-disable react/prop-types */
import React  from "react";
import { Link,useParams } from "react-router-dom";
const Card = ({ data }) => {
  return (
    <Link to={`/blog/${data._id}`}>
    <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
      <img class="w-full" src={data.image} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{data.title}</div>
        <p class="text-gray-700 text-base">{data.description}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{data.category}
        </span>
      </div>
    </div>
  </Link>
  );
};

export default Card;