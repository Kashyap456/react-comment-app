import React, { useState } from 'react'

const Voter = () => {
  const [vote, setVote] = useState(0)

  return (
    <div className="flex flex-col items-center p-4">
      <button
        type="button"
        className="w-auto text-violet-700"
        onClick={() => setVote(prevVote => prevVote + 1)}
      >
        +
      </button>
      <h1>{vote}</h1>
      <button
        type="button"
        className="w-auto text-orange-500"
        onClick={() => setVote(prevVote => prevVote - 1)}
      >
        -
      </button>
    </div>
  )
}

export default Voter
