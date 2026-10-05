import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div id="about" className="mt-[100px] md:mt-[150px] px-5 md:px-8 lg:px-0">

        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-5">

          {/* Left Content */}
          <div className="w-full lg:w-1/2">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold font-mon">
              About Us
            </h1>

            <div className="w-full mt-6 md:mt-10">
              <div className="w-full max-w-[650px]">
                <p className="text-[17px] sm:text-[19px] md:text-[22px] font-normal font-mon py-5 md:py-9 leading-7 md:leading-9">
                  We are a passionate team dedicated to designing clean,
                  responsive, and effective websites for businesses of all
                  sizes. We are a passionate team dedicated to designing clean,
                  responsive, and effective websites for businesses of all
                  sizes.
                </p>
              </div>
            </div>

            <div className="mt-3 md:mt-5">
              <button className="cursor-pointer px-10 sm:px-12 md:px-15 py-4 md:py-5 text-[17px] sm:text-[19px] md:text-[20px] bg-black text-white font-normal font-mon rounded-md transition-all duration-300 hover:bg-[#2373F4] hover:text-black hover:scale-105">
                Start Now
              </button>
            </div>

          </div>


          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">

            <Image
              src="/aboutIMG.png"
              alt="About Us"
              width={800}
              height={200}
              className="w-full max-w-[450px] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[700px] h-auto object-contain"
            />

          </div>

        </div>

      </div>
    </>
  );
};

export default About;