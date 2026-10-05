import React from 'react'

const Contact = () => {
  return (
    <>
     <section className="w-full min-h-screen bg-white flex items-center justify-between">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-mon  md:text-6xl font-medium font-mon text-black">
              Contact Us
            </h2>

            <p className="mt-7 max-w-[400px]  font-mon text-xl md:text-2xl font-normal font-mon leading-relaxed text-black">
              Have a project in mind? We'd love to hear from you.
            </p>
          </div>


          {/* Right Side */}
          <div className="w-full bg-[#DFE5EA] rounded-xl p-6 md:p-7">

            <h3 className="text-2xl font-semibold font-mon text-black mb-7">
              Contact us
            </h3>

            <form>

              {/* First Name */}
              <div className="mb-5">
                <label className="block text-sm font-normal font-mon text-black mb-2">
                  First name
                </label>

                <input
                  type="text"
                  placeholder="First name"
                  className="w-full h-[36px] px-3 bg-white rounded-md outline-none text-sm font-mon placeholder:text-gray-500"
                />
              </div>


              {/* Last Name */}
              <div className="mb-5">
                <label className="block text-sm font-normal font-mon text-black mb-2">
                  Last name
                </label>

                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full h-[36px] px-3 bg-white rounded-md outline-none text-sm font-mon placeholder:text-gray-500"
                />
              </div>


              {/* Email */}
              <div className="mb-5">
                <label className="block text-sm font-normal font-mon text-black mb-2">
                  Email <span>*</span>
                </label>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-[36px] px-3 bg-white rounded-md outline-none text-sm font-mon placeholder:text-gray-500"
                />
              </div>


              {/* Message */}
              <div className="mb-5">
                <label className="block text-sm font-normal font-mon text-black mb-2">
                  Message <span>*</span>
                </label>

                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-3 py-2 bg-white rounded-md outline-none resize-none text-sm font-mon placeholder:text-gray-500"
                ></textarea>
              </div>


              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-full md:w-[342px] h-[38px] bg-[#2373F4] text-white rounded-full font-mon text-sm transition-all duration-300 hover:scale-[1.02] hover:bg-[#1265e8]"
                >
                  Submit
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
    
    </>
  )
}

export default Contact
