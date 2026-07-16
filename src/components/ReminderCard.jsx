import React from 'react'

const ReminderCard = ({isUpcoming =false}) => {
  return (
    <div className="shadow rounded-3xl p-6 max-w-2xl">
        <span className="text-xs px-4 py-1 rounded-lg bg-orange-500">Pending</span>
       <div className= "flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mb-2 mb-4 gap-x-2">
         <h2 className="text-3xl font-medium">Reminder title</h2>
        <div className="flex gap-2">
            <button className="bg-blue-100 hover:bg-blue-200 py-1.5 px-2 rounded-md text-sm"> ✏️</button>
            <button className="bg-red-100 hover:bg-red-200 py-1.5 px-2 rounded-md text-sm">🗑️</button>
        </div>
        </div>
        <div className="flex gap-2 text-orange-500 pt-1 pb-2 text-xs ">
            <span>📅 2026 May 27</span>
            <span>🕙10:00 AM</span>   
       </div>
        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, facere voluptatibus culpa pariatur itaque fugiat dignissimos eum minus voluptas? Magnam, ullam delectus aliquam libero mollitia ipsa quidem laboriosam. Earum, explicabo.
        </p>
        {!isUpcoming && <button className= "bg-orange-500 text-sm text-white rounded-md px-4 py-1">Mark as completed</button>}

    </div>
  )
}

export default ReminderCard