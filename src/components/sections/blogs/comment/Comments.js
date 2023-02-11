import Comment from "./Comment";

const Comments = ({ comments = {}}) => {

  return (
    <div className="lg:px-36 font-poppins mt-7">
        <h2 className="text-xl">Comments ({comments?.length})</h2>
        <div className="mt-8 space-y-6">
          {
            comments?.length > 0 ? comments?.map((comment, key) => (<Comment key={key} comment={comment} />)) : <p>No comments yet</p>
          }
        </div>

    </div>
  )
}

export default Comments;