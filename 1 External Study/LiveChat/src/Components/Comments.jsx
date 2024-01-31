import React from 'react'
import { commentsData } from './CommentsContainer'

const SingleComment = ({data}) => {
    const {name, text, replies} = data;

    return (
        <div className='flex gap-2 items-center bg-gray-100 p-2'>
            <img className='w-8 h-8' src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="img" />
            <div>
            <p className='font-bold'> {name} </p>
            <p> {text} </p>
            </div>
        </div>
    )
}

const CommentList = ({data}) => {
    console.log(data)
    return (
        <>
            {data.map((item, id)=> (
                <>
                <SingleComment key={id} data={item} />
                <div className='mx-5 px-5 border-2 border-l-black'>
                    <CommentList data={item.replies}/>
                </div>
                </>
            ))}
        </>
    )
}

const Comments = () => {
  return (
    <div>
      <CommentList data={commentsData}/>
    </div>
  )
}

export default Comments
