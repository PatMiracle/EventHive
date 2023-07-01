import { Outlet, Link } from 'react-router-dom'
import PurpleText from './PurpleText'
import {
  PiSquaresFourLight,
  PiTelevisionSimpleLight,
  PiPaperPlaneRightLight,
  PiUser,
} from 'react-icons/pi'

const DashboardLayout = () => {
  return (
    <>
      <div className="bg-white h-20"></div>
      <aside className="bg-white fixed top-0 py-7 w-52 left-0 min-h-screen flex flex-col items-center">
        <Link to="/" className="text-2xl font-bold">
          <PurpleText text="Event Hive" />
        </Link>
        <div className="pt-14 w-40 grid gap-7">
          <Link
            to="/dashboard"
            className="flex gap-3 py-2 items-center text-lg px-2 text-white bg-primary rounded-md"
          >
            <PiSquaresFourLight size={30} /> Dashboard
          </Link>
          <Link
            to="/dashboard/events"
            className="flex gap-3 py-2 items-center text-lg font-bold px-2 text-black rounded-md hover:bg-primary hover:text-white duration-300"
          >
            <PiTelevisionSimpleLight size={30} /> Events
          </Link>
          <Link
            to="/dashboard"
            className="flex gap-3 py-2 items-center text-lg font-bold px-2 text-black rounded-md hover:bg-primary hover:text-white duration-300"
          >
            <PiPaperPlaneRightLight size={30} /> Messages
          </Link>
          <Link
            to="/dashboard"
            className="flex gap-3 py-2 items-center text-lg font-bold px-2 text-black rounded-md hover:bg-primary hover:text-white duration-300"
          >
            <PiUser size={30} /> Profile
          </Link>
        </div>
      </aside>
      <main
        className="fixed left-52 top-20 p-8"
        style={{ width: 'calc(100% - 13rem)' }}
      >
        <Outlet />
      </main>
    </>
  )
}

export default DashboardLayout
