import React from 'react'
import Image from "next/image";

const Banner = () => {
  return (
    <>
<div>
 <div className="relative w-full">

  <Image
    src="/bannerIMG.avif"
    alt="Hero Image"
    width={50000}
    height={200}
    className="opacity-50"
  />

  <div className="absolute inset-0 flex flex-col items-center justify-center">

    <h1 className="text-6xl font-medium font-mon text-center">
      Build Your Dream Website
    </h1>

    <div className="w-full flex justify-center items-center">
      <div className="w-[600px]">
        <p className="text-xl font-normal font-mon text-center py-9">
          We help businesses create modern, professional, and user-friendly
          websites that grow their online presence.
        </p>
      </div>
    </div>

    <div className="flex justify-center">
    
    </div>

  </div>

</div>
</div>


    </>
  )
}

export default Banner
