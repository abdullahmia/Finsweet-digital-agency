import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useAddCommentMutation } from '../../features/comment/commentApi';

const CommentForm = ({ article, slug }) => {
    const {register, handleSubmit, reset} = useForm();
    const {user} = useSelector(state => state.auth);

    // submit form
    const [addComment, {isError, isSuccess}] = useAddCommentMutation();

    const submitHandler = (data) => {
        console.log(data);
        addComment({ body: { article, ...data }, slug: slug });
    }

    useEffect(() => {
        if (isSuccess) {
            reset();
        }
        if (isError) {
            toast.error('Something went wrong');
        }
    }, [isError, isSuccess, reset])

  return (
    <div className='lg:px-36 mt-10 rounded font-poppins'>
        <h2 className='text-xl'>Leave a comment</h2>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-6 mt-8">
            <div className='w-full flex gap-6'>
                <div className='lg:w-full w-full'>
                    <label className='mb-2 block'>Name</label>
                    <input {...register('name')} defaultValue={user && user.firstName + ' ' + user.lastName} type="text" className='input w-full' required />
                </div>
                <div className='lg:w-full w-full'>
                    <label className='mb-2 block'>Email</label>
                      <input type="email" {...register('email')} defaultValue={user && user.email} className='input w-full' required />
                </div>
            </div>
            <div>
                <label className='mb-2 block'>Comment</label>
                <textarea className='input' {...register('body')} rows="4"></textarea>
            </div>
            <button className='bg-darkBlue py-3 px-16 text-white rounded hover:bg-black transition'>
                Post Comment
            </button>
        </form>
    </div>
  )
}

export default CommentForm;