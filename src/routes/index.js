import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login";
import Feed from "../pages/Feed/Feed";
// import ProfileLayout from "../components/Layout/ProfileLayout";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/dang-nhap", component: Login },
    { path: "/feed", component: Feed },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
