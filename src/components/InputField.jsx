import React, { useState } from 'react'

const InputField = ({ addComment, depth }) => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  return (
    <div className="container mx-auto mb-4">
      <form className="flex flex-col">
        <input
          value={name}
          placeholder="Name"
          onChange={e => setName(e.target.value)}
          className="box-border h-10 w-full rounded appearance-none border border-neutral mb-2"
        />
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          className="box-border p-2 w-full rounded border border-red-900 mb-2"
        />
        <button
          type="submit"
          className="text-white bg-blue-500 hover:bg-blue-700 px-2 py-2 ml-auto rounded"
          onClick={e => addComment(e, name, comment, setName, setComment)}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default InputField
