// public routes
import About from "../pages/About";
import ForgotPassword from "../pages/account/ForgotPassword";
import Login from "../pages/account/Login";
import Register from "../pages/account/Register";
import ResetPassword from "../pages/account/ResetPassword";
import BlogDetail from "../pages/blogs/BlogDetail";
import Blogs from "../pages/blogs/Blogs";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import ProjectCase from "../pages/projects/ProjectCase";
import Projects from "../pages/projects/Projects";


const routes = [
    {
        path: "/",
        element: Home,
        role: ['*']
    },
    {
        path: "/about",
        element: About,
        role: ['*']
    },
    {
        path: "/pricing",
        element: Pricing,
        role: ['*']
    },
    {
        path: "/project",
        element: Projects,
        role: ['*']
    },
    {
        path: "/project/:projectSlug",
        element: ProjectCase,
        role: ['*']
    },
    {
        path: "/blog",
        element: Blogs,
        role: ['*']
    },
    {
        path: "/blog/:slug",
        element: BlogDetail,
        role: ['*']
    },
    {
        path: "/contact",
        element: Contact,
        role: ['*']
    },
    {
        path: "/login",
        element: Login,
        role: ['*']
    },
    {
        path: "/register",
        element: Register,
        role: ['*']
    },
    {
        path: "/forgot-password",
        element: ForgotPassword,
        role: ['*']
    },
    {
        path: "/reset-password",
        element: ResetPassword,
        role: ['*']
    }
]

export default routes;