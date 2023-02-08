import moment from 'moment';
import { useState } from 'react';
import { BiBell } from 'react-icons/bi';
import { CiGrid41 } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useGetAllNotificationsQuery } from '../../features/notification/notificationApi';
import { resetUnread } from '../../features/notification/notificationSlice';
import useIsAuthenticated from "../../hooks/useIsAuthenticated";


const Header = ({ toggoleDrower }) => {
    const [showNotification, setShowNotification] = useState(false);
    const isAuthenticated = useIsAuthenticated();
    const {user} = useSelector(state => state.auth);
    const {unread} = useSelector(state => state.notification);

    const dispatch = useDispatch();

    // reset unread notifications
    const resetUnreadHandler = () => {
        dispatch(resetUnread());
        setShowNotification(!showNotification);
    }

    // get notifications
    const { data: notification } = useGetAllNotificationsQuery()

    // get current user notifications
    const currentUserNotifications = notification?.filter((item) => item.recipient === user?._id);


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
                                    isAuthenticated ? user?.role === 'admin' ? <li>
                                        <NavLink to="/admin" className={(navInfo) => navInfo.isActive ? "text-[16px] font-[500] font-poppins text-gray-100" : "text-[16px] font-[500] font-poppins text-gray-300 hover:text-gray-100 transition"}>Dashbaord</NavLink>
                                    </li> : <li>
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

                                {/* notification icon button with number with dropdowns */}
                                <div className="relative">
                                    <button onClick={resetUnreadHandler}>
                                        <div className="relative">
                                            <BiBell size={27} />
                                            <span className="absolute top-0 right-0 bg-red-500 rounded-full text-xs text-white w-4 h-4 flex items-center justify-center">{unread}</span>
                                        </div>
                                    </button>
                                    {
                                        showNotification && <div className="absolute top-14 right-0 bg-white w-80 rounded-md shadow-lg z-50">
                                            <div className="p-4">
                                                <h3 className="text-[16px] font-[500] font-poppins text-gray-500">Notifications</h3>
                                            </div>
                                            <div className="border-t border-gray-200">
                                                <ul className="p-4 h-64 overflow-y-scroll">
                                                    {
                                                        currentUserNotifications?.length > 0 ? currentUserNotifications.map((notification, index) => (
                                                            <Link to={notification?.link} className="flex items-center gap-4 mb-4" key={index}>
                                                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                                                                    <BiBell size={27} />
                                                                </div>
                                                                <div>
                                                                    <p className="text-[14px] font-[400] font-poppins text-gray-700">{notification.message}</p>
                                                                    <p className="text-[10px] font-[400] font-poppins text-gray-500">{moment(notification.createdAt).fromNow()}</p>
                                                                </div>
                                                            </Link>
                                                        )) : <li className="flex items-center gap-4 mb-4">
                                                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                                                                <BiBell size={27} />
                                                            </div>
                                                            <div>
                                                                <h3 className="text-[16px] font-[500] font-poppins text-gray-500">No notifications</h3>
                                                            </div>
                                                        </li>
                                                    }
                                                    

                                                </ul>
                                            </div>
                                        </div>
                                    }
                                </div>
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