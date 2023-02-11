import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="lg:px-36 font-poppins mt-7">
        <h2 className="text-xl">Comments (0)</h2>
        <div className="mt-8 space-y-6">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>

    </div>
  )
}

export default Comments;