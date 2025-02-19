import Image from "next/image";
import AppLayout from "./components/layouts/appLayout";
import AppBanner from "./components/molecules/AppBanner";
import AppButton from "./components/organisms/AppButton";
import { IoPlay } from "react-icons/io5";
import EmblaCarousel from "./components/molecules/EmblaCarousel";
import HomeCarousel from "./components/organisms/HomeCarousel";
import MovieCard from "./components/organisms/MovieCard";
import GenresCard from "./components/organisms/GenresCard";
import TrendingCard from "./components/organisms/TrendingCard";
import { fetchAPI, fetchGenresAPI } from "../services/authService";
import Link from "next/link";

const SLIDE_COUNT = 7;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default async function Home() {
  const { data: latestData } = await fetchAPI("latest=true");
  const { data: genresData } = await fetchGenresAPI();
  const { data: trendingData } = await fetchAPI("trending=true");
  const { data: trendingSeriesData } = await fetchAPI("category=series");
  // const { data: romanceData } = await fetchAPI("romance=true");

  const movie = latestData?.results || [];
  const genres = genresData?.results || [];
  const trending = trendingData?.results || [];
  const trendingSeries = trendingSeriesData?.results || [];
  // const romance = romanceData?.results || [];

  console.log({ movie, genres, trending, trendingSeries });

  return (
    <AppLayout active="home">
      <AppBanner movie={movie} />
      <div className="space-y-7 hidden md:block">
        <div className="max-w-[91%] space-y-16 py-16 ml-auto">
          <EmblaCarousel
            title="New Releases"
            options={{ align: "start", dragFree: true, loop: true }}
          >
            {movie.map((data, i) => (
              <div className="[flex:_0_0_27%]" key={i}>
                <MovieCard movie={data} />
              </div>
            ))}
          </EmblaCarousel>
          {/* <EmblaCarousel
            title="Romance"
            options={{ align: "start", dragFree: true, loop: true }}
          >
            {romance.map((data, i) => (
              <div className="[flex:_0_0_27%]" key={i}>
                <MovieCard movie={data} />
              </div>
            ))}
          </EmblaCarousel> */}
        </div>
      </div>

      <div className="md:hidden pt-16 space-y-12">
        <div className="space-y-6">
          <div className="px-3">
            <div className="text-white font-bold text-2xl">
              Explore our wide variety of categories
            </div>
            <div className="text-gray-500 text-sm">
              Whether you're looking for a comedy to make you laugh, a drama to
              make you think, or a documentary to learn something new
            </div>
          </div>
          <div className="">
            <EmblaCarousel
              options={{ align: "start", dragFree: true, loop: false }}
            >
              {genres.map((data, i) => (
                <div className="[flex:_0_0_70%] md:[flex:_0_0_20%]" key={i}>
                  <GenresCard genres={data} />
                </div>
              ))}
            </EmblaCarousel>
          </div>
        </div>
        <HomeCarousel genres={genres} movies={movie} />
      </div>
      {movie.length > 0 && (
        <div className="max-w-7xl px-3 mx-auto grid md:grid-cols-2 items-center md:gap-8">
          <div className="space-y-2 sm:space-y-6 pt-5 pb-16">
            <h4 className="text-xl sm:text-4xl uppercase text-white textborder max-w-sm">
              {movie[0]?.title}
            </h4>
            <p className=" sm:text-[20px] text-white">
              {movie[0]?.description}
            </p>
            <div className="flex gap-4">
              <AppButton>
                <Link href={`/movies/${movie[0]?.id}`}>
                  <div className="flex items-center gap-2">
                    <IoPlay />
                    Play Now
                  </div>
                </Link>
              </AppButton>
              <AppButton white>
                <Link href={`/movies/${movie[0]?.id}`}>
                  <div className="flex items-center gap-2">
                    <IoPlay />
                    More Info
                  </div>
                </Link>
              </AppButton>
            </div>
          </div>
          <div className="bg-gray-950">
            <Image
              src={movie[0]?.img_poster ?? ""}
              className="w-full"
              alt={movie[0]?.title ?? ""}
              width={200}
              height={400}
            />
          </div>
        </div>
      )}

      <div className="max-w-[100%] md:max-w-[91%] space-y-16 py-16 ml-auto">
        <EmblaCarousel
          title="Popular Genres"
          options={{ align: "start", dragFree: true, loop: false }}
        >
          {genres.map((data, i) => (
            <div className="[flex:_0_0_70%] md:[flex:_0_0_20%]" key={i}>
              <GenresCard genres={data} />
            </div>
          ))}
        </EmblaCarousel>
      </div>

      <div className="md:hidden">
        <div className="max-w-[99%] md:max-w-[91%] space-y-16 py-16 ml-auto">
          <EmblaCarousel
            title="Trending Now"
            options={{ align: "start", dragFree: true, loop: false }}
          >
            {trending.map((data, i) => (
              <div className="[flex:_0_0_70%] md:[flex:_0_0_20%]" key={i}>
                <TrendingCard movie={data} viewsType="views" />
              </div>
            ))}
          </EmblaCarousel>
          <EmblaCarousel
            title="Must - Watch Movies"
            options={{ align: "start", dragFree: true, loop: false }}
          >
            {trendingSeries.map((data) => (
              <div className="[flex:_0_0_70%] md:[flex:_0_0_20%]" key={data.id}>
                <TrendingCard series movie={data} viewsType="rating" />
              </div>
            ))}
          </EmblaCarousel>
        </div>
      </div>

      <div className="max-w-7xl hidden md:block border rounded-lg border-gray-800 mx-auto">
        <div className="relative">
          <div className="absolute left-8 -top-5">
            <div className="font-semibold bg-blue py-2 px-5 text-white rounded-lg">
              Series
            </div>
          </div>
        </div>
        <div className="space-y-16 px-4 py-12">
          <EmblaCarousel
            title="Trending Series Now"
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
      <div className="p-3 pb-40 md:pb-32 pt-24 md:pt-16">
        <div className="max-w-6xl relative z-10 mx-auto rounded-lg overflow-hidden">
          <div className="absolute h-full z-0">
            <div className="marquee h-1/2 md:h-1/3">
              <div className="gap-3 flex h-full">
                {movie.map((movi, i) => (
                  <div
                    key={i}
                    className="w-40 md:w-32 h-full bg-gray-900/25 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={movi?.img_poster ?? ""}
                      className="h-full w-full"
                      alt=""
                      loading="lazy"
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
                {movie.map((movi, i) => (
                  <div
                    key={i}
                    className="w-40 md:w-32 h-full bg-gray-900/25 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={movi?.img_poster ?? ""}
                      className="h-full w-full"
                      alt=""
                      loading="lazy"
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
                {movie.map((movi, i) => (
                  <div
                    key={i}
                    className="w-40 md:w-32 h-full bg-gray-900/25 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={movi?.img_poster ?? ""}
                      className="h-full w-full"
                      alt=""
                      loading="lazy"
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="marquee2 h-1/2 md:h-1/3">
              <div className="gap-3 flex h-full">
                {movie.map((movi, i) => (
                  <div
                    key={i}
                    className="w-40 md:w-32 h-full bg-gray-900/25 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={movi?.img_poster ?? ""}
                      className="h-full w-full"
                      alt=""
                      loading="lazy"
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
                {movie.map((movi, i) => (
                  <div
                    key={i}
                    className="w-40 md:w-32 h-full bg-gray-900/25 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={movi?.img_poster ?? ""}
                      className="h-full w-full"
                      alt=""
                      loading="lazy"
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
                {movie.map((movi, i) => (
                  <div
                    key={i}
                    className="w-40 md:w-32 h-full bg-gray-900/25 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={movi?.img_poster ?? ""}
                      className="h-full w-full"
                      alt=""
                      loading="lazy"
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="marquee4 hidden md:block h-1/3">
              <div className="gap-3 flex h-full">
                {movie.map((movi, i) => (
                  <div
                    key={i}
                    className="w-40 md:w-32 h-full bg-gray-900/25 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={movi?.img_poster ?? ""}
                      className="h-full w-full"
                      alt=""
                      loading="lazy"
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
                {movie.map((movi, i) => (
                  <div
                    key={i}
                    className="w-40 md:w-32 h-full bg-gray-900/25 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={movi?.img_poster ?? ""}
                      className="h-full w-full"
                      alt=""
                      loading="lazy"
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
                {movie.map((movi, i) => (
                  <div
                    key={i}
                    className="w-40 md:w-32 h-full bg-gray-900/25 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={movi?.img_poster ?? ""}
                      className="h-full w-full"
                      alt=""
                      loading="lazy"
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="py-14 relative z-20 md:py-20 px-8 md:px-14 [background:linear-gradient(180deg,rgba(0,0,0,.9)_40%,rgba(89,0,50,.5))] md:[background:linear-gradient(90deg,rgba(0,0,0,.5)_40%,rgba(89,0,50,.3))]">
            <div className="flex flex-col md:flex-row gap-y-12 items-center">
              <div className="flex-grow space-y-[10px] text-center md:text-left text-white">
                <div className="font-bold lg:text-2xl">
                  Subscribe and enjoy unlimited entertainment today!
                </div>
                <div className="font-thin text-xs lg:text-base">
                  This is a clear and concise call to action that encourages
                  users to subscribe for a full experience on Magicbox.
                </div>
              </div>
              <div className="w-52 ">
                <AppButton>Subscribe Now</AppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
