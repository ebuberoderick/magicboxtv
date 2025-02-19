"use client";
import AppLayout from "../../components/layouts/appLayout";
import { CiCalendar, CiGrid41 } from "react-icons/ci";
import { HiOutlineTranslate } from "react-icons/hi";
import SeasonDetails from "../../components/molecules/SeasonDetails";
import { fetchMovieInfoAPI } from "../../../services/authService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import VideoPlayer from "../../components/organisms/VideoPlayer";

export default function Series() {
  const { series } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeEpisode, setActiveEpisode] = useState({});

  const fetchMovieData = async () => {
    const { status, data } = await fetchMovieInfoAPI(series);
    console.log(data);
    if (status) {
      setMovieInfo(data);
      setActiveEpisode(data?.episodes[0]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <AppLayout active="series">
      <VideoPlayer movieInfo={activeEpisode} />
      <div className="pb-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <div className="px-6 space-y-8 lg:px-12 py-6 lg:py-10 bg-gray-900/50 rounded-lg">
              <div className="font-semibold text-white text-lg md:text-xl">
                Episodes
              </div>
              <div className="space-y-4">
                <SeasonDetails
                  setActiveEpisode={(data) => setActiveEpisode(data)}
                  activeEpisode={activeEpisode}
                  data={movieInfo?.episodes}
                />
              </div>
            </div>
            <div className="px-6 text-sm font-medium md:text-base lg:px-12 py-6 lg:py-10 bg-gray-900/50 rounded-lg">
              <div className="text-gray-400/50">Description</div>
              <div className="text-white">{movieInfo?.description}</div>
            </div>
          </div>
          <div className="w-full">
            {!loading && (
              <div className="px-6 lg:px-12 space-y-4 py-6 lg:py-10 bg-gray-900/50 rounded-lg">
                <div className="space-y-2">
                  <div className="text-gray-400 flex items-center">
                    <div className="relative top-[2px] text-xl">
                      <CiCalendar />
                    </div>
                    <div className="text-sm md:text-base">Released Year</div>
                  </div>
                  <div className="text-white font-semibold">
                    {movieInfo?.upload_date &&
                      movieInfo?.upload_date.split("-")[0]}
                  </div>
                </div>
                <div className="space-y-2 w-full">
                  <div className="text-gray-400 flex items-center">
                    <div className="relative top-[2px] text-xl">
                      <HiOutlineTranslate />
                    </div>
                    <div className="flex items-center gap-2 w-full flex-wrap">
                      <div className="text-white bg-gray-950 text-sm rounded-lg px-4 py-2 border border-gray-800 font-semibold">{movieInfo?.language}</div>
                    </div>
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="text-gray-400 flex items-center">
                      <div className="relative top-[2px] text-xl"><CiGrid41 /></div>
                      <div className="text-sm md:text-base">Gernes</div>
                    </div>
                    <div className="flex items-center gap-2 w-full flex-wrap">
                      <div className="text-white bg-gray-950 text-sm rounded-lg px-4 py-2 border border-gray-800 font-semibold">{movieInfo?.genre?.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
