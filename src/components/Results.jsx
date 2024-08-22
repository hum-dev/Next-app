

export default function Results({results}) {
  return (
      <div>
          {results.map((result) => (
                <div key={result.id} className='p-2'>
                    <h2> {result}</h2>
                </div>
            ))
         }
      </div>
  )
}
