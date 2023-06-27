import React, { useRef, useState } from 'react'
import Logo from '../components/Logo'
import { FcGoogle } from 'react-icons/fc'
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
    if (validateInputs) {
      console.log('hii')
    }
  }

  return (
    <div className="flex">
      <div className="min-h-screen w-1/3 bg-[url(/signupbanner.png)] bg-cover"></div>
      <main className="px-40 w-2/3 pt-[7%] pb-5">
        <div className="text-center">
          <Logo size="text-2xl" />
          <h2 className="text-4xl font-bold mt-10">Sign Up to Event Hive</h2>
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
              className="w-full p-[10px] mt-1 rounded-md"
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
              className="w-full p-[10px] mt-1 rounded-md"
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
              className="w-full p-[10px] mt-1 rounded-md"
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
