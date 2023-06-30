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
      <div className="event">
        {/* banner */}
        <div
          className="w-11/12 z-10 mx-auto pl-14 pt-36 pb-14 relative  before:absolute before:top-0 before:left-0 before:bg-[url(/event_banner.png)] before:rounded-lg before:bg-no-repeat before:bg-cover before:h-full before:w-full before:-z-20 after:absolute after:top-0 after:left-0 after:bg-[url(/overlay.png)] after:rounded-lg after:w-full after:h-full after:-z-10"
          role="banner"
        >
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
            <div className="bg-white p-7 rounded-lg grid gap-5 w-[30%] min-w-[300px]">
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
        <article className="grid grid-cols-2 gap-20 pt-10 pb-20 w-9/12 mx-auto">
          {/* description */}
          <div>
            <h2 className="text-2xl font-bold">Description</h2>
            <p className="my-5 text-grey600">
              DesignHub organized a 3D Modeling Workshop using Blender on 16th
              February at 5 PM. The workshop taught participants the magic of
              creating stunning 3D models and animations using Blender. It was
              suitable for both beginners and experienced users. The event was
              followed by a blender-render competition, which added to the
              excitement.
            </p>
            <p className="text-grey600 mb-10">
              DesignHub organized a 3D Modeling Workshop using Blender on 16th
              February at 5 PM. The workshop taught participants the magic of
              creating stunning 3D models and animations using Blender. It was
              suitable for both beginners and experienced users. The event was
              followed by a blender-render competition, which added to the
              excitement.
            </p>
            {/* hours */}
            <h2 className="text-2xl font-bold">Hours</h2>
            <p className="my-5 text-grey600">
              Weekdays hour:{' '}
              <span className="text-primary text-lg font-bold">7PM - 10PM</span>
            </p>
            <p className="text-grey600 mb-10">
              Sunday hour:{' '}
              <span className="text-primary text-lg font-bold">7PM - 10PM</span>
            </p>
            {/* organizer contact */}
            <h2 className="text-2xl font-bold">Organizer Contact</h2>
            <p className="my-5 text-grey600">
              Please go to{' '}
              <a href="https://www.sneakypeeks.com" className="text-primary">
                www.sneakypeeks.com
              </a>{' '}
              and refer the FAQ section for more detail
            </p>
          </div>
          {/* event location */}
          <div>
            <h2 className="text-2xl font-bold">Event location</h2>
            <img src="/map.png" alt="map" className="mt-5 mb-8 w-full" />
            <h3 className="text-2xl">Dream world wide in jakatra</h3>
            <p className="text-grey600 mb-10">
              Dummy location generation model by RSU ... Our approach generates
              more realistic dummy locations{' '}
            </p>
            {/* tags */}
            <h2 className="text-2xl font-bold">Tags</h2>
            <div className="flex flex-wrap gap-3 pt-5 pb-10">
              <span className="p-2 bg-backgroundGrey rounded-md">
                Indonesia event
              </span>
              <span className="p-2 bg-backgroundGrey rounded-md">
                Jaskaran event
              </span>
              <span className="p-2 bg-backgroundGrey rounded-md">UI</span>
              <span className="p-2 bg-backgroundGrey rounded-md">
                Jaskaran event
              </span>
              <span className="p-2 bg-backgroundGrey rounded-md">Seminar</span>
              <span className="p-2 bg-backgroundGrey rounded-md">
                Jaskaran event
              </span>
            </div>
            {/* share with friends */}
            <h2 className="text-2xl font-bold">Share with friends</h2>
            <div className="flex gap-4 pt-5">
              <img src="/facebook.svg" alt="facebook" />
              <img src="/whatsapp.svg" alt="whatsapp" />
              <img src="/linkedIn.svg" alt="linkedIn" />
              <img src="/twitter.svg" alt="twitter" />
            </div>
          </div>
        </article>
      </div>
      <section className="w-10/12 mx-auto pt-10 pb-28">
        <h2 className="text-4xl font-bold mb-12">Other events you may like</h2>
        <RenderEvents />
      </section>
    </>
  )
}

export default Event
