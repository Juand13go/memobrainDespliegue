import { BrowserRouter, useRoutes } from 'react-router-dom';
import Login from '../Login';
import BoardGame from '../BoardGame';
import NotFound from '../NotFound';
import BoardGameTest from '../BoardGameTest';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProfilePage from '../pages/ProfilePage';
import CategoryPage from '../pages/CategoryPage';
import SpanishPage from '../pages/SpanishPage';
import MathPage from '../pages/MathPage';
import CodingPage from '../pages/CodingPage';
import SciencePage from '../pages/SciencesPage';
import BiologyPage from '../pages/BiologyPage'
import ChemistryPage from '../pages/ChemistryPage'
import PhysicsPage from '../pages/PhysicsPage'
import HowtoPlay from '../pages/HowtoPlay';
import MemoBrain from '../pages/MemoBrain';
import Boardlv1 from '../levels/Boardlv1';
import Boardlv2 from '../levels/Boardlv2';
import Boardlv3 from '../levels/Boardlv3';
import Boardlv4 from '../levels/Boardlv4';
import Boardlv5 from '../levels/Boardlv5';
import Boardlv6 from '../levels/Boardlv6';
import Boardlv7 from '../levels/Boardlv7';
import Boardlv8 from '../levels/Boardlv8';
import Boardlv9 from '../levels/Boardlv9';
import Boardlv10 from '../levels/Boardlv10';
import Boardlv1c from '../levels/Boardlv1c';
import Boardlv2c from '../levels/Boardlv2c';
import Boardlv3c from '../levels/Boardlv3c';
import Boardlv4c from '../levels/Boardlv4c';
import Boardlv5c from '../levels/Boardlv5c';
import Boardlv6c from '../levels/Boardlv6c';
import Boardlv7c from '../levels/Boardlv7c';
import Boardlv8c from '../levels/Boardlv8c';
import Boardlv9c from '../levels/Boardlv9c';
import Boardlv10c from '../levels/Boardlv10c';
import Boardlv1m from '../levels/Boardlv1m';
import Boardlv2m from '../levels/Boardlv2m';
import Boardlv3m from '../levels/Boardlv3m';
import Boardlv4m from '../levels/Boardlv4m';
import Boardlv5m from '../levels/Boardlv5m';
import Boardlv6m from '../levels/Boardlv6m';
import Boardlv7m from '../levels/Boardlv7m';
import Boardlv8m from '../levels/Boardlv8m';
import Boardlv9m from '../levels/Boardlv9m';
import Boardlv10m from '../levels/Boardlv10m';
import Boardlv1b from '../levels/Boardlv1b';
import Boardlv2b from '../levels/Boardlv2b';
import Boardlv3b from '../levels/Boardlv3b';
import Boardlv4b from '../levels/Boardlv4b';
import Boardlv5b from '../levels/Boardlv5b';
import Boardlv1p from '../levels/Boardlv1p';
import Boardlv2p from '../levels/Boardlv2p';
import Boardlv3p from '../levels/Boardlv3p';
import Boardlv4p from '../levels/Boardlv4p';
import Boardlv5p from '../levels/Boardlv5p';
import Boardlv1q from '../levels/Boardlv1q';
import Boardlv2q from '../levels/Boardlv2q';
import Boardlv3q from '../levels/Boardlv3q';
import Boardlv4q from '../levels/Boardlv4q';
import Boardlv5q from '../levels/Boardlv5q';
import RankingPage from '../pages/RankingPage';
import GuestHomePage from '../pages/GuestHomePage';
import ShopPage from '../pages/ShopPage';


const AppRoutes = () => {
    if (localStorage.getItem('login') === 'logged in') {
        return useRoutes([
            { path: "/", element: <HomePage /> },
            { path: "/home", element: <HomePage /> },
            { path: "/shop", element: <ShopPage /> },
            { path: "/ranking", element: <RankingPage /> },
            { path: "/learn", element: <CategoryPage /> },
            { path: "/spanish", element: <SpanishPage /> },
            { path: "/math", element: <MathPage /> },
            { path: "/coding", element: <CodingPage/> },
            { path: "/science", element: <SciencePage/> },
            { path: "/biology", element: <BiologyPage/> },
            { path: "/physics", element: <PhysicsPage/> },
            { path: "/chemistry", element: <ChemistryPage /> },
            { path: "/biology-level1", element: <Boardlv1b /> },
            { path: "/biology-level2", element: <Boardlv2b /> },
            { path: "/biology-level3", element: <Boardlv3b /> },
            { path: "/biology-level4", element: <Boardlv4b /> },
            { path: "/biology-level5", element: <Boardlv5b /> },
            { path: "/chemistry-level1", element: <Boardlv1q /> },
            { path: "/chemistry-level2", element: <Boardlv2q /> },
            { path: "/chemistry-level3", element: <Boardlv3q /> },
            { path: "/chemistry-level4", element: <Boardlv4q /> },
            { path: "/chemistry-level5", element: <Boardlv5q /> },
            { path: "/physics-level1", element: <Boardlv1p /> },
            { path: "/physics-level2", element: <Boardlv2p /> },
            { path: "/physics-level3", element: <Boardlv3p /> },
            { path: "/physics-level4", element: <Boardlv4p /> },
            { path: "/physics-level5", element: <Boardlv5p /> },
            { path: "/level1", element: <Boardlv1 /> },
            { path: "/level2", element: <Boardlv2 /> },
            { path: "/level3", element: <Boardlv3 /> },
            { path: "/level4", element: <Boardlv4 /> },
            { path: "/level5", element: <Boardlv5 /> },
            { path: "/level6", element: <Boardlv6 /> },
            { path: "/level7", element: <Boardlv7 /> },
            { path: "/level8", element: <Boardlv8 /> },
            { path: "/level9", element: <Boardlv9 /> },
            { path: "/level10", element: <Boardlv10 /> },
            { path: "/coding-level1", element: <Boardlv1c /> },
            { path: "/coding-level2", element: <Boardlv2c /> },
            { path: "/coding-level3", element: <Boardlv3c /> },
            { path: "/coding-level4", element: <Boardlv4c /> },
            { path: "/coding-level5", element: <Boardlv5c /> },
            { path: "/coding-level6", element: <Boardlv6c /> },
            { path: "/coding-level7", element: <Boardlv7c /> },
            { path: "/coding-level8", element: <Boardlv8c /> },
            { path: "/coding-level9", element: <Boardlv9c /> },
            { path: "/coding-level10", element: <Boardlv10c /> },
            { path: "/math-level1", element: <Boardlv1m /> },
            { path: "/math-level2", element: <Boardlv2m /> },
            { path: "/math-level3", element: <Boardlv3m /> },
            { path: "/math-level4", element: <Boardlv4m /> },
            { path: "/math-level5", element: <Boardlv5m /> },
            { path: "/math-level6", element: <Boardlv6m /> },
            { path: "/math-level7", element: <Boardlv7m /> },
            { path: "/math-level8", element: <Boardlv8m /> },
            { path: "/math-level9", element: <Boardlv9m /> },
            { path: "/math-level10", element: <Boardlv10m /> },
            { path: "/board", element: <BoardGame /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/profile", element: <ProfilePage /> },
            { path: "/howtoplay", element: <HowtoPlay/>},
            { path: "/memobrain", element: <MemoBrain/>},

            { path: "/*", element: <NotFound /> }
        ]);
    } else {
        return useRoutes([
            { path: "/", element: <Login /> },
            { path: "/login", element: <Login /> },
            { path: "/board-test", element: <BoardGameTest /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/*", element: <NotFound /> }
        ]);
    }
}

export default AppRoutes;
