import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ size, color }) => {
  return (
    <Link
      to="/"
      className={`font-semibold ${size ? size : 'text-[40px]'} ${
        color ? color : 'text-black'
      }`}
    >
      Event <span className="text-primary">Hive</span>
    </Link>
  )
}

export default Logo
