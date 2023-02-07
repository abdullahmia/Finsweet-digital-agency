import { BiCart, BiCategory, BiLayer, BiLockAlt, BiMailSend, BiMessageSquareEdit, BiNotepad, BiUser, BiUserPin } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import avatar from '../../assets/images/team/member-1.png';
import { userLoggedOut } from '../../features/auth/authSlice';


const Sidebar = () => {
    const {user} = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // handle logout
    const logout = () => {
        dispatch(userLoggedOut());
        navigate('/login');
    }
    
    return (
        <div className="col-span-3 font-poppins">
            {/* <!-- account profile --> */}
            <div className="px-4 py-3 shadow flex items-center gap-4 bg-white">
                <div className="flex-shrink-0">
                    <img
                        src={avatar}
                        alt="avatar"
                        className="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover"
                    />
                </div>
                <div>
                    <p className="text-gray-600">Hello,</p>
                    <h4 className="text-gray-800 capitalize font-medium">
                        {user?.firstName} {user?.lastName}
                    </h4>
                </div>
            </div>
            {/* <!-- account profile end --> */}

            {/* <!-- profile NavLinks --> */}
            <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                {/* <!-- single NavLink --> */}

                {
                    user?.role === 'admin' && <>
                    
                        <div className="space-y-1 pl-8 pt-4">
                            <NavLink
                                to="/admin"
                                end={true}
                                className={(navInfo) => navInfo.isActive ? "flex items-center gap-2 font-semibold text-indigo-500" : "flex items-center gap-2"}
                            >
                                <BiNotepad size={20} />
                                <span>Dashbaord</span>
                            </NavLink>
                        </div>

                        <div className="space-y-1 pl-8 pt-4">
                            <NavLink
                                to="/admin/orders"
                                end={true}
                                className={(navInfo) => navInfo.isActive ? "flex items-center gap-2 font-semibold text-indigo-500" : "flex items-center gap-2"}
                            >
                                <BiMessageSquareEdit size={20} />
                                <span>Orders</span>
                            </NavLink>
                        </div>


                        <div className="space-y-1 pl-8 pt-4">
                            <NavLink
                                to="/admin/article"
                                end={true}
                                className={(navInfo) => navInfo.isActive ? "flex items-center gap-2 font-semibold text-indigo-500" : "flex items-center gap-2"}
                            >
                                <BiMessageSquareEdit size={20} />
                                <span>Articles</span>
                            </NavLink>
                            <NavLink
                                to="/admin/article/category"
                                className={(navInfo) => navInfo.isActive ? "flex items-center gap-2 font-semibold text-indigo-500" : "flex items-center gap-2"}
                            >
                                <span className='ml-7'>Categories</span>
                            </NavLink>
                        </div>

                        <div className="space-y-1 pl-8 pt-4">
                            <NavLink
                                to="/admin/projects"
                                end={true}
                                className={(navInfo) => navInfo.isActive ? "flex items-center gap-2 font-semibold text-indigo-500" : "flex items-center gap-2"}
                            >
                                <BiCategory size={20} />
                                <span>Projects</span>
                            </NavLink>
                            <NavLink
                                to="/admin/projects/category"
                                className={(navInfo) => navInfo.isActive ? "flex items-center gap-2 font-semibold text-indigo-500" : "flex items-center gap-2"}
                            >
                                <span className='ml-7'>Categories</span>
                            </NavLink>
                        </div>

                        <div className="space-y-1 pl-8 pt-4">
                            <NavLink
                                to="/admin/service"
                                end={true}
                                className={(navInfo) => navInfo.isActive ? "flex items-center gap-2 font-semibold text-indigo-500" : "flex items-center gap-2"}
                            >
                                <BiLayer size={20} />
                                <span>Services</span>
                            </NavLink>
                        </div>

                        <div className="space-y-1 pl-8 pt-4">
                            <NavLink
                                to="/admin/users"
                                end={true}
                                className={(navInfo) => navInfo.isActive ? "flex items-center gap-2 font-semibold text-indigo-500" : "flex items-center gap-2"}
                            >
                                <BiUser size={20} />
                                <span>Users</span>
                            </NavLink>
                        </div>
                        <div className="space-y-1 pl-8 pt-4">
                            <NavLink
                                to="/admin/messages"
                                end={true}
                                className={(navInfo) => navInfo.isActive ? "flex items-center gap-2 font-semibold text-indigo-500" : "flex items-center gap-2"}
                            >
                                <BiMailSend size={20} />
                                <span>Messages</span>
                            </NavLink>
                        </div>
                    </>
                }

                <div className="space-y-1 pl-8 pt-6">
                    <NavLink
                        to="/account"
                        className={(navInfo) => navInfo.isActive ? "flex items-center gap-2 font-semibold text-indigo-500" : "flex items-center gap-2"}
                        end={true}
                    >
                        <BiUserPin size={20} />
                        <span>Profile Informaton</span>
                    </NavLink>

                    <NavLink
                        to="/account/change-password"
                        className={(navInfo) => navInfo.isActive ? "flex items-center gap-2 font-semibold text-indigo-500" : "flex items-center gap-2"}
                        end={true}
                    >
                        <BiLockAlt size={20} />
                        <span>Change Password</span>
                    </NavLink>

                </div>


                {
                    user?.role === 'user' && <div className="space-y-1 pl-8 pt-4">
                        <NavLink
                            to="/account/history"
                            className={(navInfo) => navInfo.isActive ? "flex items-center gap-2 font-semibold text-indigo-500" : "flex items-center gap-2"}
                        >
                            <BiCart size={20} />
                            <span>My Purchases</span>
                        </NavLink>

                    </div>
                }


               

                



                {/* <!-- single NavLink end --> */}
                {/* <!-- single NavLink --> */}
                <div className="pl-8 pt-4">
                    <button onClick={logout} className="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
                        logout
                        <span className="absolute -left-8 top-0 text-base">
                            <i className="fas fa-sign-out-alt"></i>
                        </span>
                    </button>
                </div>
                {/* <!-- single NavLink end --> */}
            </div>
            {/* <!-- profile NavLinks end --> */}
        </div>
    )
}

export default Sidebar