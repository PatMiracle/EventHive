import PurpleText from '../components/PurpleText'
import RenderEvents from '../components/RenderEvents'
import { PiCaretDownBold } from 'react-icons/pi'

const CollegeEvents = () => {
  return (
    <div className="white-bg">
      <header>
        <h1 className="xl:text-[4rem] text-center mt-20 mb-12">
          Checkout your <PurpleText text="college events" /> now!!
        </h1>
        <div className="flex gap-4 justify-between items-center max-w-full overflow-hidden">
          <img src="/college-events_left.png" alt="" className="w-[30%]" />
          <img src="/college-events_center.png" alt="" className="w-[40%]" />
          <img src="/college-events_right.png" alt="" className="w-[30%]" />
        </div>
      </header>
      <main className="pt-20 pb-40 w-10/12 mx-auto">
        <div className="flex items-center justify-between pb-8">
          <h2>
            <PurpleText text="Colleges" /> near you
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
        <RenderEvents />
      </main>
    </div>
  )
}

export default CollegeEvents
