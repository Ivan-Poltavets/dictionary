import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { routes } from "./paths";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                {routes.map(({path, Component}) => (
                    <Route key={path} path={path} element={<Component/>}/>
                ))}
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;

