"use client"
import { useEffect, useState } from "react";
import AppLayout from "../components/layouts/appLayout";
import EmblaCarousel from "../components/molecules/EmblaCarousel";
import GenresCard from "../components/organisms/GenresCard";
import TrendingCard from "../components/organisms/TrendingCard";
import { IoPlay } from "react-icons/io5";
import AppButton from "../components/organisms/AppButton";
import { fetchAPI, fetchGenresAPI } from "../services/authService";
import Link from "next/link";

export default function Movies() {
  const [activeTab, setActiveTab] = useState("movies")
  const SLIDE_COUNT = 7
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  const [movie, setMovie] = useState([])
  const [genres, setGenres] = useState([])
  const [trending, setTrending] = useState([])

  const fetch = async () => {
    const { status, data } = await fetchAPI("latest")
    if (status) {
      setMovie(data?.results);
    }
  }


  const fetchGenres = async () => {
    const { status, data } = await fetchGenresAPI()
    if (status) {
      setGenres(data?.results);
    }
  }

  const fetchNewReleases = async () => {
    const { status, data } = await fetchAPI("trending")
    if (status) {
      setTrending(data?.results);
    }
  }


  useEffect(() => {
    fetchGenres()
    fetchNewReleases()
    fetch()
  }, [])

  return (
    <AppLayout active="movies">
      <div className="h-screen bg-gray-950 pt-24 pb-10 px-4">
        <div className="overflow-hidden h-full max-w-7xl mx-auto rounded-lg" style={{ backgroundImage: `url(${movie[6]?.img_poster})` }}>
          <div className="relative h-full p-6 flex items-end bg-gradient-to-t from-gray-950 to-[#00000000]">
            <div className="p-5 space-y-5 w-full text-center">
              <div className="space-y-1">
                <div className="text-white font-bold text-3xl">{movie[6]?.title}</div>
                <div className="text-gray-400 max-w-3xl hidden md:block text-sm mx-auto">{movie[6]?.description}</div>
              </div>
              <div className="md:flex items-center justify-center gap-3">
                <div className="md:hidden">
                  <AppButton dir={"tl"}>
                    <Link href={`/movies/${movie[6]?.id}`}>
                      <div className='flex px-4 items-center gap-2'>
                        <IoPlay />
                        Play Now
                      </div>
                    </Link>
                  </AppButton>
                </div>
                <div className="hidden md:block">
                  <AppButton>
                    <Link href={`/movies/${movie[6]?.id}`}>
                      <div className='flex px-4 items-center gap-2'>
                        <IoPlay />
                        Play Now
                      </div>
                    </Link>
                  </AppButton>
                </div>
                {/* <div className="flex items-center justify-center gap-2">
                  <div className='w-10 h-10 text-white text-lg bg-gray-950 rounded-lg cursor-pointer flex items-center justify-center'>
                    <AiOutlinePlus />
                  </div>
                  <div className='w-10 h-10 text-white text-lg bg-gray-950 rounded-lg cursor-pointer flex items-center justify-center'>
                    <TiThumbsUp />
                  </div>
                  <div className='w-10 h-10 text-white text-lg bg-gray-950 rounded-lg cursor-pointer flex items-center justify-center'>
                    <RxSpeakerLoud />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="max-w-sm mx-auto px-4 md:hidden">
          <div className="border text-center relative border-gray-800 grid grid-cols-2 p-2 rounded-xl bg-black/60">
            <div className={`absolute z-0 w-1/2 h-[85%] transition-all duration-300 rounded-md top-1 right-1 bg-gray-900 ${activeTab === "movies" ? "left-1" : "left-[49%]"}`} />
            <div onClick={() => setActiveTab("movies")} className={`relative cursor-pointer py-2 z-20 ${activeTab === "movies" ? "text-white" : "text-gray-500"}`}>Movies</div>
            <div onClick={() => setActiveTab("shows")} className={`relative cursor-pointer py-2 z-20 ${activeTab === "shows" ? "text-white" : "text-gray-500"}`}>Shows</div>
          </div>
        </div>
        <div className="py-52 pt-0 md:space-y-32 md:pt-32">
          <div className={`max-w-7xl md:border rounded-lg border-gray-800 mx-auto  ${activeTab === "movies" ? "" : "hidden md:block"}`}>
            <div className="relative hidden md:block">
              <div className="absolute left-8 -top-5">
                <div className="font-semibold bg-blue py-2 px-5 text-white rounded-lg">Movies</div>
              </div>
            </div>
            <div className={`space-y-16 md:px-4 py-12`}>
              <EmblaCarousel title="Our Genres" options={{ align: 'start', dragFree: true, loop: false }}>
                {genres.map((data, i) => (
                  <div className="[flex:_0_0_70%] md:[flex:_0_0_23.5%]" key={i}>
                    <GenresCard genres={data} />
                  </div>
                ))}
              </EmblaCarousel>
              <EmblaCarousel title="Popular Genres" options={{ align: 'start', dragFree: true, loop: false }}>
                {genres.map((data, i) => (
                  <div className="[flex:_0_0_70%] md:[flex:_0_0_23.5%]" key={i}>
                    <GenresCard genres={data} badge />
                  </div>
                ))}
              </EmblaCarousel>
              <EmblaCarousel title="Trending Now" options={{ align: 'start', dragFree: true, loop: false }}>
                {trending.map((data, i) => (
                  <div className="[flex:_0_0_70%] md:[flex:_0_0_23.5%]" key={i}>
                    <TrendingCard movie={data} viewsType="views" />
                  </div>
                ))}
              </EmblaCarousel>
              <EmblaCarousel title="Must - Watch Movies" options={{ align: 'start', dragFree: true, loop: false }}>
                {SLIDES.map((index, i) => (
                  <div className="[flex:_0_0_70%] md:[flex:_0_0_23.5%]" key={i}>
                    <TrendingCard viewsType="rating" />
                  </div>
                ))}
              </EmblaCarousel>
            </div>
          </div>

          <div className={`max-w-7xl md:border rounded-lg border-gray-800 mx-auto ${activeTab === "shows" ? "" : "hidden md:block"}`}>
            <div className="relative hidden md:block">
              <div className="absolute left-8 -top-5">
                <div className="font-semibold bg-blue py-2 px-5 text-white rounded-lg">Series</div>
              </div>
            </div>
            <div className="space-y-16 md:px-4 py-12">
              <EmblaCarousel title="Our Genres" options={{ align: 'start', dragFree: true, loop: false }}>
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

    </AppLayout>
  );
}
