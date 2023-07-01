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
      <section className="bg-white mt-10 rounded-[20px] p-8">
        <div>
          <h3>Weekly Revenue</h3>
        </div>
      </section>
    </>
  )
}

export default Dashboard
