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
import Projects from "../pages/projects/Projects";

// authenticated routes
import ChangePassword from "../pages/dashboard/ChangePassword";
import MyAccount from "../pages/dashboard/MyAccount";
import MyPurchases from "../pages/dashboard/MyPurchases";
import PurchaseDetail from "../pages/dashboard/PurchaseDetail";


// Admin routes
import AddArticle from "../pages/dashboard/admin/articles/AddArticle";
import ArticleCategories from "../pages/dashboard/admin/articles/ArticleCategories";
import AdminArticles from "../pages/dashboard/admin/articles/Articles";
import EditArticle from "../pages/dashboard/admin/articles/EditArticle";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import AddProject from "../pages/dashboard/admin/projects/AddProject";
import ProjectCategories from "../pages/dashboard/admin/projects/ProjectCategories";
import ProjectsPage from "../pages/dashboard/admin/projects/Projects";

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
                path: 'article/edit/:articleId',
                element: EditArticle
            },
            {
                path: 'article/category',
                element: ArticleCategories
            },
            {
                path: 'projects',
                element: ProjectsPage
            },
            {
                path: 'projects/new',
                element: AddProject
            },
            {
                path: 'projects/category',
                element: ProjectCategories
            }
        ]
    },
    {
        path: '*',
        element: NotFound,
        role: ['*']
    }
]

export default routes;