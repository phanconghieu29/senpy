// import { Fragment } from "react";
// // import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { publicRoutes } from "./routes";
// import { DefaultLayout } from "./components/Layout";

// const App = (params) => {

//     return (
//         <Router basename="/senpy">
//             <div className="app">

//                 <Routes>
//                     {publicRoutes.map((route, index) => {
//                         const Page = route.component;

//                         let Layout = DefaultLayout;

//                         if (route.layout) {
//                             Layout = route.layout;
//                         } else if (route.layout === null) {
//                             Layout = Fragment;
//                         }

//                         return (
//                             <Route
//                                 key={index}
//                                 path={route.path}
//                                 element={
//                                     <Layout>
//                                         <Page />
//                                     </Layout>
//                                 }
//                             />
//                         );
//                     })}
//                 </Routes>
//             </div>
//         </Router>
//         // <div className="app">
//         //     <DefaultLayout />
//         // </div>
//     );
// };

// export default App;

import { Fragment } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout";

const App = () => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    return (
        <Router basename="/senpy">
            <div className="app">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout
                                        isAuthenticated={isAuthenticated}
                                        setAuthenticated={setAuthenticated}
                                    >
                                        <Page
                                            setAuthenticated={setAuthenticated}
                                        />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
