import React from 'react'

const Logo = ({ size, color }) => {
  return (
    <h2
      className={`font-semibold ${size ? size : 'text-4xl'} ${
        color ? color : 'text-black'
      }`}
    >
      Event <span className="text-primary">Hive</span>
    </h2>
  )
}

export default Logo
