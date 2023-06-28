import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RenderEvents from '../components/RenderEvents'

const College = () => {
  return (
    <>
      <Navbar />
      <main className="w-11/12 mx-auto">
        <article>
          <img src="/roorkee.png" alt="" role="banner" className="w-full" />
          <div className="w-11/12 mx-auto">
            <h2 className="text-4xl font-bold my-8">IIT Roorke</h2>
            <div className="grid gap-7">
              <p>
                DesignHub organized a 3D Modeling Workshop using Blender on 16th
                February at 5 PM. The workshop taught participants the magic of
                creating stunning 3D models and animations using Blender. It was
                suitable for both beginners and experienced users. The event was
                followed by a blender-render competition, which added to the
                excitement.
              </p>
              <p>
                DesignHub organized a 3D Modeling Workshop using Blender on 16th
                February at 5 PM. The workshop taught participants the magic of
                creating stunning 3D models and animations using Blender. It was
                suitable for both beginners and experienced users. The event was
                followed by a blender-render competition, which added to the
                excitement.
              </p>
              <p>
                DesignHub organized a 3D Modeling Workshop using Blender on 16th
                February at 5 PM. The workshop taught participants the magic of
                creating stunning 3D models and animations using Blender. It was
                suitable for both beginners and experienced users. The event was
                followed by a blender-render competition, which added to the
                excitement.
              </p>
              <p>
                DesignHub organized a 3D Modeling Workshop using Blender on 16th
                February at 5 PM. The workshop taught participants the magic of
                creating stunning 3D models and animations using Blender. It was
                suitable for both beginners and experienced users. The event was
                followed by a blender-render competition, which added to the
                excitement.
              </p>
            </div>
          </div>
          <section className="w-11/12 mx-auto py-14">
            <h2 className="text-4xl font-bold mb-10">
              College <span className="text-primary">Events</span>
            </h2>
            <RenderEvents />
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default College
