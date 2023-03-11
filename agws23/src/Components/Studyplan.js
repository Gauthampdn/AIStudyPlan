import React from 'react'

export default function Studyplan({givePlan, setInput}) {
  return (
    <div>
        <textarea 
        className='text-area' 
        cols={80} 
        rows={30}
        onChange={(e) => setInput(e.target.value)}
        >
        </textarea>
        <button onClick={givePlan}> Give me a plan! </button>
    </div>
  )
}
