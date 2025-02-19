"use client";
import { CiCalendar, CiGrid41 } from "react-icons/ci";
import { HiOutlineTranslate } from "react-icons/hi";
import VideoPlayer from "../../components/organisms/VideoPlayer";
import AppLayout from "../../components/layouts/appLayout";
import { fetchMovieInfoAPI, getMsisdn } from "../../../services/authService";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

function DescriptionCard({ data }) {
  return (
    <div className="px-6 lg:px-12 space-y-4 py-6 lg:py-10 bg-gray-900/50 rounded-lg">
      <div className="space-y-2">
        <div className="text-gray-400 flex items-center">
          <div className="relative text-xl">
            <CiCalendar />
          </div>
          <div className="text-sm md:text-base">Released Year</div>
        </div>
        <div className="text-white font-semibold">
          {data?.upload_date && data?.upload_date.split("-")[0]}
        </div>
      </div>
      <div className="space-y-2 w-full">
        <div className="text-gray-400 flex items-center">
          <div className="relative top-[2px] text-xl">
            <HiOutlineTranslate />
          </div>
          <div className="text-sm md:text-base">Available Languages</div>
        </div>
        <div className="flex items-center gap-2 w-full flex-wrap">
          <div className="text-white bg-gray-950 text-sm rounded-lg px-4 py-2 border border-gray-800 font-semibold">
            {data?.language}
          </div>
        </div>
      </div>
      <div className="space-y-2 w-full">
        <div className="text-gray-400 flex items-center">
          <div className="relative top-[2px] text-xl">
            <CiGrid41 />
          </div>
          <div className="text-sm md:text-base">Gernes</div>
        </div>
        <div className="flex items-center gap-2 w-full flex-wrap">
          <div className="text-white bg-gray-950 text-sm rounded-lg px-4 py-2 border border-gray-800 font-semibold">
            {data?.genre?.name}
          </div>
        </div>
      </div>
    </div>
  );
}

function Page() {
  const [movieInfo, setMovieInfo] = useState({});
  const { movie } = useParams();

  const fetchDetails = async () => {

    const { data: msisdn } = await getMsisdn();

    console.log(msisdn);

    const { data, status } = await fetchMovieInfoAPI(movie);

    setMovieInfo(status ? data : {});
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <AppLayout active="movies">

      <VideoPlayer movieInfo={movieInfo} />

      <div className="pb-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <div className="px-6 text-sm font-medium space-y-4 md:text-base lg:px-12 py-6 lg:py-10 bg-gray-900/50 rounded-lg">
              <div className="text-gray-400/50">Description</div>
              <div className="text-white">{movieInfo?.description}</div>
            </div>
            <div className="md:hidden">
              <DescriptionCard data={movieInfo} />
            </div>
          </div>
          <div className="w-full hidden md:block">
            <DescriptionCard data={movieInfo} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Page;
