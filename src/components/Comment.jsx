import React, { useState } from 'react'
import Voter from './Voter'
import InputField from './InputField'

const Comment = ({ name: n, comment: c, depth }) => {
  const [reply, setReply] = useState(false)
  const [list, setList] = useState([])
  const [key, setKey] = useState(0)

  const addComment = (e, name, comment, setName, setComment) => {
    e.preventDefault()
    if (name && comment) {
      setList(ls => [...ls, { name, comment, key }])
      setKey(prevKey => prevKey + 1)
      setName('')
      setComment('')
    }
  }

  return (
    <div className="shadow-md p-4">
      <div className="flex flex-row place-items-start justify-between">
        <div className="break-words">
          <p className="text-sky-400 break-words mt-2">{n}</p>
          <p className="break-all">{c}</p>
        </div>
        <Voter />
      </div>
      <div>{depth < 2 && <button type="button" onClick={() => setReply(prevReply => !prevReply)}>Reply</button>}</div>
      {reply && <InputField addComment={addComment} />}
      <ul>
        {list.map(el => (
          <Comment name={el.name} comment={el.comment} depth={depth + 1} key={el.key} />
        ))}
      </ul>
    </div>
  )
}

export default Comment
