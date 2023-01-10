import Layout from "../components/layouts/Layout"

const Contact = () => {
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

            <section className='container lg:px-0 px-4 lg:py-24'>
                <div className="lg:px-32 space-y-8">
                    <form className="font-poppins space-y-10 bg-gray-100 p-14 rounded">
                        <div className="grid lg:grid-cols-2 gap-10">
                            <div className="space-y-2">
                                <label className="block font-semibold text-gray-600">Name</label>
                                <input type="text" placeholder="Enter your name" className="w-full border py-2 px-4 rounded focus:outline-none" />
                            </div>
                            <div className="space-y-2">
                                <label className="block font-semibold text-gray-600">Email</label>
                                <input type="text" placeholder="Enter your name" className="w-full border py-2 px-4 rounded focus:outline-none" />
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-10">
                            <div className="space-y-2">
                                <label className="block font-semibold text-gray-600">Category</label>
                                <select className="w-full border py-2 px-4 rounded focus:outline-none">
                                    <option selected> ---  Select Category ---</option>
                                    <option value="web-developmet">Web Design</option>
                                    <option value="web-developmet">Web Development</option>
                                    <option value="web-developmet">Marketing</option>
                                    <option value="web-developmet">UI/UX</option>
                                    <option value="web-developmet">Cyber Security</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="block font-semibold text-gray-600">Subject</label>
                                <input type="text" placeholder="Provide Context" className="w-full border py-2 px-4 rounded focus:outline-none" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block font-semibold text-gray-600">Subject</label>
                            <textarea type="text" placeholder="Provide Context" className="w-full border py-2 px-4 rounded focus:outline-none" rows={4} />
                        </div>
                        <button type="submit" className="black-btn">Send Message</button>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default Contact