"use client";
import AppLayout from "../components/layouts/appLayout";
import { IoPlay } from "react-icons/io5";
import AppButton from "../components/organisms/AppButton";
import { fetchAPI } from "../../services/authService";
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
    fetchTrendingSeries();
  }, []);

  return (
    <AppLayout active="series">
      <div className="h-screen bg-gray-950 pt-24 pb-10 px-4">
        <div
          className="overflow-hidden h-full max-w-7xl mx-auto rounded-lg bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              trendingSeries[0]?.img_banner ?? trendingSeries[0]?.img_banner
            })`,
          }}
        >
          <div className="relative h-full p-6 flex items-end bg-gradient-to-t from-gray-950 to-[#00000000]">
            <div className="p-5 space-y-5 w-full text-center">
              <div className="space-y-1">
                <div className="text-white font-bold text-3xl">
                  {trendingSeries[0]?.title}
                </div>
                <div className="text-gray-400 max-w-3xl hidden md:block text-sm mx-auto">
                  {trendingSeries[0]?.description}
                </div>
              </div>
              <div className="md:flex items-center justify-center gap-3">
                <div className="md:hidden">
                  <Link
                    href={`/series/${trendingSeries[0]?.id}`}
                    className="text-white text-sm font-bold"
                  >
                    <AppButton dir={"tl"}>
                      <div className="flex px-4 items-center gap-2">
                        <IoPlay />
                        Play Now
                      </div>
                    </AppButton>
                  </Link>
                </div>
                <div className="hidden md:block">
                  <Link
                    href={`/series/${trendingSeries[0]?.id}`}
                    className="text-white text-sm font-bold"
                  >
                    <AppButton>
                      <div className="flex px-4 items-center gap-2">
                        <IoPlay />
                        Play Now
                      </div>
                    </AppButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-24">
        <div className="max-w-[99%] md:max-w-[91%] space-y-16 py-16 ml-auto">
          <div className="space-y-16 px-4 py-12">
            <EmblaCarousel
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
      </div>
    </AppLayout>
  );
}
