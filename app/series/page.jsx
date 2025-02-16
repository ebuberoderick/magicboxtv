"use client"
import AppLayout from "../components/layouts/appLayout";
import { AiOutlinePlus } from "react-icons/ai";
import { TiThumbsUp } from "react-icons/ti";
import { IoPlay } from "react-icons/io5";
import { RxSpeakerLoud } from "react-icons/rx";
import AppButton from "../components/organisms/AppButton";
import { CiCalendar, CiGrid41 } from "react-icons/ci";
import { HiOutlineTranslate } from "react-icons/hi";
import { FaRegStar, FaStar } from "react-icons/fa";
import SeasonDetails from "../components/molecules/SeasonDetails";
import { fetchAPI } from "../services/authService";
import { useEffect, useState } from "react";
import EmblaCarousel from "../components/molecules/EmblaCarousel";
import TrendingCard from "../components/organisms/TrendingCard";
import Link from "next/link";

export default function Series() {

  const [trendingSeries, setTrendingSeries] = useState([]);


  const fetchTrendingSeries = async () => {
    const { status, data } = await fetchAPI("category=series");
    if (status) {
      setTrendingSeries(data?.results);
    }
  };



  useEffect(() => {
    fetchTrendingSeries()
  }, []);

  return (
    <AppLayout active="series">
      <div className="h-screen bg-gray-950 pt-24 pb-10 px-4">
        <div className="overflow-hidden h-full max-w-7xl mx-auto rounded-lg seriesbannerimgBG">
          <div className="relative h-full p-6 flex items-end bg-gradient-to-t from-gray-950 to-[#00000000]">
            <div className="p-5 space-y-5 w-full text-center">
              <div className="space-y-1">
                <div className="text-white font-bold text-3xl">{trendingSeries[0]?.title}</div>
                <div className="text-gray-400 max-w-3xl hidden md:block text-sm mx-auto">{trendingSeries[0]?.description}</div>
              </div>
              <div className="md:flex items-center justify-center gap-3">
                <div className="md:hidden">
                  <Link href={`/series/${trendingSeries[0]?.id}`} className="text-white text-sm font-bold">
                    <AppButton dir={"tl"}>
                      <div className='flex px-4 items-center gap-2'>
                        <IoPlay />
                        Play Now
                      </div>
                    </AppButton>
                  </Link>
                </div>
                <div className="hidden md:block">
                  <Link href={`/series/${trendingSeries[0]?.id}`} className="text-white text-sm font-bold">
                    <AppButton>
                      <div className='flex px-4 items-center gap-2'>
                        <IoPlay />
                        Play Now
                      </div>
                    </AppButton>
                  </Link>
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
      <div className="pb-24">






        <div className="max-w-[99%] md:max-w-[91%] space-y-16 py-16 ml-auto">
          <div className="space-y-16 px-4 py-12">
            <EmblaCarousel
              // title="Trending Series Now"
              options={{ align: "start", dragFree: true, loop: false }}
            >
              {trendingSeries.map((data, i) => (
                <div className="[flex:_0_0_23.5%]" key={i}>
                  <TrendingCard series movie={data} />
                </div>
              ))}
            </EmblaCarousel>
          </div>
        </div>
        {/* <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <div className="px-6 space-y-8 lg:px-12 py-6 lg:py-10 bg-gray-900/50 rounded-lg">
              <div className="font-semibold text-white text-lg md:text-xl">Seasons and Episodes</div>
              <div className="space-y-4">
                <SeasonDetails />
                <SeasonDetails />
                <SeasonDetails />
              </div>
            </div>
            <div className="px-6 text-sm font-medium md:text-base lg:px-12 py-6 lg:py-10 bg-gray-900/50 rounded-lg">
              <div className="text-gray-400/50">Description</div>
              <div className="text-white">When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</div>
            </div>
          </div>
          <div className="w-full">
            <div className="px-6 lg:px-12 space-y-4 py-6 lg:py-10 bg-gray-900/50 rounded-lg">
              <div className="space-y-2">
                <div className="text-gray-400 flex items-center">
                  <div className="relative top-[2px] text-xl"><CiCalendar /></div>
                  <div className="text-sm md:text-base">Released Year</div>
                </div>
                <div className="text-white font-semibold">2022</div>
              </div>
              <div className="space-y-2 w-full">
                <div className="text-gray-400 flex items-center">
                  <div className="relative top-[2px] text-xl"><HiOutlineTranslate /></div>
                  <div className="text-sm md:text-base">Available Languages</div>
                </div>
                <div className="flex items-center gap-2 w-full flex-wrap">
                  {
                    ["English", "Hindi", "Spanish", "French", "German"].map((lang, index) => {
                      return (
                        <div key={index} className="text-white bg-gray-950 text-sm rounded-lg px-4 py-2 border border-gray-800 font-semibold">{lang}</div>
                      )
                    })
                  }
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-gray-400 flex items-center">
                  <div className="relative"><FaRegStar /></div>
                  <div className="text-sm md:text-base">Ratings</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-950 text-sm rounded-lg p-3 space-y-2 border border-gray-800 font-semibold">
                    <div className="font-semibold text-white">IMDb</div>
                    <div className="">
                      <div className='flex items-center text-gray-400/50 gap-2'>
                        <div className="flex gap-1 text-sm">
                          <FaStar
                            className='text-pink'
                          />
                          <FaStar
                            className='text-pink'
                          />
                          <FaStar
                            className='text-pink'
                          />
                          <FaStar
                            className='text-pink'
                          />
                          <FaStar
                            className=''
                          />
                        </div>
                        <span className='text-white'>4</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-950 text-sm rounded-lg p-3 space-y-2 border border-gray-800 font-semibold">
                    <div className="font-semibold text-white">Streamvibe</div>
                    <div className="">
                      <div className='flex items-center text-gray-400/50 gap-2'>
                        <div className="flex gap-1 text-sm">
                          <FaStar
                            className='text-pink'
                          />
                          <FaStar
                            className='text-pink'
                          />
                          <FaStar
                            className='text-pink'
                          />
                          <FaStar
                            className='text-pink'
                          />
                          <FaStar
                            className=''
                          />
                        </div>
                        <span className='text-white'>4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2 w-full">
                <div className="text-gray-400 flex items-center">
                  <div className="relative top-[2px] text-xl"><CiGrid41 /></div>
                  <div className="text-sm md:text-base">Gernes</div>
                </div>
                <div className="flex items-center gap-2 w-full flex-wrap">
                  {
                    ["Sci-Fi TV", "Teen TV Shows", "US TV Shows"].map((lang, index) => {
                      return (
                        <div key={index} className="text-white bg-gray-950 text-sm rounded-lg px-4 py-2 border border-gray-800 font-semibold">{lang}</div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </AppLayout>
  );
}
