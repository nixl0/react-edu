import React, { useState } from 'react'

function AddMessageForm() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [priority, setPriority] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = {
      title: title,
      text: text,
      timestamp: new Date().toLocaleString(navigator.language),
      priority: 0
    }

    fetch('http://localhost:8000/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col bg-slate-100 m-5 p-5 rounded-xl space-y-1 '>
        <h1 className='text-center text-xl font-bold'>Add Message</h1>

        {/* title */}
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border border-solid border-2 p-2 rounded-xl'
        />

        {/* text */}
        <label>Text</label>
        <textarea
          rows="6"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='border border-solid border-2 p-2 rounded-xl'
        />

        {/* add button */}
        <button type='submit' className='text-white bg-slate-500 max-w-fit p-2 rounded-xl transition duration-200 hover:bg-slate-600'>Add</button>
      </form>
    </>
  )
}

export default AddMessageForm