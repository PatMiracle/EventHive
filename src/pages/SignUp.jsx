import React, { useState } from 'react'
import Logo from '../components/Logo'

const SignUp = () => {
  const [name, setName] = useState('')
  const [pswd, setpswd] = useState('')
  const [confirmPswd, setConfirmPswd] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="flex justify-between">
      <div className="h-screen w-1/3 bg-[url(/signupbanner.png)] bg-cover"></div>
      <main className="text-center w-2/3 py-[7%]">
        <Logo size="text-2xl" />
        <h2 className="text-4xl font-bold mt-10">Sign Up to Event Hive</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10 py-14">
          <div>
            <label className="block mt-7" htmlFor="name">
              YOUR NAME
            </label>
            <input
              type="text"
              id="name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block mt-7" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setpswd(e.target.value)}
            />
          </div>
          <div>
            <label className="block mt-7" htmlFor="confirm">
              CONFIRM PASSWORD
            </label>
            <input
              type="password"
              id="confirm"
              onChange={(e) => setConfirmPswd(e.target.value)}
            />
          </div>
        </form>
      </main>
    </div>
  )
}

export default SignUp
