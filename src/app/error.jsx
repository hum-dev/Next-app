
'use client'
import { useEffect } from "react"
export default function error({ error, reset }) {
    useEffect(() => {
    console.log(error);
    }, [error]);
  return (
      <div>
            <h1>Something Went Wrong</h1>
            <button className="hover:text-blue-600 text-center" onClick={() => reset()}>Try Again</button>
      </div>
  )
}
