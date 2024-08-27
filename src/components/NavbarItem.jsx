'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'


// export default function NavbarItem({ title, param }) {
//     const searchParams = useSearchParams();
//     const genre = searchParams.get('genre');
//   return (
//       <div >
          
//               <Link className={`hover:text-blue-500 font-semibold ${genre === param ? 'underline underline-offset-8 decortion-4 decoration-blue-600 rounded-lg' : ''}`}
//                   href={`/?genre=${param}`}>{title}</Link>
          
//       </div>
//   )
// }
'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

// Function to get search parameters
function searchParam() {
    return useSearchParams();
}

function NavbarItem({ title, param }) {
    const searchParams = searchParam();
    const genre = searchParams.get('genre');
    return (
        <div>
            <Link className={`hover:text-blue-500 font-semibold ${genre === param ? 'underline underline-offset-8 decortion-4 decoration-blue-600 rounded-lg' : ''}`}
                href={`/?genre=${param}`}>{title}</Link>
        </div>
    )
}

// Wrap NavbarItem with Suspense
export default function SuspendedNavbarItem(props) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NavbarItem {...props} />
        </Suspense>
    );
}