import AppLayout from "../components/layouts/appLayout";
import MoviesPageContent from "../components/organisms/MoviesPageContent";
import { IoPlay } from "react-icons/io5";
import GenresBanner from "../components/organisms/GenresBanner";
import AppButton from "../components/organisms/AppButton";
import {
  getContentsAPI,
  fetchGenresAPI,
} from "../../services/authService";
import Link from "next/link";
import TrendingCard from "../components/organisms/TrendingCard";
import { LiaAngleRightSolid } from "react-icons/lia";

export default async function Movies({ searchParams }) {
  const { data: latestData } = await getContentsAPI({ latest: true });
  const { data: genresData } = await fetchGenresAPI();
  const { data: trendingData } = await getContentsAPI({ trending: true });
  const { data: trendingSeriesData } = await getContentsAPI({
    category: "series",
  });

  const { genre } = await searchParams;

  console.log({ genre });

  const { data: genresResultsData } = await getContentsAPI(
    genre ? { genre: genre.split("()").join("-") } : {}
  );
  const genresResults = genresResultsData?.results || [];

  const movie = latestData?.results || [];
  const genres = genresData?.results || [];
  const trending = trendingData?.results || [];
  const trendingSeries = trendingSeriesData?.results || [];

  return (
    <AppLayout active="movies">
      {genre === undefined ? (
        <div className="">
          <div className="h-screen bg-gray-950 pt-24 pb-10 px-4">
            <div
              className="overflow-hidden h-full max-w-7xl mx-auto rounded-lg"
              style={{ backgroundImage: `url(${movie[6]?.img_poster})` }}
            >
              <div className="relative h-full p-6 flex items-end bg-gradient-to-t from-gray-950 to-[#00000000]">
                <div className="p-5 space-y-5 w-full text-center">
                  <div className="space-y-1">
                    <div className="text-white font-bold text-3xl">
                      {movie[6]?.title}
                    </div>
                    <div className="text-gray-400 max-w-3xl hidden md:block text-sm mx-auto">
                      {movie[6]?.description}
                    </div>
                  </div>
                  <div className="md:flex items-center justify-center gap-3">
                    <div className="md:hidden">
                      <AppButton dir={"tl"}>
                        <Link href={`/movies/${movie[6]?.id}`}>
                          <div className="flex px-4 items-center gap-2">
                            <IoPlay />
                            Play Now
                          </div>
                        </Link>
                      </AppButton>
                    </div>
                    <div className="hidden md:block">
                      <AppButton>
                        <Link href={`/movies/${movie[6]?.id}`}>
                          <div className="flex px-4 items-center gap-2">
                            <IoPlay />
                            Play Now
                          </div>
                        </Link>
                      </AppButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MoviesPageContent
            trendingSeries={trendingSeries}
            genres={genres}
            trending={trending}
          />
        </div>
      ) : (
        <div className="py-24 space-y-5">
          <div className="max-w-7xl px-3 mx-auto ">
            <div className="flex gap-4 items-center">
              <div className="relative top-[2px]">
                <Link href="/movies">
                  <div className="flex items-center text-gray-400 gap-2 hover:text-white">
                    <div className="relative bottom-[2px]">Movies</div>{" "}
                    <LiaAngleRightSolid />{" "}
                  </div>
                </Link>
              </div>
              <div className="capitalize text-lg md:text-2xl text-white font-semibold">
                {genre.split("()").join(" ")}
              </div>
            </div>
          </div>
          <div className="">
            <GenresBanner movie={genresResults} />
          </div>
          {genresResults.length > 1 && (
            <div className="max-w-7xl py-12 md:block sm:border sm:p-4 rounded-lg border-gray-800 mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {genresResults.slice(1)?.map((movie, index) => (
                  <div key={movie.id} className="">
                    <TrendingCard movie={movie} viewsType="rating" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </AppLayout>
  );
}
