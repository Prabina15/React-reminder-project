import React from 'react'
import Form from '../components/Form'
import useReminderStore from '../stores/reminderStore'
import { useParams } from 'react-router-dom'

const Editpage = () => {
  const params = useParams();
  const reminder= useReminderStore((state) => state.getReminderById(params.id));
  return (
    <div>
       <section className= "max-w-2xl mx-auto">
      <h2 className= "mb-4 text-xl font-bold text-gray-900"> Update  Reminder</h2>
    <Form isEditing={true} reminder={reminder} />
    </section>
    </div>
  )
}

export default Editpage