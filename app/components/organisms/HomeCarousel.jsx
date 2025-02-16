"use client";
import React, { Fragment, useState } from "react";
import GenresCard from "./GenresCard";
import TrendingCard from "./TrendingCard";
import EmblaCarousel from "../molecules/EmblaCarousel";

const HomeCarousel = ({ genres, movies }) => {
  const [activeTab, setActiveTab] = useState("movies");

  return (
    <Fragment>
      <div className="max-w-sm mx-auto px-4">
        <div className="border text-center relative border-gray-800 grid grid-cols-2 p-2 rounded-xl bg-black/60">
          <div
            className={`absolute z-0 w-1/2 h-[85%] transition-all duration-300 rounded-md top-1 right-1 bg-gray-900 ${
              activeTab === "movies" ? "left-1" : "left-[49%]"
            }`}
          />
          <div
            onClick={() => setActiveTab("movies")}
            className={`relative cursor-pointer py-2 z-20 ${
              activeTab === "movies" ? "text-white" : "text-gray-500"
            }`}
          >
            Movies
          </div>
          <div
            onClick={() => setActiveTab("shows")}
            className={`relative cursor-pointer py-2 z-20 ${
              activeTab === "shows" ? "text-white" : "text-gray-500"
            }`}
          >
            Shows
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="">
          {activeTab === "movies" ? (
            <EmblaCarousel
              title="New Releases"
              options={{ align: "start", dragFree: true, loop: false }}
            >
              {genres.map((data, i) => (
                <div className="[flex:_0_0_70%]" key={i}>
                  <GenresCard genres={data} />
                </div>
              ))}
            </EmblaCarousel>
          ) : (
            <EmblaCarousel
              title="New Releases"
              options={{ align: "start", dragFree: true, loop: false }}
            >
              {movie.map((data, i) => (
                <div className="[flex:_0_0_70%]" key={i}>
                  <TrendingCard movie={data} viewsType="rating" />
                </div>
              ))}
            </EmblaCarousel>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default HomeCarousel;
