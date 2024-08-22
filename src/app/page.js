import Results from "@/components/Results";

const API = process.env.API_KEY;
export default async function Home({searchParams}) {
  const genre =
    searchParams.genre ||
    "fetchTrending";
    // "fetchTopRated" ||
    // "fetchActionMovies" ||
    // "fetchComedyMovies" ||
    // "fetchHorrorMovies" ||
    // "fetchRomanceMovies" ||
    // "fetchMysteryMovies" ||
    // "fetchSciFiMovies" ||
    // "fetchWesternMovies" ||
    // "fetchAnimationMovies" ||
    // "fetchTV";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API}&language=en-US&page=1`
  );

  const data = await res.json();
  if (!res) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;
  console.log(results);
  return <div>
   <Results results={results} />
  </div>;
}
