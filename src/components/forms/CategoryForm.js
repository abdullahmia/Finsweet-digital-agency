import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Circle from '../../components/loaders/Circle';

const CategoryForm = ({ createHandler, isLoading, categoryEdit }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const { isEditing, editItem, clearEditing, handler } = categoryEdit || {};

  const dispatch = useDispatch();

  useEffect(() => {
    setName(editItem?.name);
    setId(editItem?.id);
  }, [editItem])

  
  // create category handler
  const createCategoryHandler = (e) => {
    e.preventDefault();
    createHandler({name});
    setName("");
  }

  // clear editing
  const clearEdtingHanler = () => {
    dispatch(clearEditing());
  }

  // edit category handler
  const editCategoryHandler = (e) => { 
    e.preventDefault();

    handler({id, body: {name}});
    setName("");
    id("");
    clearEdtingHanler();
  }

  return (
    <form className="font-poppins" onSubmit={isEditing ? editCategoryHandler : createCategoryHandler}>
      {isEditing && <button onClick={clearEdtingHanler} className='text-sm'>Clear</button>}
        <div className="flex gap-4">
            <input type="text" placeholder="Add new category" value={name} onChange={(e) => setName(e.target.value)} className="input flex-1" />
            <button type="submit" className="black-sm-btn">
          {isLoading ? <Circle /> : isEditing ? 'Edit' : 'Add'}
            </button>
        </div>
    </form>
  )
}

export default CategoryForm;