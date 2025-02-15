import React from "react";
import { IoTime, IoEye } from "react-icons/io5";
import { BsCollectionFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

function TrendingCard({ movie, viewsType }) {
  return (
    <div className="bg-gray-800/20 space-y-4 rounded-xl p-3 border border-gray-800">
      <div className="h-80 bg-gray-700/20 rounded-xl">
      {Boolean(movie?.img_poster) && (
        <Image
        src={movie?.img_poster ?? ""}
        alt={movie?.title ?? ""}
        className="object-cover h-full w-full"
        width={100}
        height={100}
      />
      )}
        
      </div>
      <div className="text-gray-600 flex justify-between items-center">
        <div className="px-2 pr-2 py-1 border border-gray-800 bg-gray-950/20 rounded-full flex items-center gap-1">
          <IoTime />
          <span className="text-xs">{movie?.timedelta}</span>
        </div>
        {viewsType === "views" ? (
          <div className="px-2 pr-2 py-1 border border-gray-800 bg-gray-950/20 rounded-full flex items-center gap-1">
            <IoEye />
            <span className="text-xs">
              {movie?.watch_times.toLocaleString("en-US")}
            </span>
          </div>
        ) : viewsType === "rating" ? (
          <div className="px-2 pr-2 py-1 border border-gray-800 bg-gray-950/20 rounded-full flex items-center gap-1">
            <div className="flex text-sm">
              <FaStar className="text-pink" />
              <FaStar className="text-pink" />
              <FaStar className="text-pink" />
              <FaStar className="text-pink" />
              <FaStar className="" />
            </div>
            <span className="text-xs">20k</span>
          </div>
        ) : (
          <div className="px-2 pr-2 py-1 border border-gray-800 bg-gray-950/20 rounded-full flex items-center gap-1">
            <BsCollectionFill />
            <span className="text-xs">4 seasons</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrendingCard;

// background: #008080;
// background: linear-gradient(to left, #008080 0%, #005757 100%);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
