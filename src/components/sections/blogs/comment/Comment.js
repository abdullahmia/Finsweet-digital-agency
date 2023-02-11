const Comment = () => {
  return (
      <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-200"></div>
          <div className="flex-1">
              <div className="flex items-center justify-between">
                  <h3 className="text-gray-700 font-semibold">John Doe</h3>
                  <p className="text-gray-500 text-sm">2 days ago</p>
              </div>
              <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

          </div>
      </div>
  )
}

export default Comment