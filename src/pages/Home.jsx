import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Event from '../components/Event'
import { cards, event } from '../utils/data'
import {
  PiCaretLeftLight,
  PiCaretRightLight,
  PiCaretDownLight,
  PiCaretDownBold,
} from 'react-icons/pi'
import { BiSearch } from 'react-icons/bi'
import Card from '../components/Card'

const Home = () => {
  return (
    <>
      <Navbar />
      <header className="w-11/12 mx-auto relative">
        <h2 className="text-white font-bold text-[4rem] absolute top-20 left-1/2 -translate-x-1/2 text-center uppercase max-w-xl">
          Made for those who do
        </h2>
        <img src="/homebanner.png" alt="" />
        {/* left right btn container */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full">
          <button className="absolute left-10 w-[50px] h-[50px] bg-[#f2f2f233] rounded-full flex items-center justify-center text-white">
            <PiCaretLeftLight size={30} />
          </button>
          <button className="absolute right-10 w-[50px] h-[50px] bg-[#f2f2f233] rounded-full flex items-center justify-center text-white">
            <PiCaretRightLight size={30} />
          </button>
        </div>
        {/* search bar */}
        <form className="absolute -bottom-20 w-11/12 left-1/2 -translate-x-1/2 bg-navyBlue rounded-[20px] py-9 px-16 flex items-center justify-between">
          <div className="grid gap-5 w-60">
            <h3 className="text-backgroundGrey">Looking for</h3>
            <div className="flex items-center bg-backgroundGrey text-navyBlue px-4 py-2 justify-between cursor-pointer rounded-md">
              <span>Choose event type</span>
              <PiCaretDownBold size={24} />
            </div>
          </div>
          <div className="grid gap-5 w-60">
            <h3 className="text-backgroundGrey">Location</h3>
            <div className="flex items-center bg-backgroundGrey text-navyBlue px-4 py-2 justify-between cursor-pointer rounded-md">
              <span>Choose location</span>
              <PiCaretDownBold size={24} />
            </div>
          </div>
          <div className="grid gap-5 w-60">
            <h3 className="text-backgroundGrey">When</h3>
            <div className="flex items-center bg-backgroundGrey text-navyBlue px-4 py-2 justify-between cursor-pointer rounded-md">
              <span>Choose data and time</span>
              <PiCaretDownBold size={24} />
            </div>
          </div>
          <button className="text-backgroundGrey bg-primary p-7 rounded-md">
            <BiSearch size={30} />
          </button>
        </form>
      </header>
      <main>
        {/* upcoming events */}
        <section className="w-10/12 mx-auto py-36">
          <div className="flex ">
            <h2 className="text-4xl font-bold">
              Upcoming <span className="text-primary">Events</span>
            </h2>
          </div>
          <div className="grid gap-5 grid-cols-3 w-full py-8">
            {event.map((data, i) => {
              return <Event key={i} {...data} />
            })}
          </div>
          <button className="bg-primary text-white rounded-md py-3 px-7 block mx-auto">
            Load more...
          </button>
        </section>
        {/* trending colleges */}
        <section className="w-10/12 mx-auto">
          <div className="flex ">
            <h2 className="text-4xl font-bold">
              Trending <span className="text-primary">Colleges</span>
            </h2>
          </div>
          <div className="grid gap-5 grid-cols-3 w-full py-8">
            {cards.map((data, i) => {
              return <Card key={i} {...data} />
            })}
          </div>
          <button className="bg-primary text-white rounded-md py-3 px-7 block mx-auto">
            Load more...
          </button>
        </section>
        {/* our blogs */}
        <section className="w-10/12 mx-auto pt-20 pb-28">
          <div className="flex ">
            <h2 className="text-4xl font-bold">
              Our <span className="text-primary">Blogs</span>
            </h2>
          </div>
          <div className="grid gap-5 grid-cols-3 w-full py-8">
            {event.slice(2, 5).map((data, i) => {
              return <Event key={i} {...data} />
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
