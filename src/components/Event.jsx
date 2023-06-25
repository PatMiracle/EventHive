import React from 'react'

const Event = ({ img, text, date, type }) => {
  return (
    <div className="bg-white p-5 rounded-lg w-max relative shadow-xl max-w-[360px]">
      <span className="select-none bg-white px-2 py-1 rounded-[5px] text-primary text-sm absolute top-8 left-8">
        FREE
      </span>
      <img src={img} alt="" className="w-full" />
      <p className="w-full mt-2">{text}</p>
      <p className="text-primary text-sm mt-4 mb-5">{date}</p>
      <p className="text-xs text-grey600">{type}</p>
    </div>
  )
}

export default Event
