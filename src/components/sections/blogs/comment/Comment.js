import moment from "moment";

const Comment = ({comment = {}}) => {
    const { name, body, createdAt } = comment;
  return (
      <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-200"></div>
          <div className="flex-1">
              <div className="flex items-center justify-between">
                  <h3 className="text-gray-700 font-semibold">{name}</h3>
                  <p className="text-gray-500 text-sm">{moment(createdAt).fromNow()}</p>
              </div>
              <p className="text-gray-500 mt-2">{body}</p>

          </div>
      </div>
  )
}

export default Comment