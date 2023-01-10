import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <footer className=" bg-tintBlue">
            <div className="container text-gray-100 grid lg:grid-cols-2 grid-cols-1 gap-8 font-poppins pt-20 lg:mb-0 mb-7 lg:px-0 px-4">
                <div>
                    <h2 className="font-poppins text-2xl font-semibold">Finsweet</h2>
                    <p>We are always open to discuss your project and improve your online presence.</p>

                    <div className="flex items-center gap-5 bg-yellow text-gray-700 p-6 mt-10">
                        <div>
                            <h2 className="text-[18px] font-poppins">Email me at</h2>
                            <p className="text-[16px]">contact@website.com</p>
                        </div>
                        <div>
                            <h2 className="text-[18px] font-poppins">Call us</h2>
                            <p className="text-[16px]">0927 6277 28525</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-3">
                    <h1 className="text-4xl font-semibold">Lets Talk!</h1>
                    <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                    <div className="flex items-center gap-5">
                        <CiFacebook size={25} />
                        <CiTwitter size={25} />
                        <CiInstagram size={25} />
                        <CiLinkedin size={25} />
                    </div>
                </div>
            </div>

            <div className="bg-white shadow py-5 font-poppins">
                <div className="container grid lg:grid-cols-2 grid-cols-1 lg:px-0 px-4">
                    <div>
                        <p className="text-gray-900">Copyright 2021, Finsweet.com</p>
                    </div>
                    <div className="ml-auto lg:block hidden">
                        <ul className="flex items-center gap-7 text-gray-900">
                            <li>
                                <Link href="/" className="text-[16px] font-[500]">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-[16px] font-[500]">About us</Link>
                            </li>
                            <li>
                                <Link href="/features" className="text-[16px] font-[500]">Features</Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-[16px] font-[500]">Pricing</Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-[16px] font-[500]">FAQ</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-[16px] font-[500]">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer