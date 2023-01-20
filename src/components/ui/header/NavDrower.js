import { Link, NavLink } from "react-router-dom"

const NavDrower = ({ isDrowerOpen, setIsDrowerOpen }) => {
    return (
        <>
            {
                isDrowerOpen && <div onClick={setIsDrowerOpen} className="lg:hidden block h-full w-full z-[100] absolute top-0 left-0 bg-tintBlue opacity-75 transition duration-150"></div>
            }

            <div className="lg:hidden block z-[150] absolute top-0 h-screen w-[60%] bg-white transition duration-150" style={{ transform: `translateX(${isDrowerOpen ? "0" : "-100%"})` }}>
                {/* Drower Menu will be here... */}
                <div className="">
                    <div className="border-b py-4 px-5">
                        <Link to="/" className="font-poppins text-2xl font-semibold">Finsweet</Link>
                    </div>

                    {/* Menues */}
                    <div className="py-4 px-5">
                        <ul className="space-y-4">
                            <li>
                                <NavLink to="/" className={(navInfo) => navInfo.isActive ? "text-[18px] font-[500] font-poppins text-indigo-600" : "text-[18px] font-[500] font-poppins text-gray-600"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={(navInfo) => navInfo.isActive ? "text-[18px] font-[500] font-poppins text-indigo-600" : "text-[18px] font-[500] font-poppins text-gray-700 hover:text-gray-800 transition"}>About us</NavLink>
                            </li>

                            <li>
                                <NavLink to="/pricing" className={(navInfo) => navInfo.isActive ? "text-[18px] font-[500] font-poppins text-indigo-600" : "text-[18px] font-[500] font-poppins text-gray-700 hover:text-gray-800 transition"}>Pricing</NavLink>
                            </li>
                            <li>
                                <NavLink to="/project" className={(navInfo) => navInfo.isActive ? "text-[18px] font-[500] font-poppins text-indigo-600" : "text-[18px] font-[500] font-poppins text-gray-700 hover:text-gray-800 transition"}>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" className={(navInfo) => navInfo.isActive ? "text-[18px] font-[500] font-poppins text-indigo-600" : "text-[18px] font-[500] font-poppins text-gray-700 hover:text-gray-800 transition"}>Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register" className={(navInfo) => navInfo.isActive ? "text-[18px] font-[500] font-poppins text-indigo-600" : "text-[18px] font-[500] font-poppins text-gray-700 hover:text-gray-800 transition"}>Register</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login" className={(navInfo) => navInfo.isActive ? "text-[18px] font-[500] font-poppins text-indigo-600" : "text-[18px] font-[500] font-poppins text-gray-700 hover:text-gray-800 transition"}>Login</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavDrower