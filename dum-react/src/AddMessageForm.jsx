import { useState } from 'react'

function AddMessageForm({ handleAddMessageClick }) {

  const [formFields, setFormFields] = useState({
    title: '',
    text: ''
  })

  return (
    <>
      <form className='flex flex-col bg-slate-100 m-5 p-5 rounded-xl space-y-1 '>
        <h1 className='text-center text-xl font-bold'>Add Message</h1>

        {/* title */}
        <label>Title</label>
        <input
          type="text"
          name="title"
          required
          value={formFields.title}
          onChange={(e) => setFormFields({
            ...formFields,
            title: e.target.value
          })}
          className='border border-solid border-2 p-2 rounded-xl'
        />

        {/* text */}
        <label>Text</label>
        <textarea
          name="text"
          rows="6"
          required
          value={formFields.text}
          onChange={(e) => setFormFields({
            ...formFields,
            text: e.target.value
          })}
          className='border border-solid border-2 p-2 rounded-xl'
        />

        <p>{formFields.title ? formFields.title : 'no title'}</p>
        <p>{formFields.text ? formFields.text : 'no text'}</p>

        {/* add button */}
        <button onClick={(e) => handleAddMessageClick(e, formFields.title, formFields.text)} className='text-white bg-slate-500 max-w-fit p-2 rounded-xl transition duration-200 hover:bg-slate-600'>Add</button>
      </form>
    </>
  )
}

export default AddMessageForm