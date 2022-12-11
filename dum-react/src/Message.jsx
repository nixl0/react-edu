function Message({ title, text, timestamp, priority }) {
  return (
    <div className={`m-3 p-3 rounded-xl ${priority && 'bg-red-50'}`}>
      <h1 className="font-bold text-xl mb-2">{title}</h1>
      <p className="mb-2">{timestamp}</p>
      <p>{text}</p>
    </div>
  )
}

export default Message






// class Message extends React.Component {
//   constructor({ title, text, timestamp, priority }) {
//     super({ title, text, timestamp, priority })
//   }

//   render() {
//     return (
//       <div className={`m-3 p-3 rounded-xl ${priority && 'bg-red-50'}`}>
//         <h1 className="font-bold text-xl mb-2">{title}</h1>
//         <p className="mb-2">{timestamp}</p>
//         <p>{text}</p>
//       </div>
//     )
//   }
// }

// export default Message