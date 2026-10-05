import React from 'react'
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div id="about">
        <div className="relative w-full">

          <Image
            src="/bannerIMG.avif"
            alt="Hero Image"
            width={50000}
            height={200}
            className="w-full h-[500px] sm:h-[550px] md:h-[600px] object-cover opacity-50"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-mon text-center">
              Build Your Dream Website
            </h1>

            <div className="w-full flex justify-center items-center">
              <div className="w-full max-w-[600px]">
                <p className="text-base sm:text-lg md:text-xl font-normal font-mon text-center py-6 sm:py-8 md:py-9">
                  We help businesses create modern, professional, and user-friendly
                  websites that grow their online presence.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="cursor-pointer px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-base sm:text-lg md:text-[20px] bg-black text-white font-normal font-mon rounded-md transition-all duration-300 hover:bg-[#2373F4] hover:text-black hover:font-mon hover:scale-105">
                Start Now
              </button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Banner