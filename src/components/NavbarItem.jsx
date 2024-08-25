'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'


export default function NavbarItem({ title, param }) {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
  return (
      <div >
          <Suspense>
              <Link className={`hover:text-blue-500 font-semibold ${genre === param ? 'underline underline-offset-8 decortion-4 decoration-blue-600 rounded-lg' : ''}`}
                  href={`/?genre=${param}`}>{title}</Link>
          </Suspense>
      </div>
  )
}
