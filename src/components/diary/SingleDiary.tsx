import React from 'react'
import './SingleDiary.css'
function SingleDiary({diary}:any) {

  return (
    <div className='singleDiaryContainer'>
        <h1>{diary.title}</h1>
        <h3 className='messageBody'>{diary.messageBody}</h3>
        <p>{diary.date}</p>
        <p>mood: {diary.mood}</p>
    </div>
  )
}

export default SingleDiary