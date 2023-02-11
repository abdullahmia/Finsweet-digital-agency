// public routes
import About from "../pages/About";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ResetPassword from "../pages/auth/ResetPassword";
import BlogDetail from "../pages/blogs/BlogDetail";
import Blogs from "../pages/blogs/Blogs";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Pricing from "../pages/Pricing";
import ProjectCase from "../pages/projects/ProjectCase";

// authenticated routes
import ChangePassword from "../pages/dashboard/ChangePassword";
import MyAccount from "../pages/dashboard/MyAccount";
import MyPurchases from "../pages/dashboard/MyPurchases";
import PurchaseDetail from "../pages/dashboard/PurchaseDetail";


// Admin routes
import AddArticle from "../pages/dashboard/admin/articles/AddArticle";
import ArticleCategories from "../pages/dashboard/admin/articles/ArticleCategories";
import AdminArticles from "../pages/dashboard/admin/articles/Articles";
import Comments from "../pages/dashboard/admin/articles/Comments";
import EditArticle from "../pages/dashboard/admin/articles/EditArticle";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import Messages from "../pages/dashboard/admin/messages/Messages";
import AllOrders from "../pages/dashboard/admin/orders/AllOrders";
import AddService from "../pages/dashboard/admin/services/AddService";
import EditService from "../pages/dashboard/admin/services/EditService";
import Services from "../pages/dashboard/admin/services/Services";
import Users from "../pages/dashboard/admin/users/Users";
import OrderComplete from "../pages/OrderComplete";

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
    // {
    //     path: "/project",
    //     element: Projects,
    //     role: ['*']
    // },
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
        path: "/reset-password/:userId/:token",
        element: ResetPassword,
        role: ['*']
    },
    {
        path: "/account",
        role: ['user'],
        children: [
            {
                path: '/',
                element: MyAccount
            },
            {
                path: 'change-password',
                element: ChangePassword
            },
            {
                path: 'history',
                element: MyPurchases
            },
            {
                path: 'history/:orderId',
                element: PurchaseDetail
            }
        ]
    },
    {
        path: "/admin",
        role: ["admin"],
        children: [
            {
                path: '/',
                element: Dashboard
            },
            {
                path: 'article',
                element: AdminArticles,
            },
            {
                path: 'article/new',
                element: AddArticle
            },
            {
                path: 'article/edit/:slug',
                element: EditArticle
            },
            {
                path: 'article/category',
                element: ArticleCategories
            },
            {
                path: 'article/comments',
                element: Comments
            },
            // {
            //     path: 'projects',
            //     element: ProjectsPage
            // },
            // {
            //     path: 'projects/new',
            //     element: AddProject
            // },
            // {
            //     path: 'projects/category',
            //     element: ProjectCategories
            // },
            {
                path: 'service',
                element: Services
            },
            {
                path: 'service/new',
                element: AddService
            },
            {
                path: 'service/edit/:id',
                element: EditService
            },
            {
                path: 'orders',
                element: AllOrders
            },
            {
                path: "messages",
                element: Messages
            },
            {
                path: "users",
                element: Users
            }
        ]
    },
    {
        path: '/order-complete',
        element: OrderComplete,
        role: ['user']
    },
    {
        path: '*',
        element: NotFound,
        role: ['*']
    }
]

export default routes;