import React, { useState } from 'react'
import InputField from './components/InputField'
import Comment from './components/Comment'

const App = () => {
  const [count, setCount] = useState(0)
  const [list, setList] = useState([])

  const addComment = (e, name, comment, setName, setComment) => {
    e.preventDefault()
    if (name && comment) {
      setList(ls => [...ls, { name, comment, id: count }])
      setCount(prevCount => prevCount + 1)
      setName('')
      setComment('')
    }
  }

  return (
    <div className="container max-w-lg mx-auto mt-10">
      <h1 className="text-lg text-center mb-4">🧋 KASHYAP456 COMMENTING PLATFORM 🧋</h1>
      <InputField addComment={addComment} depth={0} />
      <ul>
        {list.map(el => (
          <Comment name={el.name} comment={el.comment} depth={0} key={el.id} />
        ))}
      </ul>
    </div>
  )
}

export default App
