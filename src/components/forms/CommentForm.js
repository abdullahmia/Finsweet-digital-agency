import { useForm } from 'react-hook-form';

const CommentForm = () => {
    const {register, handleSubmit, reset} = useForm();

    // submit form
    const submitHandler = (data) => {
        console.log(data);
        // reset();
    }

  return (
    <div className='lg:px-36 mt-10 rounded font-poppins'>
        <h2 className='text-xl'>Leave a comment</h2>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-6 mt-8">
            <div className='w-full flex gap-6'>
                <div className='lg:w-full w-full'>
                    <label className='mb-2 block'>Name</label>
                    <input {...register('name')} type="text" className='input w-full' required />
                </div>
                <div className='lg:w-full w-full'>
                    <label className='mb-2 block'>Email</label>
                    <input type="email" {...register('email')} className='input w-full' required />
                </div>
            </div>
            <div>
                <label className='mb-2 block'>Comment</label>
                <textarea className='input' {...register('comment')} rows="4"></textarea>
            </div>
            <button className='bg-darkBlue py-3 px-16 text-white rounded hover:bg-black transition'>Post</button>
        </form>
    </div>
  )
}

export default CommentForm;