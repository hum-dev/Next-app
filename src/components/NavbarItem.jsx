'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const NavbarItem = ({ title, param }) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
    
    return (
        <div>
            <Link 
                className={`hover:text-blue-500 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-blue-600 rounded-lg' : ''}`}
                href={`/?genre=${param}`}
            >
                {title}
            </Link>
        </div>
    );
}

const SuspendedNavbarItem = (props) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NavbarItem {...props} />
        </Suspense>
    );
}

export default SuspendedNavbarItem;