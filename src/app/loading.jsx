

import Image from "next/image"; // Replace 'your-image-library' with the actual library you are using for the Image component.

export default function loading() {
  return (
      <div className="flex justify-center items-center h-screen"> 
          <Image src="/spinner.svg" alt="Loading..." />
      </div>
  )
}
