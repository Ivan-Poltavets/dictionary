import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import HomePage from "../pages/HomePage/HomePage";
import DictionaryPage from "../pages/DictionaryPage/DictionaryPage";


export const LOGIN_ROUTE = "/login"
export const REGISTER_ROUTE = "/register"
export const HOME_ROUTE = "/"
export const DICTIONARY_ROUTE = "/dictionary"

export const routes = [
    {
        path: HOME_ROUTE,
        Component: HomePage
    },
    {
        path: DICTIONARY_ROUTE,
        Component: DictionaryPage
    },
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path: REGISTER_ROUTE,
        Component: RegisterPage
    }
];