import { useState } from "react"

export default function CommentsForm(){

  //store the array of comments
  const [ commentsArray, setCommentsArray ] = useState([])
  
  //hold what the user types
  const [ name, setName ] = useState("")
  const [ comment, setComment ] = useState("")

  //function to add a comment
  const addComment = (name, comment) => {
    const newComment = { id: commentsArray.length + 1, name, comment }
    const newCommentArray = [...commentsArray, newComment]
    setCommentsArray(newCommentArray)
    setName("")
    setComment("")
  }

  //submit the form
  const handleSubmit = (event) => {
    event.preventDefault()
    addComment(name, comment)
  }

  return (
    <div>
      <h2>Comments List:</h2>
      {commentsArray.map(comment => {
        return (
          <div key={comment.id}>
            <p><b>Name:</b> {comment.name}</p>
            <p><b>Comment:</b> {comment.comment}</p>
          </div>
        )
      })}
      <h2>Leave a comment:</h2>
      <form onSubmit={handleSubmit}>
        Name: <input value={name} onChange={(e) => setName(e.target.value)}/>
        <br/><br/>
        Comment: <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        <br/><br/>
        <button type="submit">
          Send comment
        </button>
      </form>
    </div>
  )
}