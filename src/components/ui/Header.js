import { CiGrid41 } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import useIsAuthenticated from "../../hooks/useIsAuthenticated";


const Header = ({ toggoleDrower }) => {
    const isAuthenticated = useIsAuthenticated();
    return (
        <header className="bg-tintBlue py-6 lg:px-0 px-4">
            <nav className="container text-gray-100 flex items-center justify-between">
                <div>
                    <Link to="/" className="font-poppins text-2xl font-semibold">Finsweet</Link>
                </div>
                <div className="block lg:hidden">
                    <button onClick={toggoleDrower}>
                        <CiGrid41 size={27} />
                    </button>
                </div>
                <div className="lg:block hidden">
                    <div className="flex items-center gap-10">
                        <div>
                            <ul className="flex items-center gap-7">
                                <li>
                                    <NavLink to="/" className={(navInfo) => navInfo.isActive ? "text-[16px] font-[500] font-poppins text-gray-100" : "text-[16px] font-[500] font-poppins text-gray-300"}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={(navInfo) => navInfo.isActive ? "text-[16px] font-[500] font-poppins text-gray-100" : "text-[16px] font-[500] font-poppins text-gray-300 hover:text-gray-100 transition"}>About us</NavLink>
                                </li>
                                
                                <li>
                                    <NavLink to="/pricing" className={(navInfo) => navInfo.isActive ? "text-[16px] font-[500] font-poppins text-gray-100" : "text-[16px] font-[500] font-poppins text-gray-300 hover:text-gray-100 transition"}>Pricing</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/project" className={(navInfo) => navInfo.isActive ? "text-[16px] font-[500] font-poppins text-gray-100" : "text-[16px] font-[500] font-poppins text-gray-300 hover:text-gray-100 transition"}>Projects</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog" className={(navInfo) => navInfo.isActive ? "text-[16px] font-[500] font-poppins text-gray-100" : "text-[16px] font-[500] font-poppins text-gray-300 hover:text-gray-100 transition"}>Blogs</NavLink>
                                </li>

                                {
                                    isAuthenticated ? <li>
                                        <NavLink to="/account" className={(navInfo) => navInfo.isActive ? "text-[16px] font-[500] font-poppins text-gray-100" : "text-[16px] font-[500] font-poppins text-gray-300 hover:text-gray-100 transition"}>My Account</NavLink>
                                    </li> : <>
                                            <li>
                                                <NavLink to="/register" className={(navInfo) => navInfo.isActive ? "text-[16px] font-[500] font-poppins text-gray-100" : "text-[16px] font-[500] font-poppins text-gray-300 hover:text-gray-100 transition"}>Register</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/login" className={(navInfo) => navInfo.isActive ? "text-[16px] font-[500] font-poppins text-gray-100" : "text-[16px] font-[500] font-poppins text-gray-300 hover:text-gray-100 transition"}>Login</NavLink>
                                            </li>
                                    
                                    </>
                                }
                                
                                
                            </ul>
                        </div>
                        <div>
                            <Link to="/contact" className="transparent-btn">contact us</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;