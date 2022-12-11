import { useEffect, useState } from 'react'
import AddMessageForm from './AddMessageForm'
import Message from './Message'
// import messages from './assets/messages.json'

function App() {
  const [messages, setMessages] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/messages')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setMessages(data)
      })
  }, [])

  return (
    <div className="App">
      <h1 className='text-center'>hello world</h1>

      <AddMessageForm />

      {messages && messages.map(message => <Message {...message} />)}
    </div>
  )
}

export default App