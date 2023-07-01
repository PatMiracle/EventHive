import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'
import HomeLayout from './components/HomeLayout'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import College from './pages/College'
import Event from './pages/Event'
import AllEvents from './pages/AllEvents'
import ErrorPage from './pages/ErrorPage'
import CreateEvent from './pages/CreateEvent'
import CollegeEvents from './pages/CollegeEvents'
import Register from './pages/Register'
import DashboardLayout from './components/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Events from './pages/Dashboard/Events'

const router = createHashRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/event', element: <Event /> },
      { path: '/college', element: <College /> },
      { path: '/college-events', element: <CollegeEvents /> },
    ],
  },
  { path: '/signup', element: <SignUp /> },
  { path: '/login', element: <Login /> },
  { path: '/all-events', element: <AllEvents /> },
  { path: '/create-event', element: <CreateEvent /> },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: '/dashboard/events', element: <Events /> },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
