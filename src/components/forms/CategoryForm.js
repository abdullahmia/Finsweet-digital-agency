const CategoryForm = () => {
  return (
    <form className="font-poppins">
        <div className="flex gap-4">
            <input type="text" placeholder="Add new category" className="input flex-1" />
            <button type="submit" className="black-sm-btn">Add</button>
        </div>
    </form>
  )
}

export default CategoryForm