import AppLayout from "../components/layouts/appLayout";
import MoviesPageContent from "../components/organisms/MoviesPageContent";
import { IoPlay } from "react-icons/io5";
import AppButton from "../components/organisms/AppButton";
import { fetchAPI, fetchGenresAPI } from "../../services/authService";
import Link from "next/link";

export default async function Movies() {
  const { data: latestData } = await fetchAPI("latest");
  const { data: genresData } = await fetchGenresAPI();
  const { data: trendingData } = await fetchAPI("trending");

  const movie = latestData?.results || [];
  const genres = genresData?.results || [];
  const trending = trendingData?.results || [];

  return (
    <AppLayout active="movies">
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

      <MoviesPageContent genres={genres} trending={trending} />
    </AppLayout>
  );
}
