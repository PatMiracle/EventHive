import { Outlet, Link, useLocation } from 'react-router-dom'
import PurpleText from './PurpleText'
import {
  PiSquaresFourLight,
  PiTelevisionSimpleLight,
  PiPaperPlaneRightLight,
  PiUser,
} from 'react-icons/pi'

const sidebarLinks = [
  {
    url: '/dashboard',
    text: 'Dashboard',
    icon: <PiSquaresFourLight size={30} />,
  },
  {
    url: '/dashboard/events',
    text: 'Events',
    icon: <PiTelevisionSimpleLight size={30} />,
  },
  {
    url: '/dashboard/messages',
    text: 'Messages',
    icon: <PiPaperPlaneRightLight size={30} />,
  },
  {
    url: '/dashboard/profile',
    text: 'Profile',
    icon: <PiUser size={30} />,
  },
]

const DashboardLayout = () => {
  const location = useLocation()

  return (
    <>
      <div className="bg-white h-20"></div>
      <aside className="bg-white fixed top-0 py-7 w-52 left-0 min-h-screen flex flex-col items-center">
        <Link to="/" className="text-2xl font-bold">
          <PurpleText text="Event Hive" />
        </Link>
        <div className="pt-14 w-40 grid gap-7">
          {sidebarLinks.map(({ url, icon, text }, i) => {
            return (
              <Link
                key={i}
                to={url}
                className={`flex gap-3 py-2 items-center text-lg px-2 ${
                  location.pathname === url
                    ? 'text-white bg-primary'
                    : 'bg-white text-black'
                }  rounded-md hover:bg-primary hover:text-white`}
              >
                {icon} {text}
              </Link>
            )
          })}
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
