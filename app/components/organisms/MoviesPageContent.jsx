"use client";
import React, { useState } from "react";
import EmblaCarousel from "../molecules/EmblaCarousel";
import TrendingCard from "./TrendingCard";
import GenresCard from "./GenresCard";

const SLIDE_COUNT = 7;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const MoviesPageContent = ({ genres, trending }) => {
  const [activeTab, setActiveTab] = useState("movies");

  return (
    <div className="">
      <div className="max-w-sm mx-auto px-4 md:hidden">
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

      <div className="py-52 pt-0 md:space-y-32 md:pt-32">
        <div
          className={`max-w-7xl md:border rounded-lg border-gray-800 mx-auto  ${
            activeTab === "movies" ? "" : "hidden md:block"
          }`}
        >
          <div className="relative hidden md:block">
            <div className="absolute left-8 -top-5">
              <div className="font-semibold bg-blue py-2 px-5 text-white rounded-lg">
                Movies
              </div>
            </div>
          </div>
          <div className={`space-y-16 md:px-4 py-12`}>
            <EmblaCarousel
              title="Our Genres"
              options={{ align: "start", dragFree: true, loop: false }}
            >
              {genres.map((data, i) => (
                <div className="[flex:_0_0_70%] md:[flex:_0_0_23.5%]" key={i}>
                  <GenresCard genres={data} />
                </div>
              ))}
            </EmblaCarousel>
            <EmblaCarousel
              title="Popular Genres"
              options={{ align: "start", dragFree: true, loop: false }}
            >
              {genres.map((data, i) => (
                <div className="[flex:_0_0_70%] md:[flex:_0_0_23.5%]" key={i}>
                  <GenresCard genres={data} badge />
                </div>
              ))}
            </EmblaCarousel>
            <EmblaCarousel
              title="Trending Now"
              options={{ align: "start", dragFree: true, loop: false }}
            >
              {trending.map((data, i) => (
                <div className="[flex:_0_0_70%] md:[flex:_0_0_23.5%]" key={i}>
                  <TrendingCard movie={data} viewsType="views" />
                </div>
              ))}
            </EmblaCarousel>
            <EmblaCarousel
              title="Must - Watch Movies"
              options={{ align: "start", dragFree: true, loop: false }}
            >
              {SLIDES.map((index, i) => (
                <div className="[flex:_0_0_70%] md:[flex:_0_0_23.5%]" key={i}>
                  <TrendingCard viewsType="rating" />
                </div>
              ))}
            </EmblaCarousel>
          </div>
        </div>

        <div
          className={`max-w-7xl md:border rounded-lg border-gray-800 mx-auto ${
            activeTab === "shows" ? "" : "hidden md:block"
          }`}
        >
          <div className="relative hidden md:block">
            <div className="absolute left-8 -top-5">
              <div className="font-semibold bg-blue py-2 px-5 text-white rounded-lg">
                Series
              </div>
            </div>
          </div>
          <div className="space-y-16 md:px-4 py-12">
            <EmblaCarousel
              title="Our Genres"
              options={{ align: "start", dragFree: true, loop: false }}
            >
              {genres.map((data, i) => (
                <div className="[flex:_0_0_70%] md:[flex:_0_0_23.5%]" key={i}>
                  <GenresCard genres={data} />
                </div>
              ))}
            </EmblaCarousel>
            {/* <EmblaCarousel title="Popular Top 10 In Genres" options={{ align: 'start', dragFree: true, loop: false }}>
          {genres.map((data, i) => (
            <div className="[flex:_0_0_70%] md:[flex:_0_0_23.5%]" key={i}>
              <GenresCard genres={data} badge />
            </div>
          ))}
        </EmblaCarousel> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesPageContent;
