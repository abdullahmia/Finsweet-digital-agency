import { useForm } from 'react-hook-form';
import Circle from '../../components/loaders/Circle';

const CategoryForm = ({createHandler, isLoading}) => {
  const {register, handleSubmit, reset} = useForm();

  // create category handler
  const createCategoryHandler = (data) => {
    createHandler(data);
    reset();
  }

  return (
    <form className="font-poppins" onSubmit={handleSubmit(createCategoryHandler)}>
        <div className="flex gap-4">
            <input type="text" placeholder="Add new category" {...register('name')} className="input flex-1" />
            <button type="submit" className="black-sm-btn">
          {isLoading ? <Circle /> : 'Add'}
            </button>
        </div>
    </form>
  )
}

export default CategoryForm;