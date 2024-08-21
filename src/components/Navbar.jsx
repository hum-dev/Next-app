import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
      <div className='flex dark:bg-gray-400 bg-blue-100 p-3 lg:text-lg justify-center gap-6'>
          <NavbarItem title="New Releases" param="fetchNewReleases" />
          <NavbarItem title="Trending" param="fetchTrending" />
          <NavbarItem title="Top Rated" param="fetchTopRated"/>

      </div>
  )
}
