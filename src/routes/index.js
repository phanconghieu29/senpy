import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
// import ProfileLayout from "../components/Layout/ProfileLayout";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/about", component: About},
    { path: "/contact", component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
