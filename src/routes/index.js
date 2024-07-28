import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login";
import Feed from "../pages/Feed/Feed";
import Message from "../pages/Message/Message";
import Schedule from "../pages/Schedule/Schedule";

import ProfileLayout from "../components/Layout/ProfileLayout";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/dang-nhap", component: Login },
    { path: "/feed", component: Feed, layout: ProfileLayout  },
    { path: "/messages", component: Message, layout: ProfileLayout },
    { path: "/schedule", component: Schedule },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
