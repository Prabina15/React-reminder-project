import React from "react";
import { Link } from "react-router-dom";
import useReminderStore from "../stores/reminderStore";

const ReminderCard = ({
  id,
  isUpcoming = false,
  title,
  date,
  time,
  description,
  status = "PENDING",
  onDeleteReminder
}) => {
  let cardColor ="bg-orange-100";

  if(status == "COMPLETED") cardColor ="bg-green-100";
  if(status == "CANCELLED") cardColor ="bg-red-100";

   const {markCompleted} = useReminderStore();


  // function removeReminder(){
   
  //   if( confirm("Are you sure?")){
  //     deleteReminder(id);
  //   }

  // };
  return (
    <div className={`shadow rounded-3xl px-6 py-6 mx-6 ${cardColor}`}>
  
      <div className={`flex  justify-between items-start mb-2 gap-x-4 `}>
        <h2 className="text-xl sm:text-3xl font-medium">{title}</h2>
        <div className="flex gap-2">
          <Link to={`/edit/${id}`} className="bg-blue-100 hover:bg-blue-200 py-1.5 px-2 rounded-md text-sm">
            {" "}
            ✏️
          </Link>
          <button
          onClick={onDeleteReminder}
          className="bg-red-100 hover:bg-red-200 py-1.5 px-2 rounded-md text-sm">
            🗑️
          </button>
        </div>
      </div>
      <div className="flex gap-2 text-orange-500 pt-1 pb-2 text-xs ">
        <span>📅 {date}</span>
        <span>🕙{time}</span>
      </div>
      <p className="mb-4">{description}</p>
      {!isUpcoming && status =="PENDING" && (
        <button onClick={()=>markCompleted(id)} className="bg-orange-500 text-sm text-white rounded-md px-4 py-1">
          Mark as completed
        </button>
      )}
    </div>
  );
};

export default ReminderCard;
