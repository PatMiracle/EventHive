import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogoLight,
} from 'react-icons/pi'

const links = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'About',
    url: '',
  },
  {
    text: 'Services',
    url: '',
  },
  {
    text: 'Get in touch',
    url: '',
  },
  {
    text: 'FAQs',
    url: '',
  },
]
const email_regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
const Footer = () => {
  const [email, setEmail] = useState('')
  const [invalid, setInvalid] = useState(false)

  // reset invalid when email changes
  useEffect(() => {
    setInvalid(false)
  }, [email])

  const handleSubmit = (e) => {
    e.preventDefault()
    // validate email
    if (!email_regex.test(email)) {
      setInvalid(true)
    }
  }

  return (
    <footer className="bg-navyBlue pt-[3%] pb-[2%] px-[3%] text-center text-white">
      <Logo color="text-white" />
      <form
        onSubmit={handleSubmit}
        className="pt-5 pb-8 flex justify-center gap-3"
      >
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your mail"
          className={`py-4 px-5 rounded-md w-72 border-2 border-solid ${
            invalid ? 'text-red-500 border-red-500' : 'text-black border-white'
          }`}
        />
        <button className="bg-primary rounded-md text-white py-4 px-10">
          Subscribe
        </button>
      </form>
      <div className="flex justify-center gap-5">
        {links.map(({ text, url }, i) => {
          return (
            <Link key={i} to={url}>
              {text}
            </Link>
          )
        })}
      </div>
      <div className="w-full h-[1px] bg-white mt-8 mb-7"></div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <button className="px-3 py-1 bg-primary rounded-md">English</button>
          <button className="px-3 py-1 duration-500 hover:bg-primary rounded-md">
            French
          </button>
          <button className="px-3 py-1 duration-500 hover:bg-primary rounded-md">
            Hindi
          </button>
        </div>
        <div className="flex gap-4">
          <Link>
            <PiLinkedinLogoLight size={30} />
          </Link>
          <Link>
            <PiInstagramLogo size={30} />
          </Link>
          <Link>
            <PiFacebookLogo size={30} />
          </Link>
        </div>
        <p>Non Copyrighted © 2023 Upload by rich technologies</p>
      </div>
    </footer>
  )
}

export default Footer
