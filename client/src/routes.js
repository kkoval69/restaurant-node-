import Admin from "./pages/Admin";
import {ADMIN_ROUTE, IZBR_ROUTE, GAME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, GLAVN_ROUTE} from "./utils/consts";
import Izbr from "./pages/Izbr";
import Glavn from "./pages/Glavn";
import Auth from "./pages/Auth";
import GamePage from "./pages/GamePage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: IZBR_ROUTE,
        Component: Izbr
    },
]

export const publicRoutes = [
    {
        path: GLAVN_ROUTE,
        Component: Glavn
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: GAME_ROUTE + '/:id',
        Component: GamePage
    },
]
