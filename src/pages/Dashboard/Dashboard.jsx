import React from 'react'

const Dashboard = () => {
  return (
    <>
      <section className="grid grid-cols-4 gap-8">
        <div className="bg-white rounded-lg h-52 "></div>
        <div className="bg-white rounded-lg h-52 "></div>
        <div className="bg-white rounded-lg h-52 "></div>
        <div className="bg-white rounded-lg h-52 "></div>
      </section>
      <section className="grid gap-x-5 gap-y-10 pt-10 pb-4">
        <div className="bg-white rounded-[20px] p-8 col-span-2">
          <div className="flex justify-between items-center">
            <h3>Weekly Revenue</h3>
            <span className="py-2 px-4 bg-[#f4f7fe] rounded-lg">
              <img src="/bar_chart.svg" alt="" />
            </span>
          </div>
        </div>
        <div className="bg-white rounded-[20px] p-8 col-span-1">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-bold">Your Pie Chart</h4>
            <select name="" id="" className="text-[#687C94]">
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>
        <div className="bg-white rounded-[20px] p-8 col-span-1">
          <div className="flex justify-between items-center">
            <h4 className="text-[#A3AED0] font-medium">Daily Traffic</h4>
            <span className="text-[#05CD99] font-bold">+2.45%</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
