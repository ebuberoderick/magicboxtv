"use client"
import AppLayout from "../../components/layouts/appLayout";
import { AiOutlinePlus } from "react-icons/ai";
import { TiThumbsUp } from "react-icons/ti";
import { IoPlay } from "react-icons/io5";
import { RxSpeakerLoud } from "react-icons/rx";
import AppButton from "../../components/organisms/AppButton";
import { CiCalendar, CiGrid41 } from "react-icons/ci";
import { HiOutlineTranslate } from "react-icons/hi";
import { FaRegStar, FaStar } from "react-icons/fa";
import SeasonDetails from "../../components/molecules/SeasonDetails";
import { fetchMovieInfoAPI } from "../../services/authService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Series() {


  const { series } = useParams();
  const [movieInfo, setMovieInfo] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchMovieData = async () => {
    const { status, data } = await fetchMovieInfoAPI(series)
    console.log(data);
    if (status) {
      setMovieInfo(data);
      console.log(data);
    }
    setLoading(false)
  }


  useEffect(() => {
    fetchMovieData()
  }, [])

  return (
    <AppLayout active="series">
      <div className="h-screen bg-gray-950 pt-24 pb-10 px-4">
        <div className="overflow-hidden h-full max-w-7xl mx-auto rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${movieInfo?.img_trailer})` }}>
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
            <div className="px-6 space-y-8 lg:px-12 py-6 lg:py-10 bg-gray-900/50 rounded-lg">
              <div className="font-semibold text-white text-lg md:text-xl">Episodes</div>
              <div className="space-y-4">
                <SeasonDetails data={movieInfo?.episodes} />
              </div>
            </div>
            <div className="px-6 text-sm font-medium md:text-base lg:px-12 py-6 lg:py-10 bg-gray-900/50 rounded-lg">
              <div className="text-gray-400/50">Description</div>
              <div className="text-white">{movieInfo?.description}</div>
            </div>
          </div>
          <div className="w-full">
            {
              !loading && (
                <div className="px-6 lg:px-12 space-y-4 py-6 lg:py-10 bg-gray-900/50 rounded-lg">
                  <div className="space-y-2">
                    <div className="text-gray-400 flex items-center">
                      <div className="relative top-[2px] text-xl"><CiCalendar /></div>
                      <div className="text-sm md:text-base">Released Year</div>
                    </div>
                    <div className="text-white font-semibold">{movieInfo?.upload_date && movieInfo?.upload_date.split("-")[0]}</div>
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="text-gray-400 flex items-center">
                      <div className="relative top-[2px] text-xl"><HiOutlineTranslate /></div>
                      <div className="text-sm md:text-base">Available Languages</div>
                    </div>
                    <div className="flex items-center gap-2 w-full flex-wrap">
                      {/* {
                        ["English", "Hindi", "Spanish", "French", "German"].map((lang, index) => {
                          return (
                            <div key={index} className="text-white bg-gray-950 text-sm rounded-lg px-4 py-2 border border-gray-800 font-semibold">{lang}</div>
                          )
                        })
                      } */}
                      <div className="text-white bg-gray-950 text-sm rounded-lg px-4 py-2 border border-gray-800 font-semibold">{movieInfo?.language}</div>
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
                      {/* {
                        ["Sci-Fi TV", "Teen TV Shows", "US TV Shows"].map((lang, index) => {
                          return (
                            <div key={index} className="text-white bg-gray-950 text-sm rounded-lg px-4 py-2 border border-gray-800 font-semibold">{lang}</div>
                          )
                        })
                      } */}

                      <div className="text-white bg-gray-950 text-sm rounded-lg px-4 py-2 border border-gray-800 font-semibold">{movieInfo?.genre?.name}</div>

                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </AppLayout>
  );
}