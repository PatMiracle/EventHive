import React from 'react'
import RenderEvents from '../components/RenderEvents'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { PiCaretLeftBold } from 'react-icons/pi'
import { CiLocationOn } from 'react-icons/ci'

const Event = () => {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        {/* banner */}
        <div className="w-11/12 z-10 mx-auto pl-14 pt-36 pb-14 relative  before:absolute before:top-0 before:left-0 before:bg-[url(/event_banner.png)] before:rounded-lg before:bg-no-repeat before:bg-cover before:h-full before:w-full before:-z-20 after:absolute after:top-0 after:left-0 after:bg-[url(/overlay.png)] after:rounded-lg after:w-full after:h-full after:-z-10">
          <Link
            to="/"
            className="bg-primary text-white rounded-md py-3 px-4 mx-auto absolute top-10 left-14 flex items-center"
          >
            <PiCaretLeftBold className="mr-2" size={20} />
            Back
          </Link>
          <div className="w-11/12 flex justify-between">
            <div className="text-white max-w-[50%]">
              <h1 className="text-6xl font-bold">
                Dream world wide in jakatra
              </h1>
              <h2 className="text-4xl font-bold mt-10 mb-5">IIIT Sonepat</h2>
              <p>
                DesignHub organized a 3D Modeling Workshop using Blender on 16th
                February at 5 PM. The workshop taught participants the magic of
                creating stunning 3D models and animations using Blender. It was
                suitable for both beginners and experienced users. The event was
                followed by a blender-render competition, which added to the
                excitement.
              </p>
              <p className="mt-5 flex w-max items-center text-lg">
                <CiLocationOn className="text-white mr-2" size={20} />
                View map
              </p>
            </div>
            <div className="bg-white p-7 rounded-lg grid gap-5 max-w-[30%]">
              <h2 className="text-2xl font-bold mb-5">Date & time</h2>
              <p className="text-grey600 text-lg">
                Saturday, March 18 2023, 9.30PM
              </p>
              <button className="text-primary text-left">
                Add to calendar
              </button>
              <div>
                <button className="w-full text-center bg-primary py-2 text-white rounded-md mb-2">
                  Book now
                </button>
                <button className="w-full text-center bg-[#C5C5C5] py-2 text-white rounded-md">
                  Program promoter
                </button>
              </div>
              <p className="text-grey600 text-center">No Refunds</p>
            </div>
          </div>
        </div>
      </div>
      <section className="w-10/12 mx-auto py-10">
        <h2 className="text-4xl font-bold mb-12">Other events you may like</h2>
        <RenderEvents />
      </section>
      <Footer />
    </>
  )
}

export default Event
