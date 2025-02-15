"use client"
import { AiOutlinePlus } from "react-icons/ai";
import { TiThumbsUp } from "react-icons/ti";
import { IoPlay } from "react-icons/io5";
import React, { useEffect, useState } from 'react'
import { RxSpeakerLoud } from "react-icons/rx";
import { CiCalendar, CiGrid41 } from "react-icons/ci";
import { HiOutlineTranslate } from "react-icons/hi";
import { FaRegStar, FaStar } from "react-icons/fa";
import SeasonDetails from "../../components/molecules/SeasonDetails";
import { GoPlus } from "react-icons/go";
import EmblaMovies from '../../components/molecules/EmblaMovies';
import EmblaTestimony from '../../components/molecules/EmblaTestimony';
import TestimonyCard from '../../components/organisms/TestimonyCard';
import AppButton from "../../components/organisms/AppButton";
import AppLayout from "../../components/layouts/appLayout";
import { useParams } from "next/navigation";
import { fetchMovieInfoAPI } from "../../services/authService";

function Page() {
  const { movie } = useParams();
  const [movieInfo, setMovieInfo] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchMovieData = async () => {
    const { status, data } = await fetchMovieInfoAPI(movie)
    console.log(data);
    if (status) {
      setMovieInfo(data);
    }
    setLoading(false)
  }


  useEffect(() => {
    fetchMovieData()
  }, [])


  return (
    <AppLayout active="movies">
      <div className="h-screen w- bg-gray-950 pt-24 pb-10 px-4">
        <div className="overflow-hidden h-full max-w-7xl mx-auto rounded-lg bg-cover bg-center " style={{ backgroundImage: `url(${movieInfo?.img_poster})` }}>
          <div className="relative h-full p-6 flex items-end bg-gradient-to-t from-gray-950 to-[#00000000]">
            <div className="p-5 space-y-5 w-full text-center">
              <div className="space-y-1">
                <div className="text-white font-bold text-3xl">{movieInfo?.title}</div>
                <div className="text-gray-400 max-w-3xl hidden md:block text-sm mx-auto">{movieInfo?.description}</div>
              </div>
              <div className="md:flex items-center justify-center gap-3">
                <div className="md:hidden">
                  <AppButton dir={"tl"}>
                    <div className='flex px-4 items-center gap-2'>
                      <IoPlay />
                      Play Now
                    </div>
                  </AppButton>
                </div>
                <div className="hidden md:block">
                  <AppButton>
                    <div className='flex px-4 items-center gap-2'>
                      <IoPlay />
                      Play Now
                    </div>
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
      <div className="pb-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <div className="px-6 text-sm font-medium space-y-4 md:text-base lg:px-12 py-6 lg:py-10 bg-gray-900/50 rounded-lg">
              <div className="text-gray-400/50">Description</div>
              <div className="text-white">{movieInfo?.description}</div>
            </div>
            <div className="md:hidden">
              {
                !loading && <DescriptionCard data={movieInfo} />
              }
            </div>
            {/* <div className="px-6 text-sm font-medium md:text-base lg:px-12 py-6 lg:py-10 bg-gray-900/50 rounded-lg">
              <EmblaMovies title="Cast" >
                {Array.from(Array(15).keys()).map((index, i) => (
                  <div className="[flex:_0_0_89px]" key={i}>
                    <div className="bg-gray-700 rounded-md overflow-hidden h-20"></div>
                  </div>
                ))}
              </EmblaMovies>
            </div> */}
            {/* <div className="px-6 text-sm font-medium md:text-base lg:px-12 py-6 lg:py-10 bg-gray-900/50 rounded-lg">
              <div className="flex w-full text-white items-center justify-between">
                <div className="text-gray-400/50">Reviews</div>
                <div className="">
                  <div className="bg-gray-950 gap-2 flex items-center text-sm rounded-lg py-2 px-6 cursor-pointer border border-gray-800">
                    <div className="text-2xl"><GoPlus /></div>
                    <div className="">Add Your Review</div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <EmblaTestimony options={{ align: 'start', dragFree: true, loop: true }}>
                  {Array.from(Array(8).keys()).map((index, i) => (
                    <div className="[flex:_0_0_100%] lg:[flex:_0_0_49.5%]" key={i}>
                      <TestimonyCard />
                    </div>
                  ))}
                </EmblaTestimony>
              </div>
            </div> */}
          </div>
          <div className="w-full hidden md:block">
            {
              !loading && <DescriptionCard data={movieInfo} />
            }
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page

function DescriptionCard({ data }) {
  return (
    <div className="px-6 lg:px-12 space-y-4 py-6 lg:py-10 bg-gray-900/50 rounded-lg">
      <div className="space-y-2">
        <div className="text-gray-400 flex items-center">
          <div className="relative text-xl"><CiCalendar /></div>
          <div className="text-sm md:text-base">Released Year</div>
        </div>
        <div className="text-white font-semibold">{data?.upload_date && data?.upload_date.split("-")[0]}</div>
      </div>
      <div className="space-y-2 w-full">
        <div className="text-gray-400 flex items-center">
          <div className="relative top-[2px] text-xl"><HiOutlineTranslate /></div>
          <div className="text-sm md:text-base">Available Languages</div>
        </div>
        <div className="flex items-center gap-2 w-full flex-wrap">
          <div className="text-white bg-gray-950 text-sm rounded-lg px-4 py-2 border border-gray-800 font-semibold">{data?.language}</div>
          {/* {
            ["English", "Hindi", "Spanish", "French", "German"].map((lang, index) => {
              return (
                <div key={index} className="text-white bg-gray-950 text-sm rounded-lg px-4 py-2 border border-gray-800 font-semibold">{lang}</div>
              )
            })
          } */}
        </div>
      </div>
      {/* <div className="space-y-2">
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
      </div> */}
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
      {/* <div className="space-y-2 w-full">
        <div className="text-gray-400 flex items-center">
          <div className="text-sm md:text-base">Director</div>
        </div>
        <div className="bg-gray-950 gap-2 items-start flex text-sm rounded-lg p-3 space-y-2 border border-gray-800 font-semibold">
          <div className="">
            <div className="w-12 h-12 rounded-lg bg-gray-800"></div>
          </div>
          <div className="flex-grow">
            <div className="text-white font-medium">Rishab Shetty</div>
            <div className="font-medium text-gray-400/50">From India</div>
          </div>
        </div>
      </div>
      <div className="space-y-2 w-full">
        <div className="text-gray-400 flex items-center">
          <div className="text-sm md:text-base">Music</div>
        </div>
        <div className="bg-gray-950 gap-2 items-start flex text-sm rounded-lg p-3 space-y-2 border border-gray-800 font-semibold">
          <div className="">
            <div className="w-12 h-12 rounded-lg bg-gray-800"></div>
          </div>
          <div className="flex-grow">
            <div className="text-white font-medium">B. Ajaneesh Loknath</div>
            <div className="font-medium text-gray-400/50">From India</div>
          </div>
        </div>
      </div> */}
    </div>
  )
}