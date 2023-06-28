import Event from './Event'
import { event } from '../utils/data'

const Events = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {event.map((data, i) => (
        <Event key={i} {...data} />
      ))}
    </div>
  )
}

export default Events
