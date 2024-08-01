import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login";
import Feed from "../pages/Feed/Feed";
import Message from "../pages/Message/Message";
import Schedule from "../pages/Schedule/Schedule";
import Blog from "../pages/Blog/Blog";
// import Admin from "../pages/Admin/Admin";

import Dashboard from "../pages/Admin/scenes/dashboard";
import Team from "../pages/Admin/scenes/team";
import Mentor from "../pages/Admin/scenes/mentors";
import Mentee from "../pages/Admin/scenes/mentees";
import Invoices from "../pages/Admin/scenes/invoices";
import Form from "../pages/Admin/scenes/form";
import Bar from "../pages/Admin/scenes/bar";
import Pie from "../pages/Admin/scenes/pie";
import Line from "../pages/Admin/scenes/line";
import ManageForms from "../pages/Admin/scenes/manage_form";
import FAQ from "../pages/Admin/scenes/faq";
import Calendar from "../pages/Admin/scenes/calendar/calendar";
import Geography from "../pages/Admin/scenes/geography";

import ProfileLayout from "../components/Layout/ProfileLayout";
import AdminLayout from "../pages/Admin/Admin";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/dang-nhap", component: Login },
    { path: "/feed", component: Feed, layout: ProfileLayout },
    { path: "/messages", component: Message, layout: ProfileLayout },
    { path: "/schedule", component: Schedule },
    { path: "/blog", component: Blog },

    // { path: "/admin", component: Admin, layout: AdminLayout },
    { path: "/dashboard", component: Dashboard, layout: AdminLayout },
    { path: "/team", component: Team, layout: AdminLayout },
    { path: "/mentors", component: Mentor, layout: AdminLayout },
    { path: "/mentees", component: Mentee, layout: AdminLayout },
    { path: "/invoices", component: Invoices, layout: AdminLayout },
    { path: "/form", component: Form, layout: AdminLayout },
    { path: "/bar", component: Bar, layout: AdminLayout },
    { path: "/line", component: Line, layout: AdminLayout },
    { path: "/pie", component: Pie, layout: AdminLayout },
    { path: "/manage-form", component: ManageForms, layout: AdminLayout },
    { path: "/faq", component: FAQ, layout: AdminLayout },
    { path: "/calendar", component: Calendar, layout: AdminLayout },
    { path: "/geography", component: Geography, layout: AdminLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
