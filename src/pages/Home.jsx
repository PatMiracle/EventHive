import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Event from '../components/Event'
import { event } from '../utils/data'
import { PiCaretLeftLight, PiCaretRightLight } from 'react-icons/pi'
import { BiSearch } from 'react-icons/bi'

const Home = () => {
  return (
    <>
      <Navbar />
      <header className="w-11/12 mx-auto relative">
        <img src="/homebanner.png" alt="" />
        {/* btn container */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full">
          <button className="absolute left-10 w-[50px] h-[50px] bg-[#f2f2f233] rounded-full flex items-center justify-center text-white">
            <PiCaretLeftLight size={30} />
          </button>
          <button className="absolute right-10 w-[50px] h-[50px] bg-[#f2f2f233] rounded-full flex items-center justify-center text-white">
            <PiCaretRightLight size={30} />
          </button>
        </div>
        {/* search bar */}
        <form className="absolute -bottom-5 bg-navyBlue rounded-[20px] py-9 px-16 flex items-center justify-between">
          <div></div>
          <div></div>
          <div></div>
          <button>
            <BiSearch />
          </button>
        </form>
      </header>
      <main>
        <section className="w-10/12 mx-auto py-28">
          <div className="">
            <h2 className="text-4xl font-bold">
              Upcoming <span className="text-primary">Events</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-5 mx-auto py-8">
            {event.map(({ img, text, date, type }, i) => {
              return (
                <Event key={i} img={img} text={text} date={date} type={type} />
              )
            })}
          </div>
          <button className="bg-primary text-white rounded-md py-3 px-7 block mx-auto">
            Load more...
          </button>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
