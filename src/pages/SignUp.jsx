import React, { useRef, useState } from 'react'
import Logo from '../components/Logo'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState('')
  const [pswd, setpswd] = useState('')
  const [confirmPswd, setConfirmPswd] = useState('')

  const nameRef = useRef(null)
  const pswdRef = useRef(null)
  const confirmPswdRef = useRef(null)

  const validateInputs = () => {
    if (!name) {
      nameRef.current.focus()
      return false
    } else if (pswd.length < 8) {
      pswdRef.current.focus()
      return false
    } else if (confirmPswd !== pswd) {
      confirmPswdRef.current.focus()
      return false
    } else {
      return true
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validateInputs()
  }

  return (
    <div>
      <div className="h-screen fixed top-0 left-0 w-1/3 before:absolute before:h-full before:w-full before:-z-20 before:bg-[url(/signupbanner.png)] before:bg-no-repeat before:bg-cover after:absolute after:bg-[url(/overlay.png)] after:top-0 after:left-0 after:h-full after:w-full after:-z-10 bg-cover flex justify-center items-center">
        <div className="flex flex-col gap-10 text-white text-center">
          <h1>Welcome back</h1>
          <p>To keep connected with us provide us with your information </p>
          <Link
            to="/login"
            className="bg-[#ffffff66] w-32 mx-auto py-3 rounded-md"
          >
            Sign In
          </Link>
        </div>
      </div>
      <main className="px-40 absolute left-1/3 w-2/3 pt-[7%] pb-5 inline-block">
        <div className="text-center">
          <Logo size="text-2xl" />
          <h2 className="mt-10">Sign Up to Event Hive</h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10 py-14">
          {/* name */}
          <div>
            <label className="block" htmlFor="name">
              YOUR NAME
            </label>
            <input
              type="text"
              id="name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-[10px] mt-2 rounded-md text-lg"
              placeholder="Enter your email"
              ref={nameRef}
            />
          </div>
          {/* password */}
          <div>
            <label className="block" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setpswd(e.target.value)}
              className="w-full px-5 py-[10px] mt-2 rounded-md text-lg"
              placeholder="Enter your password"
              ref={pswdRef}
            />
          </div>
          {/* confirm password */}
          <div>
            <label className="block" htmlFor="confirm">
              CONFIRM PASSWORD
            </label>
            <input
              type="password"
              id="confirm"
              onChange={(e) => setConfirmPswd(e.target.value)}
              className="w-full px-5 py-[10px] mt-2 rounded-md text-lg"
              placeholder="Enter your password"
              ref={confirmPswdRef}
            />
          </div>
          {/* buttons */}
          <button className="rounded-md text-white text-lg bg-primary w-72 mx-auto text-center py-2">
            Sign Up
          </button>
          <span className="mx-auto">Or</span>
          <button
            type="button"
            className="bg-white w-96 mx-auto flex items-center justify-center gap-7 text-lg rounded-md border border-solid border-[#eaeaea] py-2"
          >
            <FcGoogle size={24} /> Sign up with Google
          </button>
        </form>
      </main>
    </div>
  )
}

export default SignUp
