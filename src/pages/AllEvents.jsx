import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EventCard from '../components/EventCard'
import { event } from '../utils/data'
import { PiCaretDownBold } from 'react-icons/pi'
import RenderEvents from '../components/RenderEvents'
import ScrollToTop from '../components/ScrollToTop'

const AllEvents = () => {
  return (
    <>
      <ScrollToTop />
      <div className="white-bg">
        <header className="w-11/12 ml-auto flex justify-between gap-10 pt-28 items-center">
          <div>
            <p>Thriving Above Event Expectations.</p>
            <h1 className="text-7xl">
              Event<span className="text-primary">Hive</span>-ing the Best.Day.
              <br /> Ever.
            </h1>
            <div className="flex gap-5 pt-5">
              <div className="py-5 px-6 bg-primary rounded-lg text-white">
                <h3 className="text-3xl">2k+</h3>
                <p>
                  Total Events <br /> Hosted
                </p>
              </div>
              <div className="py-5 px-6 bg-primary rounded-lg text-white">
                <h3 className="text-3xl">100+</h3>
                <p>
                  Total Events <br /> Live
                </p>
              </div>
            </div>
          </div>
          <img src="/all_event_banner.png" alt="" />
        </header>
        <section className="w-10/12 mx-auto pt-20">
          <div className="flex items-center justify-between">
            <h2>
              <span className="text-primary">Events</span> around you
            </h2>
            <div className="flex gap-4">
              <div className="flex items-center bg-[#efeff1] px-4 py-2 justify-between cursor-pointer w-36 rounded-md text-sm">
                <span>Weekdays</span>
                <PiCaretDownBold size={20} />
              </div>
              <div className="flex items-center bg-[#efeff1] px-4 py-2 justify-between cursor-pointer w-36 rounded-md text-sm">
                <span>Event type</span>
                <PiCaretDownBold size={20} />
              </div>
              <div className="flex items-center bg-[#efeff1] px-4 py-2 justify-between cursor-pointer w-36 rounded-md text-sm">
                <span>Any category</span>
                <PiCaretDownBold size={20} />
              </div>
            </div>
          </div>
          <div className="pt-8 pb-10 grid grid-cols-3 gap-5">
            {event.slice(0, 3).map((data, i) => (
              <EventCard {...data} key={i} />
            ))}
          </div>
        </section>
        <section>
          <Navbar />
          <div className="w-10/12 mx-auto pb-28">
            <RenderEvents />
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default AllEvents
