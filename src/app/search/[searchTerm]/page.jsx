
import Results from '@/components/Results';
import React, { Suspense } from 'react'


export default async function SearchPage({ params }) {
    const SearchTerm = params.SearchTerm;
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${SearchTerm}&language=en-US&page=1&include_adult=false`
    );
    const data = await res.json();
    const results= data.results
  return (
    <div>
      <Suspense>
      {
        results && results.length === (
          <h1 className='text-centre pt-6'> No results found</h1>
        )
      }
      {results && <Results results={results} />}
      </Suspense>
      </div>
  )
}
