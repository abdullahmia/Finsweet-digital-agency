import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Layout from "../components/layouts/Layout";
import Circle from '../components/loaders/Circle';
import { useAddContactMutation } from "../features/contact/contactApi";

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const [addContact, {isLoading, isSuccess, data, isError, error}] = useAddContactMutation()
    
    const addContactHandler = (data) => {

        if (!data.name || !data.email || !data.category || !data.subject || !data.message) {
            toast.error('Please fill all the fields');
            return;
        }

        addContact(data);
        reset();
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success(data.msg);
        } 
        if (isError) {
            toast.error(error.msg);
        }
    }, [isSuccess, isError, data, error])
    
    return (
        <Layout title="Contact Us | Sweet Agency">
            <section className="py-24 lg:px-0 px-4">
                <div className="container">
                    <div className="lg:w-[700px] w-full mx-auto">
                        <h2 className='text-[35px] text-center font-poppins text-darkBlue font-semibold'>Contact Us</h2>
                        <p className="font-poppins text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>
            </section>

            <section className='container lg:px-0 px-4 lg:py-16'>
                <div className="lg:px-32 space-y-8">
                    <form onSubmit={handleSubmit(addContactHandler)} className="font-poppins space-y-10 bg-gray-100 p-14 rounded">
                        <div className="grid lg:grid-cols-2 gap-10">
                            <div className="space-y-2">
                                <label className="block font-semibold text-gray-600">Name</label>
                                <input type="text" {...register('name')} placeholder="Enter your name" className="w-full border py-2 px-4 rounded focus:outline-none" required />
                            </div>
                            <div className="space-y-2">
                                <label className="block font-semibold text-gray-600">Email</label>
                                <input type="email" {...register('email')} placeholder="Enter your email" className="w-full border py-2 px-4 rounded focus:outline-none" required />
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-10">
                            <div className="space-y-2">
                                <label className="block font-semibold text-gray-600">Category</label>
                                <select {...register('category')} className="w-full border py-2 px-4 rounded focus:outline-none" required>
                                    <option selected> ---  Select Category ---</option>
                                    <option value="web design">Web Design</option>
                                    <option value="web developmet">Web Development</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="ui/ux">UI/UX</option>
                                    <option value="cyber security">Cyber Security</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="block font-semibold text-gray-600">Subject</label>
                                <input type="text" {...register('subject')} placeholder="Provide Context" className="w-full border py-2 px-4 rounded focus:outline-none" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block font-semibold text-gray-600">Message</label>
                            <textarea type="text" {...register('message')} placeholder="Provide Context" className="w-full border py-2 px-4 rounded focus:outline-none" rows={4} />
                        </div>
                        <button type="submit" className="black-btn">
                            {isLoading ? <><Circle /> Sending...</> : 'Send Message'}
                        </button>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default Contact