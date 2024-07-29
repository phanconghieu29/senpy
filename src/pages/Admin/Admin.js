import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Mentee from "./scenes/mentees";
// import Mentor from "./scenes/mentors";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar/calendar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import "./Admin.css";

function Admin({children}) {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar isSidebar={isSidebar} />
                    <main className="content">
                        <Topbar setIsSidebar={setIsSidebar} />
                        {children}
                        {/* <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/mentors" element={<Mentor />} />
                            <Route path="/mentees" element={<Mentee />} />
                            <Route path="/invoices" element={<Invoices />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/line" element={<Line />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/geography" element={<Geography />} />
                        </Routes> */}
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default Admin;
